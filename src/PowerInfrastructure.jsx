// src/PowerInfrastructure.jsx
//
// /power-infrastructure : the parent of the Power & Infrastructure section.
// Categories come from data/powerInfrastructure.js, the same list the sidebar
// uses, so adding one there updates both.

import React from 'react';
import SharedFooter from './SharedFooter';
import PageHero from './components/power/PageHero';
import SectionHeader from './components/power/SectionHeader';
import SolutionCard from './components/power/SolutionCard';
import CtaBand from './components/power/CtaBand';
import ActionLink from './components/power/ActionLink';
import { usePageMeta } from './hooks/usePageMeta';
import { whatsappUrl } from './config/contact';
import { POWER_CATEGORIES, POWER_HUB_PATH, getPowerCategoryHref } from './data/powerInfrastructure';
import './styles/power-infrastructure.css';

export default function PowerInfrastructure() {
  usePageMeta({
    title: 'Power & Infrastructure | RC Forge Zimbabwe',
    description:
      'RC Forge Power & Infrastructure: solar and electrical tubing today, with solar panels, heavy-duty cables, batteries and power equipment planned.',
    path: POWER_HUB_PATH,
  });

  return (
    <div className="rcp-page">
      <PageHero
        crumbs={[{ label: 'Power & Infrastructure' }]}
        title="Power & Infrastructure"
        subtitle="RC Forge started with micro-electronics. This section covers the larger systems those parts end up in: solar, storage, cabling and power equipment."
        actions={
          <ActionLink to="/solar-elecrical-tubing" variant="primary">
            See solar &amp; electrical tubing
          </ActionLink>
        }
        note="Solar & Electrical Tubing is the first category. The others are planned and are being added one at a time."
      />

      <main className="rcp-main">
        <section className="rcp-section" aria-labelledby="two-sides">
          <SectionHeader id="two-sides" title="Two sides of RC Forge" />
          <div className="rcp-split">
            <article>
              <h3>Robotics &amp; Electronics</h3>
              <p>Boards, sensors, actuators and the components behind student and prototype projects.</p>
              <ActionLink to="/" variant="outline">
                Browse the shop
              </ActionLink>
            </article>
            <article data-current="">
              <h3>Power &amp; Infrastructure</h3>
              <p>Solar, storage, cabling and the equipment used to install and distribute power.</p>
              <span className="rcp-split-here">You are here</span>
            </article>
          </div>
        </section>

        <section className="rcp-section" aria-labelledby="categories">
          <SectionHeader id="categories" title="Categories" />
          <div className="rcp-grid">
            {POWER_CATEGORIES.map((category) => {
              const open = category.status === 'open';
              return (
                <SolutionCard
                  key={category.slug}
                  title={category.label}
                  description={category.summary}
                  glyph={category.glyph}
                  status={open ? 'open' : 'soon'}
                  statusLabel={open ? 'Enquiries open' : 'Coming soon'}
                  action={{
                    label: open ? 'View category' : 'Learn more',
                    ariaLabel: `${open ? 'View' : 'Learn more about'} ${category.label}`,
                    to: getPowerCategoryHref(category),
                  }}
                />
              );
            })}
          </div>
        </section>

        <section className="rcp-section">
          <CtaBand
            title="Need something specific?"
            text="If your project needs a product that is not listed yet, tell us. Requests help us decide what to stock next."
          >
            <ActionLink
              href={whatsappUrl('Hello RC Forge, I am looking for power / solar equipment. Here is what I need:')}
              variant="primary"
            >
              Contact RC Forge
            </ActionLink>
          </CtaBand>
        </section>
      </main>

      <SharedFooter />
    </div>
  );
}
