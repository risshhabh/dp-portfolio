# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start Vite dev server
npm run build        # production build
npm run preview      # preview production build locally
npm run lint         # run ESLint
npm run fetch-medium # run Node script to fetch Medium articles (outputs to public/)
```

No test suite is configured.

## Architecture

React 19 SPA built with Vite. React Router v7 handles all routing; `App.jsx` is the single entry point that owns the light/dark theme state (persisted to `localStorage`, applied via `data-theme` on `<html>`).

**Routing structure:**
- `/` and `/about` → `About.jsx` — bio and embedded resume PDF
- `/projects` → `Projects.jsx` — photography portfolio index using `ProjectCard`
- `/portfolio/nature|city|trails|website` → individual `Portfolio*.jsx` pages — each is a self-contained photo grid with a hardcoded `photos` array

**Two-navbar layout:** `Navbar.jsx` renders two `<nav>` elements stacked — a top bar with profile info and social icons, and a bottom bar with page links. Nav link text uses a hover letter-scramble effect via `src/utils/textScramble.js` (credit: Hyperplexed on CodePen).

**Styling:** CSS custom properties defined in `src/styles/index.css` drive both light and dark themes. All color and font tokens are in `:root` and `[data-theme="dark"]` — when changing visual design, edit tokens there rather than individual component CSS files. Fonts: Inter (body), IBM Plex Mono (mono), Libre Baskerville (h1/serif).

**`ProjectCard` component** accepts `{ title, subtitle, description, tags, githubUrl, liveUrl, liveLabel, imageUrl }`. It auto-detects internal vs. external links by checking whether `liveUrl` starts with `/`.

**Static assets** live in `public/` — profile pic, social SVG icons, portfolio images, and the resume PDF. Portfolio images are referenced as `/portfolio/<name>.jpg` paths (served from `public/portfolio/`).

**`fetch-medium` utility** (`src/utils/fetch-medium.cjs`) is a standalone CommonJS Node script — it runs outside Vite and should stay `.cjs` to avoid ESM conflicts.
