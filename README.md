# Crystal Trust School Website

The official website for **Crystal Trust School** — a Christian primary school (ECD to Grade 7) in Glaudina, Harare, Zimbabwe.

Built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech stack

- **Vite** — build tooling & dev server
- **React 18** + **TypeScript**
- **Tailwind CSS** — styling (custom blue & silver palette, Fraunces + Inter type)
- **Framer Motion** — animations & page transitions
- **React Router** — multi-page routing
- **React Leaflet** — campus map on the Contact page

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Build the production bundle to `dist`|
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
src/
  components/      shared and section components (Hero, Navigation, Footer, …)
  pages/           top-level routes (Home, About, Academics, Admissions, …)
  index.css        Tailwind imports, fonts, base styles
public/images/     school photography and logo
```
