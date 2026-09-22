// src/components/nav/CollapsibleCategory.jsx
//
// An expandable group (Robotics & Electronics, Power & Infrastructure, and any
// group added to config/navigation.js later). In the icon-only rail the group
// shows just its icon; pressing it widens the sidebar and opens the group.

import React, { useId } from 'react';
import SidebarItem from './SidebarItem';
import { NAV_ICONS } from './navIconMap';
import { ChevronDownIcon } from './navIcons';
import { isLinkActive } from '../../utils/navMatch';

export default function CollapsibleCategory({
  group,
  open,
  active,
  rail,
  location,
  onToggle,
  onRailPress,
  onNavigate,
}) {
  const listId = useId();
  const Icon = NAV_ICONS[group.icon];
  const expanded = open && !rail;

  return (
    <div className="rc-sb-group" data-open={expanded || undefined}>
      <button
        type="button"
        className="rc-sb-item rc-sb-group-toggle"
        data-active={active || undefined}
        data-accent={group.accent}
        aria-expanded={expanded}
        aria-controls={listId}
        title={rail ? group.label : undefined}
        onClick={rail ? () => onRailPress(group.id) : () => onToggle(group.id)}
      >
        {Icon && (
          <span className="rc-sb-icon">
            <Icon />
          </span>
        )}
        <span className="rc-sb-label">{group.label}</span>
        {group.badge && <span className="rc-sb-badge">{group.badge}</span>}
        <span className="rc-sb-chevron" aria-hidden="true">
          <ChevronDownIcon />
        </span>
      </button>

      {/* Grid-rows trick animates height without measuring; `inert` keeps
          collapsed links out of the tab order and the accessibility tree. */}
      <div className="rc-sb-children" inert={!expanded}>
        <ul id={listId} className="rc-sb-children-inner">
          {group.children.map((child) => (
            <li key={child.id}>
              <SidebarItem
                item={child}
                active={isLinkActive(child, location)}
                accent={group.accent}
                onNavigate={onNavigate}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
