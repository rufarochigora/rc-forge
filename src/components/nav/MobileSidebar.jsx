// src/components/nav/MobileSidebar.jsx
//
// Slide-in drawer for phones and tablets (< 900px). Traps focus while open,
// closes on Escape / scrim tap / navigation, and locks page scroll behind it.

import React, { useEffect, useRef } from 'react';
import SidebarPanel from './SidebarPanel';
import { CloseIcon } from './navIcons';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileSidebar({ open, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const panel = panelRef.current;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.querySelector('[data-autofocus]')?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = [...panel.querySelectorAll(FOCUSABLE)].filter((el) => !el.closest('[inert]'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, onClose]);

  const closeButton = (
    <button
      type="button"
      className="rc-sb-toggle"
      onClick={onClose}
      aria-label="Close menu"
      data-autofocus
    >
      <CloseIcon />
    </button>
  );

  return (
    <div className="rc-drawer" data-open={open || undefined} inert={!open}>
      <div className="rc-drawer-scrim" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        className="rc-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <SidebarPanel headerAction={closeButton} onNavigate={onClose} />
      </div>
    </div>
  );
}
