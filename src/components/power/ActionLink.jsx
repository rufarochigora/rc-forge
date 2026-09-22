// src/components/power/ActionLink.jsx
//
// One component for every call-to-action on the Power & Infrastructure pages:
// an in-app route (`to`), or an external link such as WhatsApp (`href`).

import React from 'react';
import { Link } from 'react-router-dom';

export default function ActionLink({ to, href, variant = 'brand', children, ...rest }) {
  const className = `rcp-btn rcp-btn--${variant}`;
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
