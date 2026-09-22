// src/components/nav/sidebarContext.js
//
// Lets any page (e.g. the shop's mobile header) open the mobile menu without
// prop-drilling. Falls back to no-ops if a page is rendered outside SiteLayout.

import { createContext, useContext } from 'react';

const noop = () => {};

export const SidebarContext = createContext({
  mobileOpen: false,
  openMobile: noop,
  closeMobile: noop,
});

export function useSidebar() {
  return useContext(SidebarContext);
}
