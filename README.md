# BEBEN Landing — React components

Split from the original single-file HTML mockup into a component tree that
should drop into a Vite/CRA-style React project as-is.

## Structure

```
src/
  components/
    BebenLanding.jsx   composes everything — import this one
    Nav.jsx             sticky header + mobile menu
    Hero.jsx             headline + gold sheen sweep
    TrustStrip.jsx        4-item value proposition strip
    PulseSection.jsx      "BEBEN Pulse" trend cards (signature section)
    EditGrid.jsx           curated product grid
    AccessCTA.jsx           membership request form
    Footer.jsx
    Button.jsx              shared button (gold / ghost variants)
    Icons.jsx                 hand-drawn line icons, no icon library
    *.module.css               one CSS Module per component above
  hooks/
    useReveal.js               IntersectionObserver scroll-reveal hook
  styles/
    tokens.css                  colors, type, spacing — imported once
```

## Using it

```jsx
import BebenLanding from './components/BebenLanding';

export default function App() {
  return <BebenLanding />;
}
```

`BebenLanding.jsx` imports `tokens.css` itself, so nothing else needs
wiring up.

## Dependencies

None beyond `react` and `react-dom`. The GSAP/ScrollTrigger animation
from the HTML version was rewritten as plain CSS transitions driven by
`useReveal` (IntersectionObserver) so this drops in without adding a
new package. If your bundler doesn't support `.module.css` out of the
box (Vite and Create React App both do), swap the module imports for
your own styling approach — the class names in each `*.module.css`
map 1:1 to the classes used in its matching component.

## Things to wire up before shipping

- **`AccessCTA.jsx`** — `handleSubmit` just flips local state. Point it
  at your real signup/waitlist endpoint.
- **`EditGrid.jsx`** — the gold monogram letters in `.art` are a
  placeholder standing in for product photography (no stock photos
  were used, since these aren't real product photos). Swap the `<span>`
  for an `<img>` once you have real assets, and drop the `PRODUCTS`
  array in favor of your actual catalog data.
- **`PulseSection.jsx`** — `TRENDS` is static demo data shaped like
  what a real trend-detection feed would return (rank, name, category,
  % change, sparkline values). Point it at BEBEN's actual AI trend
  signal once that's available.
- **Fonts** — `tokens.css` loads Fraunces/Jost/Manrope via an `@import`
  for portability. For better performance, move that to `<link
  rel="preconnect">` + `<link rel="stylesheet">` tags in your
  `index.html` instead and delete the `@import` line.

## Accessibility notes carried over from the HTML version

Text contrast, 12px+ type, 44px touch targets, visible focus rings,
`prefers-reduced-motion` support (see the media query in `tokens.css`
plus the reduced-motion check inside `useReveal`), and a single `h1`
with no skipped heading levels (h1 → h2 → h3) are all already in
place — worth re-checking if you restyle sections later.
