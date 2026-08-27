# Decanter documentation site

Developer documentation, design guidance, examples, and showcases for Decanter v8.

## Stack

- Node.js 24
- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Decanter 8 beta
- Static HTML export hosted on Netlify

Content is written directly in React components and TypeScript data files. This project does not use MDX, Contentlayer, or a runtime CMS.

## Local development

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The development and production scripts use Next.js with webpack because the Tailwind PostCSS worker is more predictable for this static build than Turbopack.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` writes the static site to `out/`.

## Project structure

- `app/` — routes and page content
- `components/` — shared site chrome, documentation UI, search, and examples
- `data/` — navigation, search metadata, Decanter reference values, FAQ, and showcase entries
- `public/` — static assets and Netlify redirects

## Decanter CSS

The site imports the full Decanter entry and opt-in forms entry in `app/globals.css`:

```css
@import 'decanter';
@import 'decanter/forms';
```

Do not add a separate `@import 'tailwindcss'`; Decanter already includes it.

## Analytics

Google Analytics is included only when Netlify sets `CONTEXT=production`, or when `NEXT_PUBLIC_ENABLE_ANALYTICS=true` is supplied explicitly. Deploy Previews and branch deploys do not enable analytics by default.
