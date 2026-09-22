// src/components/CatalogStates.jsx
//
// Loading skeletons, empty state, and error state (with retry) for the
// product catalog. Pulled out into one file since they're small and
// always used together in the same grid slot.

import React from 'react';

export function CatalogSkeletonGrid({ count = 8 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          background: 'var(--rc-surface, #fff)',
          borderRadius: 'var(--rc-radius-md, 10px)',
          padding: '15px',
          boxShadow: 'var(--rc-shadow-sm)',
        }}>
          <div style={skeletonStyle({ height: 18, width: '40%', margin: '0 auto 10px' })} />
          <div style={skeletonStyle({ height: 150, borderRadius: 8 })} />
          <div style={skeletonStyle({ height: 16, width: '80%', margin: '15px auto 6px' })} />
          <div style={skeletonStyle({ height: 12, width: '60%', margin: '0 auto 15px' })} />
          <div style={skeletonStyle({ height: 38, borderRadius: 5 })} />
        </div>
      ))}
      <style>{`
        @keyframes rc-shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
      `}</style>
    </>
  );
}

function skeletonStyle({ height, width = '100%', margin = 0, borderRadius = 4 }) {
  return {
    height, width, margin, borderRadius,
    background: 'linear-gradient(90deg, #eef1f4 25%, #f7f9fb 37%, #eef1f4 63%)',
    backgroundSize: '400px 100%',
    animation: 'rc-shimmer 1.4s ease-in-out infinite',
  };
}

export function CatalogEmptyState({ searchTerm, onClear }) {
  return (
    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: 'var(--rc-ink-soft, #636e72)' }}>
      <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
      <h3 style={{ margin: '0 0 8px', color: 'var(--rc-ink, #2d3436)' }}>No components found</h3>
      <p style={{ margin: 0 }}>
        {searchTerm
          ? <>No results for <strong>"{searchTerm}"</strong>. Try a different keyword, browse a category, or use the "Can't Find Your Component?" section above to request it directly.</>
          : 'Try a different category or search term.'}
      </p>
      <button
        onClick={onClear}
        style={{
          marginTop: '18px', padding: '10px 24px', background: 'var(--rc-cyan-500, #0984e3)',
          color: '#fff', border: 'none', borderRadius: 'var(--rc-radius-sm, 6px)', cursor: 'pointer',
          fontWeight: '600', fontSize: '0.9rem', minHeight: 'var(--rc-touch-min, 44px)'
        }}
      >
        Clear Filters
      </button>
    </div>
  );
}

export function CatalogErrorState({ message, onRetry, isCached, detail }) {
  const [copied, setCopied] = React.useState(false);
  const detailText = detail
    ? `URL: ${detail.url}\nError: ${detail.name || 'Error'}: ${detail.message}\nOnline: ${detail.online}\nTime: ${detail.time}`
    : null;

  function copyDetail() {
    if (!detailText) return;
    navigator.clipboard?.writeText(detailText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: 'var(--rc-danger, #d63031)' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⚠️</div>
      <p style={{ margin: '0 0 6px', fontWeight: 600 }}>Something went wrong.</p>
      <p style={{ margin: '0 0 18px', color: 'var(--rc-ink-soft, #636e72)', fontSize: '0.9rem' }}>
        {message || 'Please check your connection and try again.'}
      </p>
      {isCached && (
        <p style={{ margin: '0 0 18px', color: 'var(--rc-caution, #e17055)', fontSize: '0.85rem' }}>
          Showing the last saved copy of the catalog — prices and stock may be out of date.
        </p>
      )}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: detailText ? '18px' : 0 }}>
        <button
          onClick={onRetry}
          style={{
            padding: '10px 24px', background: 'var(--rc-navy-900, #2d3436)',
            color: '#fff', border: 'none', borderRadius: 'var(--rc-radius-sm, 6px)', cursor: 'pointer',
            fontWeight: '600', fontSize: '0.9rem', minHeight: 'var(--rc-touch-min, 44px)'
          }}
        >
          Try Again
        </button>
      </div>
      {detailText && (
        <div style={{
          maxWidth: '480px', margin: '0 auto', textAlign: 'left', background: '#fff5f5',
          border: '1px solid var(--rc-danger-bg)', borderRadius: 'var(--rc-radius-sm)',
          padding: '12px 14px', fontSize: '0.78rem', fontFamily: 'var(--rc-font-mono, monospace)',
          color: 'var(--rc-ink-soft, #636e72)', whiteSpace: 'pre-wrap', wordBreak: 'break-word'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <strong style={{ color: 'var(--rc-danger)' }}>Diagnostic details</strong>
            <button
              onClick={copyDetail}
              style={{
                fontSize: '0.72rem', padding: '4px 10px', border: '1px solid var(--rc-danger)',
                background: 'transparent', color: 'var(--rc-danger)', borderRadius: '5px', cursor: 'pointer',
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          {detailText}
        </div>
      )}
    </div>
  );
}