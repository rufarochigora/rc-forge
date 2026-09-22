// src/components/OfflineBanner.jsx
//
// Thin, unobtrusive banner shown when the device loses connectivity.
// Explicitly does not claim stock/price data is live while offline —
// see CatalogErrorState's "isCached" note for the matching disclosure
// in the product grid itself.

import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export default function OfflineBanner() {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div
      role="status"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--rc-caution, #e17055)',
        color: '#fff',
        textAlign: 'center',
        padding: '8px 16px',
        fontSize: '0.85rem',
        fontWeight: 600,
      }}
    >
      You're offline — showing cached information. Prices and stock may not be current.
    </div>
  );
}
