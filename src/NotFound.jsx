// src/NotFound.jsx
//
// Shown for addresses that match no route (previously a blank page).

import React from 'react';
import SharedFooter from './SharedFooter';
import PageHero from './components/power/PageHero';
import ActionLink from './components/power/ActionLink';
import { usePageMeta } from './hooks/usePageMeta';
import './styles/power-infrastructure.css';

export default function NotFound() {
  usePageMeta({ title: 'Page not found | RC Forge', noindex: true });

  return (
    <div className="rcp-page">
      <PageHero
        title="Page not found"
        subtitle="We could not find that page. It may have moved, or the address may have a typo."
        actions={
          <>
            <ActionLink to="/" variant="primary">
              Go to the shop
            </ActionLink>
            <ActionLink to="/track" variant="secondary">
              Track an order
            </ActionLink>
          </>
        }
      />
      <SharedFooter />
    </div>
  );
}
