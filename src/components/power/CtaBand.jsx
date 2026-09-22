// src/components/power/CtaBand.jsx
import React from 'react';

export default function CtaBand({ title, text, children }) {
  return (
    <aside className="rcp-cta">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="rcp-actions">{children}</div>
    </aside>
  );
}
