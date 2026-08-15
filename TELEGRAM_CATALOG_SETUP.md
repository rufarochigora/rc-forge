# RC Forge — Telegram Catalog Bot Setup

This adds a Telegram → GitHub → Vercel product catalog pipeline with **no
Firebase and no database**. GitHub's `public/data/products.json` is the
single source of truth; Telegram is just the admin interface.

```
Telegram channel/DM  →  Telegram Bot API  →  /api/telegram-webhook (Vercel)
                                                    │
                                                    ▼
                                    GitHub Contents API (commits)
                                    public/data/products.json
                                    public/assets/products/<SKU>.jpg
                                                    │
                                                    ▼
                                    Vercel auto-redeploys on push
                                    Frontend fetches /data/products.json
```

## 1. Create the Telegram bot

1. Message **@BotFather** on Telegram → `/newbot` → follow the prompts.
2. Save the **bot token** it gives you.
3. Find your own numeric Telegram user ID by messaging **@userinfobot** (or
   any similar bot). Anyone who should be allowed to manage the catalog
   needs their numeric ID added to `TELEGRAM_ALLOWED_USER_IDS`.
4. If you want to manage the catalog from a **private channel** instead of
   DMs: create the channel, add the bot as an admin, and post commands
   there. The webhook code already handles `channel_post` updates.

## 2. Create a GitHub token

1. GitHub → Settings → Developer settings → **Fine-grained personal access
   tokens** → Generate new token.
2. Scope it to just the `RC-Forge` repository.
3. Permissions → **Contents: Read and write**.
4. Copy the token — you won't see it again.

## 3. Set Vercel environment variables

In the Vercel project (Settings → Environment Variables), add:

| Variable | Example | Notes |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | `123456:AA...` | from BotFather |
| `TELEGRAM_WEBHOOK_SECRET` | any random 32+ char string | you invent this |
| `TELEGRAM_ALLOWED_USER_IDS` | `111111111,222222222` | comma-separated Telegram numeric user IDs |
| `GITHUB_TOKEN` | `github_pat_...` | from step 2 |
| `GITHUB_OWNER` | `rufarochigora` | repo owner |
| `GITHUB_REPO` | `rc-forge` | repo name |
| `GITHUB_BRANCH` | `main` | branch Vercel deploys from |
| `PRODUCTS_JSON_PATH` | `public/data/products.json` | leave as default unless you move the file |

Redeploy after saving so the functions pick up the new env vars.

## 4. Register the webhook with Telegram

Run this once (replace the placeholders):

```bash
curl -X POST "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://<your-vercel-domain>/api/telegram-webhook",
    "secret_token": "<TELEGRAM_WEBHOOK_SECRET>"
  }'
```

Telegram will now POST every message to your webhook, and will only be
trusted if it echoes the same `secret_token` (the webhook checks the
`X-Telegram-Bot-Api-Secret-Token` header — this is what keeps random
internet requests from being able to spoof product updates without ever
needing to expose your bot token or GitHub token to a browser).

Verify it's set:

```bash
curl "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getWebhookInfo"
```

## 5. Confirm Vercel auto-deploys on push

This system relies on the **existing** Vercel ↔ GitHub Git integration
(Vercel Project → Settings → Git) to auto-build and deploy whenever the bot
commits to the branch in `GITHUB_BRANCH`. If the project isn't already
linked to the GitHub repo that way, link it — otherwise catalog commits
will land in GitHub but never reach the live site.

## Using the bot

Message the bot (or post in the connected channel):

```
/add
Name: ESP32 DevKit V1
SKU: ESP32-001
Price: 8
Currency: USD
Stock: 15
Category: Microcontrollers
Description: ESP32 development board with Wi-Fi and Bluetooth
```

Attach a photo to the same message (as the caption) to set the product
image in one step. `SKU`, `Currency`, and `Stock` are optional — SKU is
auto-generated from the name if omitted, Currency defaults to `USD`, Stock
defaults to `0`.

Edit fields:
```
/edit ESP32-001
Price: 9
Stock: 20
```
(attach a new photo as the caption to replace just the image)

Remove a product:
```
/delete ESP32-001
```

List the catalog:
```
/list
```

Full command reference:
```
/help
```

Every successful action gets a confirmation reply in Telegram and a Git
commit you can see in the repo's history (each commit message says what
changed and that it came via Telegram).

## What changed in the codebase

- **`public/data/products.json`** — the live catalog (seeded from the 363
  components that used to be hardcoded in `src/App.jsx`). This file is what
  the bot commits to and what the site reads.
- **`src/App.jsx`** — the hardcoded `componentsData` array is gone. Products
  now load at runtime via `fetch('/data/products.json')`, with loading and
  error states, a category filter, and stock/out-of-stock badges. Search
  now also matches SKU.
- **`api/telegram-webhook.js`** — the webhook endpoint (`/api/telegram-webhook`).
- **`api/_lib/github.js`** — GitHub Contents API client (read/write JSON +
  images, with retry-on-conflict).
- **`api/_lib/telegram.js`** — Telegram Bot API client (send replies,
  download photos). The bot token is only ever used here, server-side.
- **`api/_lib/parseProduct.js`** — parses `Field: value` message bodies into
  validated product objects and SKU auto-generation.

No secrets are ever sent to the browser: the frontend only ever calls
`fetch('/data/products.json')`, a public static file with no
authentication baked into it.

## Notes / limitations

- Stock is tracked per-SKU as a plain integer. Legacy (pre-migration)
  catalog items have `stock: null`, meaning "not actively tracked" — they
  render as always available, matching their old behavior. Anything added
  or edited via Telegram gets real stock tracking and an
  in-stock/low-stock/out-of-stock badge.
- Deleting a product removes its catalog entry but does not delete its
  image file from the repo (harmless orphan — feel free to clean up
  `public/assets/products/` occasionally).
- If two edits land at almost the same instant, the GitHub write retries
  once automatically on a conflicting commit (409), which covers normal
  single-admin-at-a-time usage comfortably.
