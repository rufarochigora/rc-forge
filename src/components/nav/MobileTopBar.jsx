// src/components/nav/MobileTopBar.jsx
//
// Slim bar with the menu button, shown on phones/tablets on every page except
// the shop homepage (which already has its own sticky header and gets the menu
// button inside it). Hidden >= 900px by CSS.

import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from './navIcons';
import { useSidebar } from './sidebarContext';

export default function MobileTopBar() {
  const { openMobile } = useSidebar();
  return (
    <header className="rc-topbar">
      <button
        type="button"
        className="rc-topbar-btn"
        onClick={openMobile}
        aria-label="Open menu"
        aria-haspopup="dialog"
      >
        <MenuIcon />
      </button>
      <Link to="/" className="rc-topbar-brand">
        <img src="/RCForgelogo.png" alt="" width="42" height="28" />
        <span>RC FORGE</span>
      </Link>
    </header>
  );
}
