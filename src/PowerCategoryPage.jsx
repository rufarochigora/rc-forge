// src/PowerCategoryPage.jsx
//
// /power-infrastructure/:slug
//   - a category that already has a real page redirects to it (so the future
//     URL /power-infrastructure/conduit-and-tubing works today, while the
//     original /solar-elecrical-tubing stays the live address);
//   - a planned category shows a short "being prepared" page with a contact
//     route and is kept out of search indexes;
//   - anything else is a not-found page.

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import SharedFooter from './SharedFooter';
import NotFound from './NotFound';
import PageHero from './components/power/PageHero';
import ActionLink from './components/power/ActionLink';
import { usePageMeta } from './hooks/usePageMeta';
import { whatsappUrl } from './config/contact';
import { POWER_CATEGORIES, POWER_HUB_PATH } from './data/powerInfrastructure';
import './styles/power-infrastructure.css';

function ComingSoon({ category }) {
  usePageMeta({
    title: `${category.label} | Power & Infrastructure | RC Forge Zimbabwe`,
    description: category.summary,
    path: `${POWER_HUB_PATH}/${category.slug}`,
    noindex: true,
  });

  return (
    <div className="rcp-page">
      <PageHero
        crumbs={[{ label: 'Power & Infrastructure', to: POWER_HUB_PATH }, { label: category.label }]}
        title={category.label}
        subtitle={category.summary}
        actions={
          <>
            <ActionLink
              href={whatsappUrl(`Hello RC Forge, I'm interested in ${category.label.toLowerCase()}. Here is what I need:`)}
              variant="primary"
            >
              Tell us what you need
            </ActionLink>
            <ActionLink to={POWER_HUB_PATH} variant="secondary">
              All categories
            </ActionLink>
          </>
        }
        note="This category is being prepared and there is nothing to order here yet. Message us and we will let you know what we can supply."
      />
      <SharedFooter />
    </div>
  );
}

export default function PowerCategoryPage() {
  const { slug } = useParams();
  const category = POWER_CATEGORIES.find((entry) => entry.slug === slug);

  if (!category) return <NotFound />;
  if (category.href) return <Navigate to={category.href} replace />;
  return <ComingSoon category={category} />;
}
