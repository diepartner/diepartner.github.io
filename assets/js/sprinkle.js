// sprinkle.js
// Lightweight "sprinkle" randomizer: picks visual accents and applies them to :root.
// Designed to preload quickly, run with defer, and fail silently if unavailable.

(function () {
  // Ensure DOM is available; defer script in HTML so DOM is ready.
  try {
    const colors = ['#ff6b6b', '#f6c85f', '#6be4a3', '#6bb0ff', '#c38cff'];
    const scales = [0.9, 1, 1.1, 1.2];

    // Pick random entries.
    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const accent = rand(colors);
    const scale = rand(scales);

    // Apply to :root if possible.
    if (typeof document !== 'undefined' && document.documentElement && document.documentElement.style) {
      const root = document.documentElement;
      root.style.setProperty('--accent', accent);
      root.style.setProperty('--h1-scale', String(scale));
    }
  } catch (_) {
    // Silent fallback to CSS defaults.
  }
})();
