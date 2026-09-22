// src/data/powerInfrastructure.js
//
// Single source of truth for the Power & Infrastructure section: the category
// list (used by the sidebar, the hub page and the placeholder category pages)
// and the content of the Solar & Electrical Tubing page.
//
// Adding a category later is a data change, not a code change:
//   1. add an entry to POWER_CATEGORIES,
//   2. (when the real page exists) set `href` to its route and `status` to 'open'.
// The sidebar, hub page and /power-infrastructure/:slug route pick it up.
//
// Everything below is placeholder copy describing what each range is for. There
// are deliberately no prices, sizes, ratings or stock figures: those arrive when
// real inventory is connected (see `SolutionCard`, which already accepts
// `image`, `price` and `specs`).

/** Where the live tubing page lives today. Must keep working. */
export const TUBING_PATH = '/solar-elecrical-tubing';

/** Future canonical location (redirects to TUBING_PATH until a migration is safe). */
export const TUBING_FUTURE_PATH = '/power-infrastructure/conduit-and-tubing';

export const POWER_HUB_PATH = '/power-infrastructure';

/**
 * status:
 *   'open' – the page exists and takes enquiries
 *   'soon' – planned; the URL shows a "being prepared" page with a contact route
 */
export const POWER_CATEGORIES = [
  {
    slug: 'conduit-and-tubing',
    label: 'Solar & Electrical Tubing',
    summary: 'Conduit, cable-protection tubing and installation accessories for electrical and solar work.',
    status: 'open',
    href: TUBING_PATH,
    glyph: 'conduit',
  },
  {
    slug: 'solar-panels',
    label: 'Solar Panels',
    summary: 'Photovoltaic panels for homes, businesses and off-grid sites.',
    status: 'soon',
    glyph: 'panel',
  },
  {
    slug: 'heavy-duty-cables',
    label: 'Heavy-Duty Cables',
    summary: 'Power and solar cabling for long runs, high currents and outdoor routes.',
    status: 'soon',
    glyph: 'cable',
  },
  {
    slug: 'batteries',
    label: 'Batteries',
    summary: 'Storage batteries for solar systems, backup power and industrial use.',
    status: 'soon',
    glyph: 'battery',
  },
  {
    slug: 'battery-management',
    label: 'Battery Management',
    summary: 'Charge controllers and battery-management hardware that protect and monitor storage.',
    status: 'soon',
    glyph: 'bms',
  },
  {
    slug: 'power-equipment',
    label: 'Power Equipment',
    summary: 'Distribution boards, protection gear and other power-side equipment.',
    status: 'soon',
    glyph: 'equipment',
  },
];

export function getPowerCategoryHref(category) {
  return category.href || `${POWER_HUB_PATH}/${category.slug}`;
}

// ── Solar & Electrical Tubing page ───────────────────────────────────────

export const TUBING_SOLUTIONS = [
  {
    id: 'electrical-conduit',
    title: 'Electrical conduit',
    description: 'Rigid and flexible conduit for concealed and surface wiring in homes, offices and workshops.',
    glyph: 'conduit',
    tags: ['Residential', 'Commercial'],
  },
  {
    id: 'solar-cable-protection',
    title: 'Solar cable protection',
    description: 'Tubing that shields PV cabling from sun, weather and mechanical damage between panels, combiners and inverters.',
    glyph: 'solar',
    tags: ['Solar', 'Outdoor'],
  },
  {
    id: 'flexible-tubing',
    title: 'Flexible tubing',
    description: 'Bendable tubing for tight corners, machine connections and short runs where rigid conduit will not fit.',
    glyph: 'flex',
    tags: ['Industrial', 'Control panels'],
  },
  {
    id: 'heavy-duty-tubing',
    title: 'Heavy-duty electrical tubing',
    description: 'Thick-walled tubing for buried, exposed and industrial runs that need extra crush and impact resistance.',
    glyph: 'heavy',
    tags: ['Industrial', 'Underground'],
  },
  {
    id: 'cable-management',
    title: 'Cable management',
    description: 'Trunking, clips, ties and supports that keep cable runs tidy, secured and easy to trace.',
    glyph: 'tray',
    tags: ['Commercial', 'Control panels'],
  },
  {
    id: 'installation-accessories',
    title: 'Installation accessories',
    description: 'Couplings, bends, junction boxes, saddles and glands to complete a conduit run.',
    glyph: 'fitting',
    tags: ['All installations'],
  },
];

export const TUBING_APPLICATIONS = [
  { id: 'solar', title: 'Solar installations', detail: 'Roof and ground-mounted PV cable runs' },
  { id: 'residential', title: 'Residential electrical installations', detail: 'Concealed and surface wiring in homes' },
  { id: 'commercial', title: 'Commercial installations', detail: 'Offices, shops and institutions' },
  { id: 'industrial', title: 'Industrial installations', detail: 'Workshops, plants and machinery feeds' },
  { id: 'control-panels', title: 'Control panels', detail: 'Tidy routing into and out of enclosures' },
  { id: 'outdoor', title: 'Outdoor cable protection', detail: 'Sun, rain and mechanical exposure' },
  { id: 'renewables', title: 'Renewable-energy projects', detail: 'Solar, storage and hybrid systems' },
  { id: 'infrastructure', title: 'Power infrastructure', detail: 'Distribution and site-wide cable networks' },
];

/**
 * Future technical services. `status` is 'planned' for all of them: none can be
 * booked yet. When a service goes live, change its status and (later) attach a
 * booking route; the roadmap component already renders any status label.
 */
export const TUBING_SERVICES = [
  { id: 'tubing-installation', title: 'Tubing installation', description: 'Fitting conduit and tubing on new and existing installations.', status: 'planned' },
  { id: 'solar-cable-routing', title: 'Solar cable routing', description: 'Planning and protecting cable paths from the array to the inverter.', status: 'planned' },
  { id: 'cable-protection', title: 'Electrical cable protection', description: 'Sleeving and guarding exposed or vulnerable cable runs.', status: 'planned' },
  { id: 'solar-wiring-support', title: 'Solar system wiring support', description: 'Help with wiring layouts and cable management for solar systems.', status: 'planned' },
  { id: 'infrastructure-assessment', title: 'Electrical infrastructure assessment', description: 'Reviewing existing cable routes, containment and protection.', status: 'planned' },
  { id: 'installation-planning', title: 'Installation planning', description: 'Working out routes, materials and quantities before work starts.', status: 'planned' },
  { id: 'technical-consultation', title: 'Technical consultation', description: 'Talking through your project with someone who knows the products.', status: 'planned' },
];

export const TUBING_META = {
  title: 'Solar & Electrical Tubing | RC Forge Zimbabwe',
  description:
    'Explore RC Forge solar and electrical tubing solutions for cable protection, electrical installations, solar systems and power infrastructure projects in Zimbabwe.',
};
