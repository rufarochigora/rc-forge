// src/components/nav/SiteLayout.jsx
//
// App-wide shell: wraps every route with the navigation. Pages themselves are
// unchanged; the sidebar sits beside them on desktop and becomes a drawer on
// phones/tablets.
//
//   >= 1280px   sidebar pushes the page aside (wide or icon rail; remembered)
//   900-1279px  icon rail always; the wide panel floats over the page on demand
//   < 900px     no sidebar; menu button opens a drawer (matches the existing
//               mobile breakpoint in styles/mobile-responsive.css)

import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/design-tokens.css';
import '../../styles/sidebar.css';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import MobileTopBar from './MobileTopBar';
import ScrollManager from './ScrollManager';
import { SidebarContext } from './sidebarContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const PREF_KEY = 'rc-sidebar-pref-v1';
const WIDTH_EXPANDED = 264;
const WIDTH_RAIL = 72;

function readPref() {
  try {
    const value = localStorage.getItem(PREF_KEY);
    return value === 'collapsed' || value === 'expanded' ? value : null;
  } catch {
    return null;
  }
}

function writePref(value) {
  try {
    localStorage.setItem(PREF_KEY, value);
  } catch {
    /* storage unavailable: the preference just won't persist */
  }
}

export default function SiteLayout({ children }) {
  const location = useLocation();
  const locationKey = `${location.pathname}${location.search}`;
  const isHome = location.pathname === '/';

  const isDesktop = useMediaQuery('(min-width: 900px)');
  const isWide = useMediaQuery('(min-width: 1280px)');

  const [pref, setPref] = useState(readPref); // 'expanded' | 'collapsed' | null
  const [floatingOpen, setFloatingOpen] = useState(false); // 900-1279px only
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastKey, setLastKey] = useState(locationKey);

  // Any navigation closes the floating panel and the drawer.
  if (lastKey !== locationKey) {
    setLastKey(locationKey);
    setFloatingOpen(false);
    setMobileOpen(false);
  }

  // Don't leave the drawer "open" behind the scenes after growing to desktop.
  if (isDesktop && mobileOpen) setMobileOpen(false);

  const expanded = isWide ? pref !== 'collapsed' : floatingOpen;
  const overlay = isDesktop && !isWide && floatingOpen;

  const toggleSidebar = useCallback(() => {
    if (isWide) {
      const next = expanded ? 'collapsed' : 'expanded';
      setPref(next);
      writePref(next);
    } else {
      setFloatingOpen((open) => !open);
    }
  }, [isWide, expanded]);

  const expandSidebar = useCallback(() => {
    if (isWide) {
      setPref('expanded');
      writePref('expanded');
    } else {
      setFloatingOpen(true);
    }
  }, [isWide]);

  const closeFloating = useCallback(() => setFloatingOpen(false), []);
  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Reserve room for the sidebar by padding <body>, so the existing page
  // (a centred, max-1126px #root) simply re-centres in the space that's left.
  const push = isDesktop ? (isWide && expanded ? WIDTH_EXPANDED : WIDTH_RAIL) : 0;

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--rc-sb-push', `${push}px`);
  }, [push]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    // Enable the padding transition only after the first paint, so the page
    // doesn't slide in on load.
    const frame = requestAnimationFrame(() => root.setAttribute('data-rc-sb-ready', ''));
    return () => {
      cancelAnimationFrame(frame);
      root.style.removeProperty('--rc-sb-push');
      root.removeAttribute('data-rc-sb-ready');
    };
  }, []);

  const context = useMemo(
    () => ({ mobileOpen, openMobile, closeMobile }),
    [mobileOpen, openMobile, closeMobile],
  );

  return (
    <SidebarContext.Provider value={context}>
      <a className="rc-skip-link" href="#rc-content">
        Skip to content
      </a>
      <ScrollManager />

      <Sidebar
        expanded={expanded}
        overlay={overlay}
        onToggle={toggleSidebar}
        onRequestExpand={expandSidebar}
        onNavigate={closeFloating}
      />
      <MobileSidebar open={mobileOpen} onClose={closeMobile} />

      {!isHome && <MobileTopBar />}

      <div id="rc-content" className="rc-content" tabIndex={-1}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
