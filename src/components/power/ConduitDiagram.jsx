// src/components/power/ConduitDiagram.jsx
//
// Cross-section of three cables inside a conduit, drawn as a blueprint. It is
// the one illustrative moment on the tubing page and deliberately carries no
// dimensions or ratings (those belong to real product data, later).

import React from 'react';

export default function ConduitDiagram() {
  return (
    <svg
      className="rcp-diagram"
      viewBox="0 0 480 360"
      role="img"
      aria-label="Cross-section of three insulated cables running inside an electrical conduit"
    >
      <defs>
        <pattern id="rcp-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#44c4fc" strokeOpacity="0.55" strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* centre lines */}
      <path d="M52 180H328M190 42V318" stroke="#44c4fc" strokeOpacity="0.28" strokeDasharray="6 6" />

      {/* conduit wall */}
      <circle cx="190" cy="180" r="109" fill="none" stroke="url(#rcp-hatch)" strokeWidth="18" />
      <circle className="rcp-draw" pathLength="1" cx="190" cy="180" r="118" fill="none" stroke="#44c4fc" strokeWidth="2" />
      <circle className="rcp-draw" pathLength="1" cx="190" cy="180" r="100" fill="none" stroke="#44c4fc" strokeWidth="2" />

      {/* three cables */}
      {[
        [190, 143],
        [158, 198.5],
        [222, 198.5],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle className="rcp-draw" pathLength="1" cx={cx} cy={cy} r="30" fill="#0b1220" stroke="#dbe4f0" strokeWidth="2" />
          <circle className="rcp-fade" cx={cx} cy={cy} r="15" fill="#ffb020" stroke="#ffc857" strokeWidth="1.5" />
          <circle className="rcp-fade" cx={cx} cy={cy} r="4.5" fill="none" stroke="#0b1220" strokeWidth="1.5" />
        </g>
      ))}

      {/* callouts */}
      <g className="rcp-fade" fill="none" stroke="#9fb3cc" strokeWidth="1.2">
        <path d="M200.6 132.4 300 72H326" />
        <path d="M292.4 142.7 310 112H326" />
        <path d="M250.2 208.8 300 232H326" />
      </g>
      <g className="rcp-fade" fill="#9fb3cc" stroke="none">
        <circle cx="200.6" cy="132.4" r="2.6" />
        <circle cx="292.4" cy="142.7" r="2.6" />
        <circle cx="250.2" cy="208.8" r="2.6" />
      </g>
      <g className="rcp-fade" fill="#c7d2e3" fontSize="13" fontFamily="inherit">
        <text x="332" y="76">Copper conductor</text>
        <text x="332" y="116">Conduit wall</text>
        <text x="332" y="236">Cable insulation</text>
      </g>
    </svg>
  );
}
