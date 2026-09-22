// src/components/power/SectionHeader.jsx
import React from 'react';

export default function SectionHeader({ id, title, intro }) {
  return (
    <div className="rcp-section-head">
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
