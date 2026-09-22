// src/utils/navMatch.js
//
// Pure helpers that decide which sidebar entries count as "current" for a
// given router location. Kept out of the components so the rules are easy to
// read (and to change) in one place.

function splitHref(href) {
  const [beforeHash] = href.split('#');
  const [path, query = ''] = beforeHash.split('?');
  return { path: path || '/', query };
}

/** True when a link should be highlighted as the current page. */
export function isLinkActive(item, location) {
  if (!item.href || item.neverActive) return false;
  const { path, query } = splitHref(item.href);
  if (location.pathname !== path) return false;
  // "Home" is only current on the bare shop page, not on a filtered view.
  if (item.end && (location.search || '') !== (query ? `?${query}` : '')) return false;
  return true;
}

/** True when the location sits inside a group (child active or prefix match). */
export function isGroupActive(group, location) {
  const prefixes = group.matchPrefixes || [];
  if (prefixes.some((p) => location.pathname === p || location.pathname.startsWith(`${p}/`))) return true;
  return group.children.some((child) => isLinkActive(child, location));
}

/** Groups that should start (or become) open for this location. */
export function shouldGroupOpen(group, location) {
  if (isGroupActive(group, location)) return true;
  return (group.openOnPaths || []).includes(location.pathname);
}
