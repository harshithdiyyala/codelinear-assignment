# Codelinear Assignment - N7 Landing Page

React + Vite implementation of the provided N7 Figma design.

## Tech Stack

- React
- Vite
- Plain CSS with responsive breakpoints

## Local Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Component Decisions

- `Header` is separate because it owns mobile menu state and dropdown behavior.
- `Button` is separate because CTA styling is reused across hero, sections, cards, and footer.
- `HeroVisual` is separate because the hero image/card composition is visually dense and easier to maintain independently.
- `PhoneMockup` is separate because the same phone frame/image treatment appears in multiple digital-banking sections.
- Page sections remain inside `App.jsx` because each section is used once. Splitting every section into a file would add indirection without meaningful reuse.
- Repeated copy, navigation, solutions, posts, and footer links live in `src/data/content.js` to keep JSX readable and scalable.
