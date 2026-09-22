// src/hooks/usePageMeta.js
//
// Per-route <title> / description / canonical for the SPA. The project's SEO
// is otherwise a static <head> in index.html; this only overrides it while a
// page is mounted and puts the original values back on unmount, so the shop
// homepage keeps its existing metadata untouched.

import { useEffect } from 'react';

const SITE_ORIGIN = 'https://rc-forge.vercel.app';

function upsertMeta(selector, create) {
  let el = document.head.querySelector(selector);
  let created = false;
  if (!el) {
    el = create();
    document.head.appendChild(el);
    created = true;
  }
  return { el, created };
}

export function usePageMeta({ title, description, path, noindex = false }) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;

    const restore = [];

    if (description) {
      const { el, created } = upsertMeta('meta[name="description"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        return m;
      });
      const previous = el.getAttribute('content');
      el.setAttribute('content', description);
      restore.push(() => (created ? el.remove() : el.setAttribute('content', previous ?? '')));
    }

    if (path) {
      const { el, created } = upsertMeta('link[rel="canonical"]', () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      });
      const previous = el.getAttribute('href');
      el.setAttribute('href', `${SITE_ORIGIN}${path}`);
      restore.push(() => (created ? el.remove() : el.setAttribute('href', previous ?? '')));
    }

    if (noindex) {
      const { el, created } = upsertMeta('meta[name="robots"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'robots');
        return m;
      });
      const previous = el.getAttribute('content');
      el.setAttribute('content', 'noindex, follow');
      restore.push(() => (created ? el.remove() : el.setAttribute('content', previous ?? '')));
    }

    return () => {
      document.title = previousTitle;
      restore.forEach((fn) => fn());
    };
  }, [title, description, path, noindex]);
}
