// src/components/power/SolutionCard.jsx
//
// Reusable card for a product range, a category, or (later) a single stocked
// product. Everything except `title` is optional, so real inventory can be
// connected by passing more props: `image`, `price`, `specs` are already
// supported and simply render when present.
//
//   <SolutionCard
//     title="20 mm PVC conduit"
//     image="/assets/..."
//     price="US$ 1.20"
//     specs={[{ label: 'Length', value: '3 m' }]}
//     action={{ label: 'Add to order', href: '...' }} />

import React from 'react';
import Glyph from './Glyph';
import ActionLink from './ActionLink';

export default function SolutionCard({
  title,
  description,
  glyph,
  image,
  price,
  specs,
  tags,
  status,
  statusLabel,
  action,
}) {
  return (
    <article className="rcp-card">
      <div className="rcp-card-top">
        {image ? (
          <img className="rcp-card-image" src={image} alt="" loading="lazy" />
        ) : (
          <span className="rcp-glyph">
            <Glyph name={glyph} />
          </span>
        )}
        {statusLabel && (
          <span className="rcp-status" data-status={status}>
            {statusLabel}
          </span>
        )}
      </div>

      <h3>{title}</h3>
      {description && <p className="rcp-card-desc">{description}</p>}

      {price && <p className="rcp-price">{price}</p>}

      {specs && specs.length > 0 && (
        <dl className="rcp-specs">
          {specs.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {tags && tags.length > 0 && (
        <ul className="rcp-tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      {action && (
        <div className="rcp-card-action">
          <ActionLink to={action.to} href={action.href} variant="outline" aria-label={action.ariaLabel}>
            {action.label}
          </ActionLink>
        </div>
      )}
    </article>
  );
}
