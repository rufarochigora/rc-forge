// src/utils/navigation.js
export function scrollToSection(tab) {
  const el = document.getElementById(tab.id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (tab.focusInputId) {
    // give the smooth-scroll a moment before stealing focus
    setTimeout(() => {
      const input = document.getElementById(tab.focusInputId);
      if (input) input.focus();
    }, 350);
  }
}
