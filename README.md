# Relay landing site

A React/Vite landing page for the temporary product name **Relay**.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Where to edit

- `src/data/site.js` — product name, URLs, plan copy, FAQ copy.
- `src/styles/theme.css` — your supplied light/dark CSS variables.
- `src/styles/site.css` — landing-page layout/styles using those variables.
- `src/App.jsx` — section order and product feature copy.
- `src/components/*` — reusable sections/components.

## Media placeholders

Every image/video slot uses the `MediaPlaceholder` component and renders an empty `<div>`.
Replace a placeholder with your own `<img>`, `<video>`, screenshot component, or embed when your media is ready.

## Notes

- `Relay` is intentionally kept as a temporary name.
- Chrome Store, login, docs, support, legal, and checkout links are placeholders (`#`).
- Pricing is described as regional rather than hardcoding unfinished amounts.
- Dark mode is included and stored in `localStorage`.
