import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/codeBlock';
import { DocPage } from '@/components/docs/docPage';

export const metadata: Metadata = {
  title: 'Fonts',
  description: 'Load Source Sans 3, Source Serif 4, and the Stanford wordmark font for Decanter v8.',
};

export default function FontsPage() {
  return (
    <DocPage
      description="Decanter defines Stanford font stacks as CSS theme tokens, but each project chooses how and when to load the actual font files."
      eyebrow="Foundations"
      headings={[
        { id: 'families-and-weights', title: 'Families and weights' },
        { id: 'html-link', title: 'HTML link' },
        { id: 'next-font', title: 'Next.js next/font' },
        { id: 'stanford-wordmark', title: 'Stanford wordmark' },
        { id: 'self-hosting', title: 'Self-hosting' },
      ]}
      kind="Tailwind overridden"
      title="Fonts"
    >
      <section id="families-and-weights">
        <h2>Families and weights</h2>
        <p>Load only the families used by the site. Decanter’s CSS works without these files because every stack includes fallbacks, but loading the matching typefaces preserves Stanford typography and prevents layout shifts during visual review.</p>
        <div className="table-scroll"><table><thead><tr><th>Family</th><th>Used by</th><th>Recommended weights</th><th>Source</th></tr></thead><tbody>
          <tr><td>Source Sans 3</td><td><code>font-sans</code>, default body text, interface text</td><td>400, 600, 700, plus italics when content uses emphasis</td><td>Google Fonts or self-hosted files</td></tr>
          <tr><td>Source Serif 4</td><td><code>font-serif</code>, editorial headings, display text</td><td>400, 600, 700, plus italics when content uses emphasis</td><td>Google Fonts or self-hosted files</td></tr>
          <tr><td>Stanford</td><td><code>font-stanford</code> and the <Link href="/docs/components/logo">logo component</Link></td><td>300</td><td>Stanford media CDN or self-hosted <code>woff2</code></td></tr>
        </tbody></table></div>
        <Callout title="Fonts are referenced, not bundled">
          <p>Decanter provides font-family utilities and theme tokens, but it does not download font files. The utility classes resolve to the first available family in each stack, so missing files fall back gracefully while reducing brand fidelity.</p>
        </Callout>
      </section>

      <section id="html-link">
        <h2>Load Google Fonts with an HTML link</h2>
        <p>For many static sites, a single stylesheet link in the document head is the simplest setup. Put it once in the root layout or HTML template, not in individual pages or components.</p>
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
      </section>

      <section id="next-font">
        <h2>Load fonts with Next.js <code>next/font</code></h2>
        <p>Next.js can fetch Google Fonts at build time and expose them through CSS variables. Map those variables back to Decanter’s font tokens so existing utilities such as <code>font-sans</code> and <code>font-serif</code> keep working.</p>
        <CodeBlock
          code={`import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';

const sourceSans = Source_Sans_3({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

const sourceSerif = Source_Serif_4({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-source-serif-4',
});

const fontVariables = [sourceSans.variable, sourceSerif.variable].join(' ');

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={fontVariables} lang="en">
      <body>{children}</body>
    </html>
  );
}`}
          label="app/layout.tsx"
          language="tsx"
        />
        <CodeBlock
          code={`@theme inline {
  --font-sans: var(--font-source-sans-3);
  --font-serif: var(--font-source-serif-4);
}`}
          label="app/globals.css"
          language="css"
        />
      </section>

      <section id="stanford-wordmark">
        <h2>Load the Stanford wordmark font</h2>
        <p>The Stanford ligature font is separate from Source Sans 3 and Source Serif 4. Add it only when the site uses <code>font-stanford</code>, the <Link href="/docs/components/logo">Stanford logo component</Link>, or an identity treatment that depends on the official wordmark ligature.</p>
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
      </section>

      <section id="self-hosting">
        <h2>Self-host font files</h2>
        <p>Production sites can self-host <code>woff2</code> files to reduce third-party requests and keep font delivery under the same cache policy as the application. Place the files in a public assets directory, declare one <code>@font-face</code> per family/weight/style combination, and keep <code>font-display: swap</code> unless the project has a tested reason to choose a different loading behavior.</p>
        <CodeBlock
          code={`@font-face {
  font-family: 'Source Sans 3';
  src: url('/fonts/source-sans-3-regular.woff2') format('woff2');
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: Stanford;
  src: url('/fonts/stanford.woff2') format('woff2');
  font-display: swap;
  font-style: normal;
  font-weight: 300;
}`}
          label="app/globals.css"
          language="css"
        />
        <p>After loading fonts, return to the <Link href="/docs/typography">Typography</Link>, <Link href="/docs/modular-typography">Modular typography</Link>, and <Link href="/docs/fluid-typography">Fluid typography</Link> pages to review hierarchy, wrapping, and line length with the final typefaces.</p>
      </section>
    </DocPage>
  );
}
