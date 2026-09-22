// src/components/nav/Sidebar.jsx
//
// Desktop / laptop sidebar (>= 900px). It is either a wide panel or a slim
// icon rail. On screens too narrow to spare the width (900-1279px) the wide
// panel floats over the page with a scrim instead of pushing content aside.

import React, { useEffect } from 'react';
import SidebarPanel from './SidebarPanel';
import { CollapseIcon, ExpandIcon } from './navIcons';

export default function Sidebar({ expanded, overlay, onToggle, onRequestExpand, onNavigate }) {
  useEffect(() => {
    if (!overlay) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onToggle();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [overlay, onToggle]);

  const toggle = (
    <button
      type="button"
      className="rc-sb-toggle"
      onClick={onToggle}
      aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
      aria-expanded={expanded}
      title={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
    >
      {expanded ? <CollapseIcon /> : <ExpandIcon />}
    </button>
  );

  return (
    <>
      {overlay && <div className="rc-sb-scrim" onClick={onToggle} aria-hidden="true" />}
      <aside
        className="rc-sidebar"
        data-expanded={expanded}
        data-overlay={overlay || undefined}
      >
        <SidebarPanel
          rail={!expanded}
          headerAction={toggle}
          onRequestExpand={onRequestExpand}
          onNavigate={onNavigate}
        />
      </aside>
    </>
  );
}
