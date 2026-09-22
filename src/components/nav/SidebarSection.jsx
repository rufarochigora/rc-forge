// src/components/nav/SidebarSection.jsx
//
// A titled block of items in the sidebar. Renders each entry as either a plain
// link or a collapsible group depending on its shape in config/navigation.js.

import React from 'react';
import SidebarItem from './SidebarItem';
import CollapsibleCategory from './CollapsibleCategory';
import { isLinkActive, isGroupActive } from '../../utils/navMatch';

export default function SidebarSection({
  section,
  location,
  openGroups,
  rail,
  onToggleGroup,
  onRailPress,
  onNavigate,
}) {
  const headingId = section.title ? `rc-sb-sec-${section.id}` : undefined;

  return (
    <section className="rc-sb-section" aria-labelledby={headingId}>
      {section.title && (
        <h2 id={headingId} className="rc-sb-section-title">
          {section.title}
        </h2>
      )}
      <ul className="rc-sb-list">
        {section.items.map((entry) => (
          <li key={entry.id}>
            {entry.children ? (
              <CollapsibleCategory
                group={entry}
                open={openGroups.has(entry.id)}
                active={isGroupActive(entry, location)}
                rail={rail}
                location={location}
                onToggle={onToggleGroup}
                onRailPress={onRailPress}
                onNavigate={onNavigate}
              />
            ) : (
              <SidebarItem
                item={entry}
                active={isLinkActive(entry, location)}
                rail={rail}
                onNavigate={onNavigate}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
