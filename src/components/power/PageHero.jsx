// src/components/power/PageHero.jsx
//
// Shared hero for the Power & Infrastructure pages: optional breadcrumb, title,
// subtitle, actions, a status note and an optional illustration.

import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ crumbs = [], title, subtitle, actions, note, aside }) {
  return (
    <header className="rcp-hero" data-has-aside={aside ? '' : undefined}>
      <div className="rcp-hero-copy">
        {crumbs.length > 0 && (
          <nav className="rcp-crumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((crumb, index) => (
                <li key={crumb.label}>
                  {crumb.to && index < crumbs.length - 1 ? (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1>{title}</h1>
        {subtitle && <p className="rcp-hero-sub">{subtitle}</p>}
        {actions && <div className="rcp-actions">{actions}</div>}
        {note && <p className="rcp-hero-note">{note}</p>}
      </div>
      {aside && <div className="rcp-hero-aside">{aside}</div>}
    </header>
  );
}
