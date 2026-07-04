# RC Forge

**RC Forge** is a student-operated electronics platform serving university campuses across Zimbabwe — sourcing components locally and internationally, and shipping to students who need them for coursework, projects, and hobby electronics.

Live at: **[rcforge.vercel.app](https://rcforge.vercel.app)**

Beyond the component storefront, RC Forge also takes on custom **web development work for companies** — this repository, and the broader RC Forge project ecosystem, doubles as a demonstration of that capability.

---

## What This Platform Does

- **Component catalog** — 351+ electronic components (microcontrollers, sensors, wireless/communication modules, drone parts, and more) browsable by category with a fast, hardcoded-at-build-time product list and instant search/filtering.
- **Order flow** — customers build a cart and submit an order directly from the site; every order gets a unique **Order ID** used for all further communication and tracking.
- **WhatsApp-based fulfilment** — orders route to one of several partner contacts (SPARK SYSTEMS, ELECTRIFAI, RC Forge, OM) on a rotating basis depending on order type, and are confirmed by a real team member over WhatsApp — nothing is auto-confirmed or paid for on the site itself.
- **Live order tracking** — a dedicated `/track` page looks up an Order ID against the backend and shows real-time fulfilment status.
- **Campus delivery** — direct delivery at the University of Zimbabwe (Harare) and Midlands State University (Zvishavane), with WhatsApp-coordinated collection for other locations, within a 14-day fulfilment window.
- **Legal pages** — dedicated Privacy Policy and Terms of Service pages, including clearly stated pricing, payment, delivery, and refund/exchange terms.

## Tech Stack

- **Frontend:** React + Vite (single-page app, 4 client-side routes)
- **Backend:** Google Apps Script — three functions (`onEdit`, `doPost`, `doGet`) deployed as a Google Web App
- **Database:** Google Sheets, used as the order ledger and source of truth for status tracking
- **Fulfilment:** WhatsApp, for order confirmation and customer communication
- **Hosting:** Vercel

This is intentionally a lightweight, low-infrastructure stack — no traditional database or hosted backend server, since Google Sheets + Apps Script comfortably handles the platform's current order volume while keeping operating cost at zero.

## How an Order Flows

1. Customer browses the catalog, adds items to cart, and submits an order with contact details.
2. The frontend calls the Apps Script Web App (`doPost`), which appends a row per component to the order sheet and returns a generated Order ID.
3. The order is routed to the next contact in the relevant rotation (component orders vs. gadget orders use separate rotations) for WhatsApp follow-up.
4. As the order moves through fulfilment stages, team members update status columns directly in the Google Sheet.
5. An `onEdit` trigger watches those status columns — once every stage for every component in an order is marked "Complete," it automatically timestamps the order and emails a full order and profit summary to the admin team.
6. Customers can check status anytime at `/track` using their Order ID, which calls `doGet` to read back (customer-safe) status information — internal figures like buying price and profit are never exposed to this endpoint.

## Other RC Forge Projects

RC Forge's software work extends beyond this storefront. Notably:

- **[SynapseSeed](https://synapseseed.vercel.app)** — an AI-powered Seed Production Intelligence Platform built for hybrid seed production companies (e.g. Seed Co International), covering field monitoring, pollination synchronization intelligence, automated seed quality inspection, and storage viability prediction.

---

## Local Development

```bash
npm install
npm run dev
```

This template uses [Vite](https://vitejs.dev) with the official React plugin ([@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)) for Fast Refresh during development.

## Contact

**rcforge.contact@gmail.com** · +263 780 114 134

---

**RC Forge** — sourcing electronics, building software, serving Zimbabwean students and companies.