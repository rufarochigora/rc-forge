// api/_lib/github.js
// Minimal GitHub Contents API client used to keep data/products.json (and
// product images) inside the repo as the source of truth. Uses plain fetch
// so it works in Vercel's Node serverless runtime with no extra deps.

const GITHUB_API = 'https://api.github.com';

export function getConfig() {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const token = process.env.GITHUB_TOKEN;
  if (!owner || !repo || !token) {
    throw new Error('Missing GITHUB_OWNER / GITHUB_REPO / GITHUB_TOKEN env vars');
  }
  return { owner, repo, branch, token };
}

export function authHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'rc-forge-catalog-bot',
  };
}

/**
 * Fetch a file's content + sha from the repo. Returns null if it does not exist.
 */
export async function getFile(path) {
  const { owner, repo, branch, token } = getConfig();
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path).replace(/%2F/g, '/')}?ref=${branch}`;
  const res = await fetch(url, { headers: authHeaders(token) });
  if (res.status === 404) return null;
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub getFile failed (${res.status}): ${text}`);
  }
  const data = await res.json();
  const content = Buffer.from(data.content, data.encoding || 'base64').toString('utf8');
  return { content, sha: data.sha };
}

/**
 * Create or update a file in the repo. `contentStr` may be a utf8 string
 * (JSON) or a Buffer (binary, e.g. an image).
 */
export async function putFile(path, contentBufferOrString, message, sha) {
  const { owner, repo, branch, token } = getConfig();
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path).replace(/%2F/g, '/')}`;
  const contentBase64 = Buffer.isBuffer(contentBufferOrString)
    ? contentBufferOrString.toString('base64')
    : Buffer.from(contentBufferOrString, 'utf8').toString('base64');

  const body = {
    message,
    content: contentBase64,
    branch,
  };
  if (sha) body.sha = sha;

  const res = await fetch(url, {
    method: 'PUT',
    headers: { ...authHeaders(token), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    const err = new Error(`GitHub putFile failed (${res.status}): ${text}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

/**
 * Read products.json, apply `mutator(products) -> products`, and commit it
 * back. Retries once on a 409 (sha conflict from a concurrent write).
 */
export async function updateProductsJson(mutator, commitMessage) {
  const path = process.env.PRODUCTS_JSON_PATH || 'public/data/products.json';

  for (let attempt = 0; attempt < 2; attempt++) {
    const file = await getFile(path);
    const products = file ? JSON.parse(file.content) : [];
    const updated = await mutator(products);
    try {
      await putFile(path, JSON.stringify(updated, null, 2) + '\n', commitMessage, file ? file.sha : undefined);
      return updated;
    } catch (err) {
      if (err.status === 409 && attempt === 0) continue; // stale sha, retry
      throw err;
    }
  }
  throw new Error('Failed to update products.json after retry (conflict)');
}

/**
 * Upload a binary image file (Buffer) to the repo under public/assets/products/.
 * Returns the raw.githubusercontent.com URL so it's available immediately,
 * without waiting for the next Vercel build.
 */
export async function uploadProductImage(sku, ext, buffer) {
  const { owner, repo, branch } = getConfig();
  const path = `public/assets/products/${sku}.${ext}`;
  const existing = await getFile(path);
  await putFile(path, buffer, `catalog: update image for ${sku}`, existing ? existing.sha : undefined);
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
}

