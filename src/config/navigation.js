// src/config/navigation.js
//
// The whole sidebar is described here. To add a top-level link, a group, or a
// child under an existing group, edit this file: no component changes needed.
//
// Shapes:
//   section: { id, title?, items: [item | group] }
//   item:    { id, label, href, icon?, badge?, status?, neverActive? }
//   group:   { id, label, icon, accent?, badge?, openOnPaths?, matchPrefixes?, children: [item] }
//
// `icon` is a key into NAV_ICONS (components/nav/navIcons.jsx).
// `status: 'soon'` renders a small "Soon" chip next to the label.
// `neverActive` is for shortcut links (hash/category links) that should not
// look "current".

import {
  POWER_CATEGORIES,
  POWER_HUB_PATH,
  TUBING_PATH,
  getPowerCategoryHref,
} from '../data/powerInfrastructure';

// The shop filters by exact category name (see App.jsx). These names must
// match `category` values in public/data/products.json; if one ever stops
// matching, the shop falls back to "All" rather than showing an empty page.
const shopCategory = (category) => `/?category=${encodeURIComponent(category)}`;

const roboticsChildren = [
  { id: 'r-mcu', label: 'Microcontrollers & Boards', href: shopCategory('Micro-controllers & Boards'), neverActive: true },
  { id: 'r-wireless', label: 'Wireless & Communication', href: shopCategory('Wireless & Communication'), neverActive: true },
  { id: 'r-sensors', label: 'Sensors', href: shopCategory('Sensors & Input Devices'), neverActive: true },
  { id: 'r-actuators', label: 'Actuators', href: shopCategory('Actuators & Output Devices'), neverActive: true },
  // Every other existing category lives in the shop's own category bar.
  { id: 'r-all', label: 'All categories', href: '/#rc-search', neverActive: true },
];

const powerChildren = POWER_CATEGORIES.map((category) => ({
  id: `p-${category.slug}`,
  label: category.label,
  href: getPowerCategoryHref(category),
  status: category.status === 'soon' ? 'soon' : undefined,
}));

export const NAVIGATION = [
  {
    id: 'main',
    items: [{ id: 'home', label: 'Home', href: '/', icon: 'home', end: true }],
  },
  {
    id: 'catalogue',
    title: 'Catalogue',
    items: [
      {
        id: 'robotics',
        label: 'Robotics & Electronics',
        icon: 'chip',
        openOnPaths: ['/'],
        children: roboticsChildren,
      },
      {
        id: 'power',
        label: 'Power & Infrastructure',
        icon: 'bolt',
        accent: 'amber',
        badge: 'New',
        // Keep the group open/highlighted anywhere inside the section,
        // including the legacy tubing URL.
        matchPrefixes: [POWER_HUB_PATH, TUBING_PATH],
        children: powerChildren,
      },
    ],
  },
  {
    id: 'orders',
    title: 'Orders and app',
    items: [
      { id: 'track', label: 'Track Order', href: '/track', icon: 'package' },
      { id: 'app', label: 'RC Forge App', href: '/app', icon: 'phone' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    items: [
      { id: 'svc-tubing', label: 'Solar & Electrical Tubing Services', href: TUBING_PATH, icon: 'conduit' },
    ],
  },
];
