# RC Forge — Android App Setup (Phase 1)

This covers running and building the native Android app. It sits alongside
the existing website — nothing here changes `rc-forge.vercel.app`.

## What's already done

- Capacitor installed and configured (`capacitor.config.ts`), app ID
  `com.rcforge.app`, app name "RC Forge"
- `android/` platform project generated (`npx cap add android`)
- Real launcher icons + splash screens generated from your existing shield
  logo across every Android density bucket (`mipmap-ldpi` through
  `mipmap-xxxhdpi`, portrait/landscape, light/dark) — no placeholder
  Capacitor branding anywhere
- Bottom navigation, offline handling, loading/error/empty states, and the
  design-token system are wired into the shared React app, so both the
  website and the Android app render from the same codebase

## Prerequisites

1. **Android Studio** (includes the Android SDK) — https://developer.android.com/studio
2. **JDK 17** (Android Studio bundles one; if you use a system one, make
   sure it's 17)
3. Node.js (already set up, since you're running the website build)

## Running it

From the `RC Forge` project folder:

```bash
npm install
npm run android
```

This runs `vite build` → `cap sync android` → opens the project in Android
Studio. From there, press the green **Run** button with an emulator or a
USB-connected device selected — the app installs and launches, using the
same `dist/` build the website itself is built from.

If you'd rather do the steps by hand:

```bash
npm run build          # builds the web app into dist/
npx cap sync android   # copies dist/ into the Android project, updates native config
npx cap open android   # opens Android Studio
```

## Where the catalog data comes from on-device

The Android app talks to the exact same `/data/products.json` your website
reads — the app is configured to load your live Vercel deployment's static
assets over HTTPS, so the same Telegram → GitHub → catalog pipeline updates
both surfaces automatically. Nothing about the catalog is duplicated or
bundled separately into the app.

## If you ever change the logo

The launcher icons and splash screens were generated from
`resources/icon-only.png`, `resources/icon-foreground.png`,
`resources/icon-background.png`, and `resources/splash.png`. If the RC
Forge logo changes, regenerate everything with:

```bash
npx capacitor-assets generate --android
```

## What's NOT done yet (later phases)

- **Release signing** — right now the app builds in debug mode, which is
  fine for testing on your own device or an emulator, but a signed release
  build (with a real keystore) is needed before this can go to the Play
  Store. That's a Phase 4 item — happy to walk through it whenever you're
  ready to publish.
- **Multi-screen routing** (dedicated Home / Catalog / Product Detail /
  Cart screens via react-router) — the bottom nav currently jumps between
  sections of the existing single-page layout, which is stable and safe,
  but a true routed structure is Phase 2.
- **Search suggestions, recent searches, animations, accessibility pass** —
  Phase 2–4 per the original roadmap.

## Note on new dev dependencies

`@capacitor/assets` (used only to generate icons/splash, not shipped in
the app) pulled in some flagged transitive dependencies during
`npm install` — worth a look with `npm audit` at some point, but since it's
dev-only tooling it doesn't affect what ships to users' phones.
