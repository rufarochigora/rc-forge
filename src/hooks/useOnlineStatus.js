// src/hooks/useOnlineStatus.js
//
// Simple connectivity tracker backed by the browser's online/offline
// events, which Capacitor's Android WebView also fires correctly. Kept
// deliberately dependency-free (no @capacitor/network needed) so it works
// identically on web and native without extra install steps.

import { useEffect, useState } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    function goOnline() { setIsOnline(true); }
    function goOffline() { setIsOnline(false); }
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return isOnline;
}
