// src/components/power/Glyph.jsx
//
// Small technical line drawings (48px grid) used on the category and solution
// cards. Referenced by key from data/powerInfrastructure.js.

import React from 'react';

const DRAWINGS = {
  // conduit elbow with a coupling band
  conduit: (
    <>
      <path d="M6 14h18a10 10 0 0 1 10 10v18" />
      <path d="M6 24h18v18" />
      <path d="M6 14v10M24 42h10" />
      <path d="M14 11v16M18 11v16" />
    </>
  ),
  // PV panel with a sun
  solar: (
    <>
      <circle cx="12" cy="11" r="3.6" />
      <path d="M12 3.5v2M4.5 11h2M6.7 5.7l1.4 1.4M17.3 5.7l-1.4 1.4" />
      <path d="M9 42 15 22h27l-6 20z" />
      <path d="M12 32h28M23 22l-4 20M33 22l-4 20" />
    </>
  ),
  panel: (
    <>
      <path d="M8 40 14 12h28l-6 28z" />
      <path d="M11 26h29M23 12l-4 28M33 12l-4 28" />
    </>
  ),
  // corrugated flexible tubing
  flex: (
    <>
      <path d="M4 18q5-8 10 0t10 0 10 0 10 0" />
      <path d="M4 30q5-8 10 0t10 0 10 0 10 0" />
      <path d="M4 18v12M44 18v12" />
    </>
  ),
  // thick-walled ribbed tube
  heavy: (
    <>
      <rect x="5" y="13" width="38" height="22" rx="2" />
      <rect x="9" y="17" width="30" height="14" rx="1" />
      <path d="M16 13v22M24 13v22M32 13v22" />
    </>
  ),
  // cable tray with cables
  tray: (
    <>
      <path d="M6 18v20h36V18" />
      <circle cx="15" cy="31" r="5" />
      <circle cx="25" cy="31" r="5" />
      <circle cx="35" cy="31" r="5" />
      <circle cx="20" cy="22" r="4" />
      <circle cx="30" cy="22" r="4" />
    </>
  ),
  // coupling with flanges
  fitting: (
    <>
      <rect x="4" y="17" width="12" height="14" />
      <rect x="16" y="12" width="6" height="24" />
      <rect x="22" y="17" width="22" height="14" />
      <path d="M26 17v14M34 17v14" />
    </>
  ),
  // cable reel
  cable: (
    <>
      <circle cx="21" cy="24" r="15" />
      <circle cx="21" cy="24" r="6" />
      <path d="M21 9c0 0 8 2 8 10M36 24h9" />
    </>
  ),
  battery: (
    <>
      <rect x="5" y="14" width="34" height="20" rx="2.5" />
      <path d="M39 20h4v8h-4" />
      <path d="M24 18l-6 7h7l-5 7" />
    </>
  ),
  // controller board with a monitoring trace
  bms: (
    <>
      <rect x="6" y="11" width="36" height="26" rx="3" />
      <path d="M11 25h7l3-8 5 14 3-6h9" />
    </>
  ),
  // distribution board
  equipment: (
    <>
      <rect x="9" y="6" width="30" height="36" rx="2" />
      <rect x="14" y="12" width="6" height="9" />
      <rect x="21" y="12" width="6" height="9" />
      <rect x="28" y="12" width="6" height="9" />
      <rect x="14" y="27" width="20" height="9" />
    </>
  ),
};

export default function Glyph({ name, size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {DRAWINGS[name] || DRAWINGS.conduit}
    </svg>
  );
}
