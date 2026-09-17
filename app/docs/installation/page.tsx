import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/Callout';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { DocPage } from '@/components/docs/DocPage';

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
