// src/SolarElectricalTubing.jsx
//
// /solar-elecrical-tubing  (the URL keeps its original spelling on purpose:
// it is the address that is already shared and indexed).
//
// Phase 1 is the structure only: every section reads from data/powerInfrastructure.js
// so real product, pricing, quotation and booking data can be plugged in later
// without redesigning the page. Nothing here pretends those systems exist.

import React from 'react';
import SharedFooter from './SharedFooter';
import PageHero from './components/power/PageHero';
import SectionHeader from './components/power/SectionHeader';
import SolutionCard from './components/power/SolutionCard';
import ApplicationList from './components/power/ApplicationList';
import ServiceRoadmap from './components/power/ServiceRoadmap';
import CtaBand from './components/power/CtaBand';
import ActionLink from './components/power/ActionLink';
import ConduitDiagram from './components/power/ConduitDiagram';
import { usePageMeta } from './hooks/usePageMeta';
import { whatsappUrl } from './config/contact';
import {
  POWER_HUB_PATH,
  TUBING_APPLICATIONS,
  TUBING_META,
  TUBING_PATH,
  TUBING_SERVICES,
  TUBING_SOLUTIONS,
} from './data/powerInfrastructure';
import './styles/power-infrastructure.css';

const QUOTE_MESSAGE =
  'Hello RC Forge, I would like a quote for solar / electrical tubing.\n\n' +
  'Project type (solar, home, commercial, industrial):\n' +
  'What I need (conduit, tubing, accessories) and roughly how much:\n' +
  'Location:\n';

const GENERAL_MESSAGE = 'Hello RC Forge, I have a question about solar and electrical tubing.';

export default function SolarElectricalTubing() {
  usePageMeta({ title: TUBING_META.title, description: TUBING_META.description, path: TUBING_PATH });

  return (
    <div className="rcp-page">
      <PageHero
        crumbs={[
          { label: 'Power & Infrastructure', to: POWER_HUB_PATH },
          { label: 'Solar & Electrical Tubing' },
        ]}
        title="Solar & Electrical Tubing"
        subtitle="Solutions for electrical installations, solar systems, cable protection and infrastructure projects, supplied from Zimbabwe."
        actions={
          <>
            <ActionLink to={{ hash: '#solutions' }} variant="primary">
              Explore solutions
            </ActionLink>
            <ActionLink href={whatsappUrl(QUOTE_MESSAGE)} variant="secondary">
              Request a quote
            </ActionLink>
            <ActionLink href={whatsappUrl(GENERAL_MESSAGE)} variant="link">
              Contact RC Forge
            </ActionLink>
          </>
        }
        note="We are adding this range in stages. Tell us what your project needs and we will confirm what we can supply."
        aside={<ConduitDiagram />}
      />

      <main className="rcp-main">
        <section className="rcp-section" aria-labelledby="solutions">
          <SectionHeader
            id="solutions"
            title="Solutions"
            intro="The ranges we are building out. Availability, sizes and pricing are confirmed per enquiry for now."
          />
          <div className="rcp-grid">
            {TUBING_SOLUTIONS.map((solution) => (
              <SolutionCard
                key={solution.id}
                title={solution.title}
                description={solution.description}
                glyph={solution.glyph}
                tags={solution.tags}
                status="enquire"
                statusLabel="Enquire for availability"
                action={{
                  label: 'Ask about availability',
                  ariaLabel: `Ask about availability of ${solution.title}`,
                  href: whatsappUrl(`Hello RC Forge, I'd like to ask about ${solution.title.toLowerCase()}.`),
                }}
              />
            ))}
          </div>
        </section>

        <section className="rcp-section" aria-labelledby="applications">
          <SectionHeader
            id="applications"
            title="Where it is used"
            intro="The kinds of work this range is intended to support."
          />
          <ApplicationList items={TUBING_APPLICATIONS} />
        </section>

        <section className="rcp-section" aria-labelledby="services">
          <SectionHeader
            id="services"
            title="RC Forge Technical Services"
            intro="These services are in development and cannot be booked online yet. If one of them matches your project, message us and we will tell you what we can support today."
          />
          <ServiceRoadmap services={TUBING_SERVICES} />
        </section>

        <section className="rcp-section">
          <CtaBand
            title="Planning an installation?"
            text="Send us the site type, the cable runs and rough quantities, and we will come back to you on WhatsApp."
          >
            <ActionLink href={whatsappUrl(QUOTE_MESSAGE)} variant="primary">
              Request a quote
            </ActionLink>
          </CtaBand>
        </section>

        <nav className="rcp-footer-links" aria-label="Related pages">
          <ActionLink to={POWER_HUB_PATH} variant="link-dark">
            All Power &amp; Infrastructure categories
          </ActionLink>
          <ActionLink to="/" variant="link-dark">
            Back to the shop
          </ActionLink>
        </nav>
      </main>

      <SharedFooter />
    </div>
  );
}
