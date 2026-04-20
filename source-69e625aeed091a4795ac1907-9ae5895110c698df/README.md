# AquaFuture — Water Preservation

A school project website about water preservation, built with TanStack Start and deployed on Netlify.

## About

This site explores the global freshwater crisis through data, statistics, and actionable conservation tips. It covers:

- The scale of Earth's freshwater scarcity
- Where humanity's freshwater consumption goes (agriculture, industry, domestic)
- Six practical conservation tips with estimated water savings
- How the water cycle works
- Actions individuals can take at home, school, and in the community

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19 + TanStack Router v1) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS (Google Fonts, animations) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000). Netlify features (edge functions, forms, etc.) can be emulated by running:

```bash
netlify dev
```

which starts at [http://localhost:8888](http://localhost:8888).

## Building for Production

```bash
npm run build
```

Output is written to `dist/client/`.
