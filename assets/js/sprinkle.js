// sprinkle.js
// Preloads random choices and sets CSS variables; fails gracefully.
// Lightweight "sprinkle" randomizer: picks visual accents and applies them to :root.
// Designed to preload quickly, run with defer, and fail silently if unavailable.
//
// Notes:
// - Script is intended to run with `defer` so the DOM is available when it executes.
// - CSS provides sensible fallback values for when JS is disabled or the script fails.
// - We only set CSS custom properties on :root; no direct DOM mutation required.
//
// Usage:
// <script src="sprinkle.js" defer></script>

(function () {
  // Ensure any unexpected error doesn't break the page — CSS fallbacks remain in effect.
  try {
    // Candidate accent colors and heading scale factors.
    const colors = ['#ff6b6b', '#f6c85f', '#6be4a3', '#6bb0ff', '#c38cff'];
    const scales = [0.9, 1, 1.1, 1.2];

    // Small helper to pick a random element from an array.
    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const accent = rand(colors);
    const scale = rand(scales);

    // Apply values as CSS custom properties on :root so the stylesheet can consume them.
    if (typeof document !== 'undefined' && document.documentElement && document.documentElement.style) {
      const root = document.documentElement;
      root.style.setProperty('--accent', accent);
      root.style.setProperty('--h1-scale', String(scale));
    }
  } catch (_) {
    // Fail silently — keep defaults defined in CSS. The error variable is retained
    // here in case future debugging/logging is desired.
  }
})();
