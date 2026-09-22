// src/hooks/useIsNative.js
//
// Detects whether the app is running inside the Capacitor Android shell
// vs. the regular website. Used to conditionally render mobile-only chrome
// (bottom nav, safe-area padding, back-button handling) without touching
// the desktop/web experience at all -- on the web, Capacitor.isNativePlatform()
// simply returns false, so every consumer of this hook degrades to normal
// website behavior automatically.
//
// isNativePlatform()/getPlatform() are synchronous and fixed for the life
// of the process, so this is a plain computed value -- no state/effect
// needed, and nothing to resynchronize.

import { Capacitor } from '@capacitor/core';

export function useIsNative() {
  return {
    isNative: Capacitor.isNativePlatform(),
    platform: Capacitor.getPlatform(), // 'web' | 'android' | 'ios'
  };
}
