# Decanter documentation site

This repository is the static documentation site for the Decanter v8 beta. Read this file before making changes so established product, content, and implementation decisions are preserved.

## Stack and runtime

- Node.js 24; `.nvmrc` is the local source of truth.
- Next.js 16 App Router with React 19.
- Tailwind CSS v4 through `@tailwindcss/postcss`.
- Decanter `8.0.0-beta.0` until the project is manually upgraded.
- Static export through `output: 'export'`; production files are written to `out/`.
- The development and build scripts intentionally use webpack.

Use:

```bash
nvm use
npm run dev
```

Before handing off a batch, run:

```bash
npm run check
git diff --check
```

`npm run check` runs ESLint, TypeScript, and the complete static build.

## Product decisions

- This is a developer-focused documentation site inspired by Tailwind CSS documentation. Document Decanter-only systems and the Tailwind defaults Decanter overrides or extends; do not reproduce the entire Tailwind utility reference.
- Preserve the dark gray/plum gradient as the primary visual motif.
- Keep the Stanford Identity Bar at the top and keep the Global Footer implementation unchanged unless explicitly requested.
- Keep Designer, Examples, Showcase, and FAQ. There is no About page; former About links belong in Showcase.
- Keep the site lightweight, with no intentional motion or editable playground.
- Target WCAG 2.1 AA and test semantics, keyboard behavior, focus, contrast, zoom, and responsive layouts when relevant.
- Google Analytics is production-only. Do not enable it by default for local, branch, or Deploy Preview builds.

## Content architecture

- Do not add MDX, Contentlayer, or a runtime CMS. Write content directly in route components or in TypeScript/JSON data files.
- `data/navigation.ts` is the shared source for the developer sidebar, documentation search entries, and documentation sitemap routes. Add every developer page there.
- Developer routes live under `app/docs/`. Decanter-specific components have one page each under `app/docs/components/`; Forms remains the grouped opt-in form suite at `app/docs/forms/`.
- Group developer pages logically in the sidebar. CSS entry-point and setup guidance belongs under Getting started.
- Every visual code example should include the corresponding rendered result. When both syntaxes are useful, provide HTML and React JSX tabs with equivalent markup.
- Rendered-example labels belong in a separate header above an opaque preview surface.
- Configuration, terminal, and CSS-import snippets do not require a rendered UI preview or HTML/React tabs.

## Decanter source of truth

- The site builds from the installed npm beta and has no live GitHub dependency.
- For package behavior, inspect `node_modules/decanter/package.json`, `node_modules/decanter/docs/`, and `node_modules/decanter/src/css/` before documenting it.
- When manually upgrading Decanter, compare the installed package with the `main` branch of `SU-SWS/decanter`, then update the docs deliberately.
- The full site stylesheet starts with:

```css
@import 'decanter';
@import 'decanter/forms';
```

- Do not add a separate `@import 'tailwindcss'`; the full and minimal Decanter presets already include it.
- Public CSS import patterns are `decanter`, `decanter/minimal`, `decanter/forms`, `decanter/colors`, and `decanter/src/*`. Forms depends on a main preset; colors is the standalone token entry for stock Tailwind projects.

## Code conventions

- Reusable `.tsx` component filenames use lower camelCase and generally match their primary export: `codeBlock.tsx`, `componentExample.tsx`, `copyButton.tsx`, `siteHeader.tsx`, and so on.
- Keep Next.js convention filenames unchanged, including `page.tsx`, `layout.tsx`, `not-found.tsx`, `sitemap.ts`, and `robots.ts`.
- Route directory names remain URL-friendly kebab case.
- Shared documentation UI lives in `components/docs/`; global site chrome lives in `components/site/`.
- `components/docs/codeBlock.tsx` performs lightweight syntax highlighting on the server. `components/docs/codeTabs.tsx` and the copy control are small client islands; do not move the tokenizer into client JavaScript.
- `components/docs/componentExample.tsx` owns the rendered-preview plus code presentation.
- Shared external destinations for Decanter live in `data/decanter.ts`, including GitHub and Figma links.
- Preserve unrelated working-tree changes and keep work in locally runnable batches so the site can be reviewed with `npm run dev` between batches.

## Hosting and redirects

- Netlify serves the static export. Keep `netlify.toml`, security headers, and `public/_redirects` aligned with static trailing-slash routes.
- `next.config.ts` uses `trailingSlash: true` and unoptimized images for export compatibility.
- Do not introduce build-time network requests for documentation content.
