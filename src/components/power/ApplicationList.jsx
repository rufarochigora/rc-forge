// src/components/power/ApplicationList.jsx
import React from 'react';

export default function ApplicationList({ items }) {
  return (
    <ul className="rcp-spec-list">
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.title}</strong>
          <span>{item.detail}</span>
        </li>
      ))}
    </ul>
  );
}
