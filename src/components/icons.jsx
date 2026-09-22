// src/components/icons.jsx
//
// Small, dependency-free line icons (24x24, stroke=currentColor) used in
// place of emoji across the mobile chrome, per the "professional app, not
// emoji-decorated" requirement. Kept as plain inline SVG rather than an
// icon-font/library dependency to avoid adding weight for a handful of
// glyphs.

import React from 'react';

const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function HomeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H9.5v-6h5v6H17.5a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function GridIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20 15.3 15.3" />
    </svg>
  );
}

export function PackageIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5Z" />
      <path d="M3.7 7.7 12 12l8.3-4.3" />
      <path d="M12 12v9" />
    </svg>
  );
}

export function CartIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17.5" cy="20" r="1.4" />
      <path d="M2.5 3h2.2l2.1 11.4a1.8 1.8 0 0 0 1.8 1.5h8.6a1.8 1.8 0 0 0 1.77-1.47L21 7.5H6" />
    </svg>
  );
}

export function AlertIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 21.5 20h-19Z" />
      <path d="M12 9.5v4.5" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SearchOffIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20 15.3 15.3" />
      <path d="M8 8l5 5" />
      <path d="M13 8l-5 5" />
    </svg>
  );
}

export function BoxIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="7" width="16" height="13" rx="1.2" />
      <path d="M4 7 8 3.5h8L20 7" />
      <path d="M9 11.5h6" />
    </svg>
  );
}
