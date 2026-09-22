// src/components/ProductCard.jsx
//
// Extracted from the inline JSX that used to live in App.jsx's product
// grid, so it can be reused across the catalog grid, "related products",
// and (later) the product detail screen without duplicating markup.

import React from 'react';

export default function ProductCard({ product, onAddToCart, onSelect }) {
  const isTrackedStock = product.stock !== null && product.stock !== undefined;
  const outOfStock = isTrackedStock && product.stock <= 0;
  const lowStock = isTrackedStock && product.stock > 0 && product.stock <= 5;

  return (
    <div
      style={{
        background: 'var(--rc-surface, #fff)',
        borderRadius: 'var(--rc-radius-md, 10px)',
        padding: '15px',
        textAlign: 'center',
        boxShadow: 'var(--rc-shadow-sm, 0 4px 6px rgba(0,0,0,0.05))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        opacity: outOfStock ? 0.7 : 1,
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'transform var(--rc-duration-fast, 120ms) var(--rc-ease, ease)',
      }}
      onClick={onSelect ? () => onSelect(product) : undefined}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={onSelect ? (e) => { if (e.key === 'Enter') onSelect(product); } : undefined}
      aria-label={onSelect ? `View details for ${product.name}` : undefined}
    >
      <div>
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
          <span style={{
            fontSize: '0.7rem', textTransform: 'uppercase', color: '#636e72',
            background: 'var(--rc-cyan-400, #44c4fc)', padding: '3px 8px', borderRadius: 'var(--rc-radius-pill, 12px)',
            display: 'inline-block'
          }}>
            {product.category}
          </span>
          {isTrackedStock && (
            <span style={{
              fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: 'var(--rc-radius-pill, 12px)',
              display: 'inline-block',
              color: outOfStock ? 'var(--rc-danger, #d63031)' : lowStock ? 'var(--rc-caution, #e17055)' : 'var(--rc-safe, #00b894)',
              background: outOfStock ? 'var(--rc-danger-bg)' : lowStock ? 'var(--rc-caution-bg)' : 'var(--rc-safe-bg)'
            }}>
              {outOfStock ? 'Out of Stock' : lowStock ? `Low Stock (${product.stock})` : `In Stock (${product.stock})`}
            </span>
          )}
        </div>
        <div style={{
          height: '150px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: 'hsl(189, 92%, 47%)',
          borderRadius: 'var(--rc-radius-sm, 8px)', overflow: 'hidden'
        }}>
          <img src={product.img} alt={product.name}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = '📦 Image Ready'; }} />
        </div>
        <h3 style={{ fontSize: '1rem', margin: '15px 0 5px', color: 'var(--rc-ink, #2d3436)' }}>{product.name}</h3>
        {product.sku && (
          <p style={{ fontSize: '0.7rem', color: 'var(--rc-ink-faint, #b2bec3)', margin: '0 0 6px', fontFamily: 'var(--rc-font-mono, monospace)' }}>
            {product.sku}
          </p>
        )}
        {product.details && (
          <p style={{ fontSize: '0.8rem', color: 'var(--rc-ink-faint, #b2bec3)', margin: '0 0 10px', minHeight: '35px' }}>{product.details}</p>
        )}
      </div>
      <div>
        <p style={{ fontWeight: 'bold', color: 'var(--rc-cyan-500, #0984e3)', margin: '10px 0 15px', fontSize: '1.2rem' }}>
          {product.price === 0.00 ? (
            <span style={{ fontSize: '0.85rem', color: 'var(--rc-ink-soft, #636e72)', fontWeight: '600' }}>Enquire for price</span>
          ) : `$${product.price.toFixed(2)}`}
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          disabled={outOfStock}
          style={{
            width: '100%', padding: '10px', minHeight: 'var(--rc-touch-min, 44px)',
            background: outOfStock ? 'var(--rc-ink-faint, #b2bec3)' : 'var(--rc-navy-900, #2d3436)',
            color: '#fff', border: 'none', borderRadius: 'var(--rc-radius-sm, 5px)',
            cursor: outOfStock ? 'not-allowed' : 'pointer',
            fontWeight: 'bold', transition: 'background var(--rc-duration-fast, 0.2s)'
          }}
          onMouseOver={(e) => { if (!outOfStock) e.target.style.background = 'var(--rc-cyan-500, #0984e3)'; }}
          onMouseOut={(e) => { if (!outOfStock) e.target.style.background = 'var(--rc-navy-900, #2d3436)'; }}
        >
          {outOfStock ? 'Out of Stock' : 'Add to Order'}
        </button>
      </div>
    </div>
  );
}
