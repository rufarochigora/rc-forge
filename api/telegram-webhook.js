// api/telegram-webhook.js
//
// Vercel serverless function. Set this as your Telegram bot's webhook URL:
//   https://<your-vercel-domain>/api/telegram-webhook
//
// Telegram -> this function -> GitHub (data/products.json + product images)
// -> Vercel auto-redeploys from the new commit -> website updates.
//
// Required env vars (set in Vercel Project Settings -> Environment Variables):
//   TELEGRAM_BOT_TOKEN         Bot token from @BotFather
//   TELEGRAM_WEBHOOK_SECRET    Random string, also passed to setWebhook as secret_token
//   TELEGRAM_ALLOWED_USER_IDS  Comma-separated Telegram numeric user IDs allowed to manage the catalog
//   GITHUB_TOKEN               Fine-grained PAT with Contents: Read & write on the repo
//   GITHUB_OWNER                e.g. "rufarochigora"
//   GITHUB_REPO                 e.g. "rc-forge"
//   GITHUB_BRANCH                default "main"
//   PRODUCTS_JSON_PATH          default "public/data/products.json"

import { sendMessage, downloadFile } from './_lib/telegram.js';
import { updateProductsJson, uploadProductImage } from './_lib/github.js';
import { parseFields, buildNewProduct, applyEdits } from './_lib/parseProduct.js';

function isAuthorized(userId) {
  const allowed = (process.env.TELEGRAM_ALLOWED_USER_IDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  return allowed.includes(String(userId));
}

const HELP_TEXT = `*RC Forge Catalog Bot*

*/add* — add a product. Send as one message:
\`\`\`
/add
Name: ESP32 DevKit V1
SKU: ESP32-001
Price: 8
Currency: USD
Stock: 15
Category: Microcontrollers
Description: ESP32 dev board with Wi-Fi and Bluetooth
\`\`\`
SKU, Currency and Stock are optional (SKU auto-generated, Currency defaults to USD, Stock defaults to 0). Attach a photo with this as the caption to set the product image too.

*/edit SKU-1* — update one or more fields:
\`\`\`
/edit ESP32-001
Price: 9
Stock: 20
\`\`\`
Attach a new photo with this as the caption to replace the image.

*/delete SKU-1* — remove a product from the catalog.

*/list* — show all current SKUs.`;

async function handleAdd(chatId, bodyLines, photo) {
  const fields = parseFields(bodyLines);
  const updated = await updateProductsJson(async (products) => {
    const existingSkus = new Set(products.map((p) => p.sku));
    const product = buildNewProduct(fields, existingSkus);
    const now = new Date().toISOString();
    product.createdAt = now;
    product.updatedAt = now;

    if (photo) {
      const { buffer, ext } = await downloadFile(photo.file_id);
      product.image = await uploadProductImage(product.sku, ext, buffer);
    }

    products.push(product);
    return products;
  }, `catalog: add ${fields.name || 'product'} via Telegram`);

  const added = updated[updated.length - 1];
  await sendMessage(
    chatId,
    `✅ Added *${added.name}*\nSKU: \`${added.sku}\`\nPrice: ${added.price} ${added.currency}\nStock: ${added.stock}\nCategory: ${added.category}`
  );
}

async function handleEdit(chatId, sku, bodyLines, photo) {
  const fields = parseFields(bodyLines);
  let editedProduct = null;

  await updateProductsJson(async (products) => {
    const index = products.findIndex((p) => p.sku === sku);
    if (index === -1) {
      throw new Error(`No product found with SKU "${sku}".`);
    }
    let product = applyEdits(products[index], fields);

    if (photo) {
      const { buffer, ext } = await downloadFile(photo.file_id);
      product.image = await uploadProductImage(sku, ext, buffer);
    }

    product.updatedAt = new Date().toISOString();
    products[index] = product;
    editedProduct = product;
    return products;
  }, `catalog: edit ${sku} via Telegram`);

  await sendMessage(
    chatId,
    `✅ Updated *${editedProduct.name}*\nSKU: \`${editedProduct.sku}\`\nPrice: ${editedProduct.price} ${editedProduct.currency}\nStock: ${editedProduct.stock}\nCategory: ${editedProduct.category}`
  );
}

async function handleDelete(chatId, sku) {
  let removedName = null;
  await updateProductsJson(async (products) => {
    const index = products.findIndex((p) => p.sku === sku);
    if (index === -1) {
      throw new Error(`No product found with SKU "${sku}".`);
    }
    removedName = products[index].name;
    products.splice(index, 1);
    return products;
  }, `catalog: delete ${sku} via Telegram`);

  await sendMessage(chatId, `🗑️ Deleted *${removedName}* (\`${sku}\`).`);
}

async function handleList(chatId) {
  const { getFile } = await import('./_lib/github.js');
  const path = process.env.PRODUCTS_JSON_PATH || 'public/data/products.json';
  const file = await getFile(path);
  const products = file ? JSON.parse(file.content) : [];
  if (products.length === 0) {
    await sendMessage(chatId, 'Catalog is empty.');
    return;
  }
  const lines = products
    .slice(0, 60)
    .map((p) => `• \`${p.sku}\` — ${p.name} — ${p.price} ${p.currency} — stock ${p.stock ?? 'n/a'}`);
  const more = products.length > 60 ? `\n…and ${products.length - 60} more.` : '';
  await sendMessage(chatId, `*Catalog (${products.length} items)*\n${lines.join('\n')}${more}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  // Verify the request actually came from Telegram.
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (secret && req.headers['x-telegram-bot-api-secret-token'] !== secret) {
    res.status(401).send('Unauthorized');
    return;
  }

  const update = req.body;
  const message = update && (update.message || update.channel_post);
  if (!message) {
    res.status(200).json({ ok: true }); // nothing to do, but ack so Telegram stops retrying
    return;
  }

  const chatId = message.chat.id;
  const fromId = message.from ? message.from.id : (message.sender_chat ? message.sender_chat.id : null);
  const text = (message.text || message.caption || '').trim();

  if (!text.startsWith('/')) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!isAuthorized(fromId)) {
    await sendMessage(chatId, '🚫 You are not authorized to manage the RC Forge catalog.');
    res.status(200).json({ ok: true });
    return;
  }

  const photo = message.photo && message.photo.length ? message.photo[message.photo.length - 1] : null;
  const lines = text.split('\n');
  const firstLine = lines[0].trim();
  const [command, ...rest] = firstLine.split(/\s+/);
  const cmd = command.toLowerCase();

  try {
    if (cmd === '/add') {
      await handleAdd(chatId, lines.slice(1).join('\n'), photo);
    } else if (cmd === '/edit') {
      const sku = (rest[0] || '').toUpperCase();
      if (!sku) throw new Error('Usage: /edit SKU-1 (then field: value lines)');
      await handleEdit(chatId, sku, lines.slice(1).join('\n'), photo);
    } else if (cmd === '/delete' || cmd === '/remove') {
      const sku = (rest[0] || '').toUpperCase();
      if (!sku) throw new Error('Usage: /delete SKU-1');
      await handleDelete(chatId, sku);
    } else if (cmd === '/list') {
      await handleList(chatId);
    } else if (cmd === '/help' || cmd === '/start') {
      await sendMessage(chatId, HELP_TEXT);
    } else {
      await sendMessage(chatId, `Unknown command "${cmd}". Send /help to see available commands.`);
    }
  } catch (err) {
    console.error('Catalog bot error:', err);
    await sendMessage(chatId, `❌ ${err.message || 'Something went wrong.'}`);
  }

  res.status(200).json({ ok: true });
}
