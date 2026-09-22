// src/config/contact.js
//
// Contact details shared by the newer Power & Infrastructure pages. The shop
// itself (App.jsx) keeps its own contact rotation for order routing; this is
// only the general RC Forge line used for enquiries and quote requests.

export const RC_FORGE_WHATSAPP = '263780114134';

/** Build a wa.me link with an optional pre-filled message. */
export function whatsappUrl(message = '') {
  const base = `https://wa.me/${RC_FORGE_WHATSAPP}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
