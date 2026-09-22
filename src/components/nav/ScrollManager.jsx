// src/components/nav/ScrollManager.jsx
//
// Client-side navigation does not reset scroll or follow #hashes on its own
// (full page loads did). This restores both, without touching the browser's
// own scroll restoration on first load or reload.

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const first = isFirstRender.current;
    isFirstRender.current = false;

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    if (!first) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
