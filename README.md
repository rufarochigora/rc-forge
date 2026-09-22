# RC Forge upgrade: sidebar navigation + Power & Infrastructure

Copy the contents of this folder over your project root ("RC Forge/"), keeping the paths.
No new npm packages, no changes to package.json / package-lock.json.

Modified existing files: src/main.jsx, src/App.jsx, src/SharedFooter.jsx,
src/styles/mobile-responsive.css, public/sitemap.xml  (see modified-files.patch)
Everything else is new.

Edit points
- Sidebar entries:            src/config/navigation.js
- Power categories + tubing page content: src/data/powerInfrastructure.js
- WhatsApp number for quotes: src/config/contact.js

Routes added: /solar-elecrical-tubing, /solar-electrical-tubing (redirect),
/power-infrastructure, /power-infrastructure/:slug, and a not-found page for unknown URLs.
Existing routes (/, /track, /app, /privacy, /terms) are untouched.

Then: npm install && npm run build
