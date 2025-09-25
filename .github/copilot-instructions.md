# Copilot Instructions for Portfolio Project

## Project Overview
- React single-page application (SPA) built with Vite.
- Main code in `src/`, with feature-based folders under `src/Components/`.
- Static assets (SVGs, images, data) in `src/assets/`.
- Entry: `src/main.jsx` renders `App.jsx`.
- Each major section (About, Contact, Footer, Hero, MyWork, Navbar, Services) is a folder in `src/Components/` with its own `.jsx` and `.css`.

## Key Patterns
- **Component Structure:** Each feature/component has its own folder with `.jsx` and `.css` files. Example: `src/Components/Hero/Hero.jsx` and `Hero.css`.
- **Navigation:** Navbar uses anchor links (`<a href="#section-id">`) for scrolling. Each section must have a matching `id`.
- **Styling:** Plain CSS per component, not CSS-in-JS.
- **Assets:** Import SVGs/images from `src/assets/` directly into components.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview build:** `npm run preview`

## Conventions
- Use functional React components and hooks (`useState`, etc.).
- Keep logic/styles encapsulated per component folder.
- Use semantic section IDs for navigation (e.g., `id="about"`).
- No TypeScript, Redux, or advanced state management—keep state local.

## Integration Points
- No backend/API; all data is static or imported from local JS files.
- No routing (SPA, not using React Router).

## Examples
- To add a section: create a folder in `src/Components/`, add `.jsx`/`.css`, import in `App.jsx`, add nav link in `Navbar.jsx`.
- To update navigation: ensure anchor `href` matches section `id`.
