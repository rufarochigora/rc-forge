// src/components/nav/SidebarItem.jsx
//
// One link in the sidebar. Works at top level (with an icon) and as a child of
// a CollapsibleCategory (no icon, indented by CSS).

import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ICONS } from './navIconMap';

export default function SidebarItem({ item, active, rail, accent, onNavigate }) {
  const Icon = item.icon ? NAV_ICONS[item.icon] : null;
  const soon = item.status === 'soon';

  return (
    <Link
      to={item.href}
      className="rc-sb-item"
      data-active={active || undefined}
      data-accent={accent}
      aria-current={active ? 'page' : undefined}
      title={rail ? item.label : undefined}
      onClick={onNavigate}
    >
      {Icon && (
        <span className="rc-sb-icon">
          <Icon />
        </span>
      )}
      <span className="rc-sb-label">{item.label}</span>
      {soon && <span className="rc-sb-chip">Soon</span>}
      {item.badge && <span className="rc-sb-badge">{item.badge}</span>}
    </Link>
  );
}
