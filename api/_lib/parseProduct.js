// api/_lib/parseProduct.js
// Turns a Telegram message body like:
//
//   /add
//   Name: ESP32 DevKit V1
//   SKU: ESP32-001
//   Price: 8
//   Currency: USD
//   Stock: 15
//   Category: Microcontrollers
//   Description: ESP32 development board with Wi-Fi and Bluetooth
//
// into { name, sku, price, currency, stock, category, description }.

const FIELD_ALIASES = {
  name: 'name',
  product: 'name',
  sku: 'sku',
  id: 'sku',
  price: 'price',
  cost: 'price',
  currency: 'currency',
  stock: 'stock',
  qty: 'stock',
  quantity: 'stock',
  category: 'category',
  cat: 'category',
  description: 'description',
  desc: 'description',
  details: 'description',
};

/**
 * Parse "Field: value" lines (one per line) into a plain object.
 * The first line (the command itself, e.g. "/add" or "/edit SKU-1") is
 * expected to have already been stripped by the caller.
 */
export function parseFields(body) {
  const out = {};
  const lines = body.split('\n');
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const rawKey = line.slice(0, colonIndex).trim().toLowerCase();
    const value = line.slice(colonIndex + 1).trim();
    const key = FIELD_ALIASES[rawKey];
    if (!key || value === '') continue;
    out[key] = value;
  }
  return out;
}

export function slugify(name) {
  return name
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 32);
}

export function generateSku(name, existingSkus) {
  const base = slugify(name) || 'ITEM';
  let sku = base;
  let n = 1;
  while (existingSkus.has(sku)) {
    n += 1;
    sku = `${base}-${n}`;
  }
  return sku;
}

/**
 * Validate + normalize a parsed field set for a NEW product.
 * Throws a descriptive Error the caller can relay back to Telegram.
 */
export function buildNewProduct(fields, existingSkus) {
  if (!fields.name) {
    throw new Error('Missing required field: Name');
  }
  if (fields.price === undefined) {
    throw new Error('Missing required field: Price');
  }
  const price = Number(fields.price);
  if (Number.isNaN(price) || price < 0) {
    throw new Error(`Invalid Price: "${fields.price}"`);
  }

  let sku = fields.sku ? fields.sku.toUpperCase().replace(/\s+/g, '-') : null;
  if (sku && existingSkus.has(sku)) {
    throw new Error(`SKU "${sku}" already exists. Use /edit ${sku} to update it, or choose a different SKU.`);
  }
  if (!sku) {
    sku = generateSku(fields.name, existingSkus);
  }

  let stock = null;
  if (fields.stock !== undefined) {
    stock = parseInt(fields.stock, 10);
    if (Number.isNaN(stock) || stock < 0) {
      throw new Error(`Invalid Stock: "${fields.stock}"`);
    }
  } else {
    stock = 0;
  }

  return {
    id: sku,
    sku,
    name: fields.name,
    price,
    currency: (fields.currency || 'USD').toUpperCase(),
    stock,
    category: fields.category || 'Uncategorized',
    description: fields.description || '',
    image: '',
    available: stock > 0,
  };
}

/**
 * Apply parsed field updates onto an existing product (for /edit). Only
 * fields present in `fields` are changed.
 */
export function applyEdits(product, fields) {
  const updated = { ...product };
  if (fields.name) updated.name = fields.name;
  if (fields.price !== undefined) {
    const price = Number(fields.price);
    if (Number.isNaN(price) || price < 0) throw new Error(`Invalid Price: "${fields.price}"`);
    updated.price = price;
  }
  if (fields.currency) updated.currency = fields.currency.toUpperCase();
  if (fields.stock !== undefined) {
    const stock = parseInt(fields.stock, 10);
    if (Number.isNaN(stock) || stock < 0) throw new Error(`Invalid Stock: "${fields.stock}"`);
    updated.stock = stock;
  }
  if (fields.category) updated.category = fields.category;
  if (fields.description) updated.description = fields.description;
  if (typeof updated.stock === 'number') {
    updated.available = updated.stock > 0;
  }
  return updated;
}

