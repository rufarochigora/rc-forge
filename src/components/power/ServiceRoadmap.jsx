// src/components/power/ServiceRoadmap.jsx
//
// Lists services with an honest status. Today every entry is 'planned'; when a
// service becomes real, change its `status` in the data and (later) give it an
// `action`. The component already renders any status label it is given.

import React from 'react';
import ActionLink from './ActionLink';

const STATUS_LABELS = {
  planned: 'Planned',
  available: 'Available',
};

export default function ServiceRoadmap({ services }) {
  return (
    <ul className="rcp-roadmap">
      {services.map((service) => (
        <li key={service.id}>
          <div className="rcp-roadmap-text">
            <strong>{service.title}</strong>
            <span>{service.description}</span>
          </div>
          {service.action ? (
            <ActionLink to={service.action.to} href={service.action.href} variant="outline">
              {service.action.label}
            </ActionLink>
          ) : (
            <span className="rcp-status" data-status={service.status}>
              {STATUS_LABELS[service.status] || service.status}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
