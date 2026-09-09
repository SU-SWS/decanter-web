import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/codeBlock';
import { DocPage } from '@/components/docs/docPage';

export const metadata: Metadata = {
  title: 'Installation',
  description: 'Install Decanter v8 beta with Tailwind CSS v4 in Next.js 16.',
};

export default function InstallationPage() {
  return (
    <DocPage
      description="Install the Decanter v8 beta as a CSS-first Tailwind CSS v4 preset. No JavaScript Tailwind configuration is required."
      eyebrow="Getting started"
      headings={[
        { id: 'requirements', title: 'Requirements' },
        { id: 'install-packages', title: 'Install packages' },
        { id: 'configure-postcss', title: 'Configure PostCSS' },
        { id: 'import-decanter', title: 'Import Decanter' },
        { id: 'font-loading', title: 'Font loading' },
        { id: 'entry-points', title: 'Choose an entry point' },
        { id: 'static-export', title: 'Static export' },
      ]}
      title="Install Decanter"
    >
      <section id="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Tailwind CSS v4.1 or newer.</li>
          <li>A Tailwind v4 integration such as PostCSS, Vite, or the Tailwind CLI.</li>
          <li>Node.js 20 or newer for Decanter itself. This site standardizes on Node.js 24.</li>
        </ul>
      </section>

      <section id="install-packages">
        <h2>Install packages</h2>
        <p>For Next.js, install Tailwind, its PostCSS integration, and the current Decanter beta as development dependencies.</p>
        <CodeBlock code="npm install -D tailwindcss @tailwindcss/postcss decanter@beta" label="Terminal" />
        <Callout title="Beta release" variant="beta">
          <p>Decanter v8 is currently published under npm’s <code>beta</code> tag. Commit your lockfile so deployments use the version you tested.</p>
        </Callout>
      </section>

      <section id="configure-postcss">
        <h2>Configure PostCSS</h2>
        <CodeBlock
          code={`const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;`}
          label="postcss.config.mjs"
          language="javascript"
        />
      </section>

      <section id="import-decanter">
        <h2>Import Decanter</h2>
        <p>Import one main entry in the stylesheet loaded by your application.</p>
        <CodeBlock code="@import 'decanter';" label="app/globals.css" language="css" />
        <p>If the project uses forms, add the opt-in form entry immediately afterward.</p>
        <CodeBlock code={`@import 'decanter';
@import 'decanter/forms';`} label="app/globals.css" language="css" />
        <Callout title="Do not import Tailwind twice" variant="important">
          <p>The <code>decanter</code> and <code>decanter/minimal</code> entries already import <code>tailwindcss</code>. Adding a separate Tailwind import duplicates Preflight and can produce conflicting base styles.</p>
        </Callout>
      </section>

      <section id="font-loading">
        <h2>Font loading</h2>
        <p>Decanter defines font-family stacks but does not bundle or download font files. Load only the families your project uses: Source Sans 3 for the default interface text, Source Serif 4 for serif/editorial treatments, and the Stanford ligature font only when using <code>font-stanford</code> or the <Link href="/docs/components/logo">Stanford logo component</Link>.</p>
        <p>For a simple Next.js setup, add the Google Fonts stylesheet once in your root layout.</p>
        <CodeBlock
          code={`<link href="https://fonts.googleapis.com" rel="preconnect" />
<link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
<link
  href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
  rel="stylesheet"
/>`}
          label="app/layout.tsx"
          language="tsx"
        />
        <p>If the site displays the Stanford wordmark, declare the Stanford font family once. Self-host the file in production when possible; the CDN URL below is the canonical source for the font file.</p>
        <CodeBlock
          code={`@font-face {
  font-family: Stanford;
  src: url('https://www-media.stanford.edu/assets/fonts/stanford.woff2') format('woff2');
  font-display: swap;
  font-style: normal;
  font-weight: 300;
}`}
          label="app/globals.css"
          language="css"
        />
        <Callout title="Fonts are optional">
          <p>Missing font files do not break Decanter utilities; each stack falls back to the next available family. Loading the matching fonts improves brand fidelity and prevents the logo from falling back to a generic serif face.</p>
        </Callout>
        <p>For framework tooling, self-hosting, and the complete family/weight table, see the <Link href="/docs/fonts">Fonts guide</Link>.</p>
      </section>

      <section id="entry-points">
        <h2>Choose an entry point</h2>
        <p>Most new Stanford sites should use <code>decanter</code>. Applications that already own their element styles can use <code>decanter/minimal</code>, while forms and color-only integrations have separate composition rules.</p>
        <p>See the <Link href="/docs/entry-points">complete CSS entry-point guide</Link> before choosing anything other than the default import.</p>
      </section>

      <section id="static-export">
        <h2>Static export with Next.js</h2>
        <p>Decanter has no runtime server dependency and works normally with a Next.js static export.</p>
        <CodeBlock code={`import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;`} label="next.config.ts" language="typescript" />
      </section>
    </DocPage>
  );
}
