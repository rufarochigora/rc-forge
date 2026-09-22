// src/components/nav/navIcons.jsx
//
// Line icons for the sidebar, drawn to match components/icons.jsx (24px grid,
// currentColor stroke). Config refers to them by key through navIconMap.js.

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
  'aria-hidden': true,
  focusable: 'false',
};

export function ChipIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.6" />
      <rect x="9.6" y="9.6" width="4.8" height="4.8" rx="0.6" />
      <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" />
    </svg>
  );
}

export function BoltIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3 5 13.5h6L10 21l8-10.5h-6z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M11 18.5h2" />
    </svg>
  );
}

export function ConduitIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9.5h9.5a3.5 3.5 0 0 1 3.5 3.5v8" />
      <path d="M3 14.5h6.5A1.5 1.5 0 0 1 11 16v5" />
      <path d="M3 9.5v5M17.5 21H9.5" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CollapseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m11 6-6 6 6 6M19 6l-6 6 6 6" />
    </svg>
  );
}

export function ExpandIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m13 6 6 6-6 6M5 6l6 6-6 6" />
    </svg>
  );
}
