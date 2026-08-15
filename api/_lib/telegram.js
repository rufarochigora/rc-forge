// api/_lib/telegram.js
// Thin wrapper around the Telegram Bot API. The bot token never reaches the
// browser -- it's only used here, server-side, inside serverless functions.

export function apiBase() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) throw new Error('Missing TELEGRAM_BOT_TOKEN env var');
  return `https://api.telegram.org/bot${token}`;
}

export async function sendMessage(chatId, text, options = {}) {
  const res = await fetch(`${apiBase()}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
      ...options,
    }),
  });
  // Never throw on a failed reply -- we don't want a Telegram hiccup to
  // surface as a 500 back to Telegram (which would trigger pointless retries).
  if (!res.ok) {
    console.error('Telegram sendMessage failed:', await res.text());
  }
  return res;
}

/**
 * Resolve a Telegram file_id to actual bytes + a guessed extension.
 */
export async function downloadFile(fileId) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const infoRes = await fetch(`${apiBase()}/getFile?file_id=${encodeURIComponent(fileId)}`);
  const info = await infoRes.json();
  if (!info.ok) throw new Error('Telegram getFile failed: ' + JSON.stringify(info));
  const filePath = info.result.file_path; // e.g. photos/file_1.jpg
  const ext = (filePath.split('.').pop() || 'jpg').toLowerCase();
  const fileRes = await fetch(`https://api.telegram.org/file/bot${token}/${filePath}`);
  if (!fileRes.ok) throw new Error('Telegram file download failed');
  const arrayBuffer = await fileRes.arrayBuffer();
  return { buffer: Buffer.from(arrayBuffer), ext };
}

