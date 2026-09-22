// src/components/BottomNav.jsx
//
// Full-width fixed bottom navigation, shown on any narrow viewport (phone
// or tablet width) whether that's the native Android app or someone just
// visiting the site in a mobile browser -- see the CSS-driven show/hide in
// mobile-responsive.css (.rc-bottom-nav), not a JS platform check, since
// this is now a responsive-web concern rather than an app-only one.
//
// The current site is a single scrolling page rather than separate routed
// screens, so Home/Shop/Cart jump to the relevant section with a smooth
// scroll; Orders navigates to the real /track order-tracking route that
// already exists. There's no "Account" tab -- the site has no user
// accounts/auth system, and adding a nav tab for a feature that doesn't
// exist would be misleading rather than professional.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, GridIcon, PackageIcon, CartIcon } from './icons';
import { scrollToSection } from '../utils/navigation';

const SECTION_TABS = [
  { id: 'rc-top', label: 'Home', Icon: HomeIcon },
  { id: 'rc-catalog', label: 'Shop', Icon: GridIcon },
];

export default function BottomNav({ cartCount = 0, activeId, onNavigate }) {
  const navigate = useNavigate();

  function handleTabPress(tab) {
    onNavigate?.(tab);
    if (tab.route) {
      navigate(tab.route);
      return;
    }
    scrollToSection(tab);
  }

  const tabs = [
    ...SECTION_TABS,
    { id: 'rc-orders', label: 'Orders', Icon: PackageIcon, route: '/track' },
    { id: 'rc-cart', label: 'Cart', Icon: CartIcon, showBadge: true },
  ];

  return (
    <nav
      className="rc-bottom-nav"
      aria-label="Primary"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        background: 'var(--rc-surface, #fff)',
        borderTop: '1px solid var(--rc-border, #e3e8ee)',
        paddingBottom: 'var(--rc-safe-bottom, 0px)',
        boxShadow: '0 -2px 10px rgba(6,11,22,0.08)',
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeId === tab.id;
        const Icon = tab.Icon;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabPress(tab)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={tab.label}
            style={{
              flex: 1,
              minHeight: 'calc(var(--rc-touch-min, 44px) + 12px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              background: 'transparent',
              border: 'none',
              color: isActive ? 'var(--rc-accent, #0984e3)' : 'var(--rc-ink-soft, #636e72)',
              fontSize: '0.68rem',
              fontWeight: isActive ? 700 : 500,
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            <span style={{ position: 'relative', fontSize: '1.35rem', lineHeight: 1, display: 'inline-flex' }}>
              <Icon />
              {tab.showBadge && cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: '-6px', right: '-9px',
                  background: 'var(--rc-accent, #0984e3)', color: '#fff',
                  fontSize: '0.6rem', fontWeight: 800, borderRadius: 'var(--rc-radius-pill, 999px)',
                  minWidth: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0 4px',
                }}>
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
