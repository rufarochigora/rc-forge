// src/components/nav/SidebarPanel.jsx
//
// The navigation content shared by the desktop sidebar and the mobile drawer:
// brand row, then every section from config/navigation.js. The two wrappers
// (Sidebar, MobileSidebar) only decide how this panel is positioned and shown.

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarSection from './SidebarSection';
import { NAVIGATION } from '../../config/navigation';
import { shouldGroupOpen } from '../../utils/navMatch';

const ALL_GROUPS = NAVIGATION.flatMap((section) => section.items).filter((entry) => entry.children);

function groupsOpenFor(location) {
  return ALL_GROUPS.filter((group) => shouldGroupOpen(group, location)).map((group) => group.id);
}

export default function SidebarPanel({
  rail = false,
  headerAction,
  onNavigate,
  onRequestExpand,
}) {
  const location = useLocation();
  const locationKey = `${location.pathname}${location.search}`;

  const [openGroups, setOpenGroups] = useState(() => new Set(groupsOpenFor(location)));
  const [lastKey, setLastKey] = useState(locationKey);

  // When the route changes, make sure the group containing the new page is
  // open. Groups the person opened by hand stay as they are.
  if (lastKey !== locationKey) {
    setLastKey(locationKey);
    setOpenGroups((prev) => new Set([...prev, ...groupsOpenFor(location)]));
  }

  const toggleGroup = (id) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // In the icon-only rail a group can't unfold in place, so pressing its icon
  // widens the sidebar and opens that group.
  const handleRailPress = (id) => {
    setOpenGroups((prev) => new Set(prev).add(id));
    onRequestExpand?.();
  };

  return (
    <div className="rc-sb-panel" data-rail={rail || undefined}>
      <div className="rc-sb-head">
        <Link to="/" className="rc-sb-brand" aria-label="RC Forge home" onClick={onNavigate}>
          <img src="/RCForgelogo.png" alt="" width="51" height="34" />
          <span className="rc-sb-brand-text">
            <strong>RC Forge</strong>
            <small>Electronics &amp; power</small>
          </span>
        </Link>
        {headerAction}
      </div>

      <nav className="rc-sb-nav" aria-label="Site menu">
        {NAVIGATION.map((section) => (
          <SidebarSection
            key={section.id}
            section={section}
            location={location}
            openGroups={openGroups}
            rail={rail}
            onToggleGroup={toggleGroup}
            onRailPress={handleRailPress}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </div>
  );
}
