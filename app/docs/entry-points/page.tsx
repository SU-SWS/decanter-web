import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/codeBlock';
import { DocPage } from '@/components/docs/docPage';

export const metadata: Metadata = {
  title: 'CSS entry points',
  description: 'Choose and safely compose the public CSS entry points in Decanter v8.',
};

export default function EntryPointsPage() {
  return (
    <DocPage
      description="Decanter exposes full and minimal presets, optional additions, and source-level imports for projects that need finer control."
      eyebrow="Getting started"
      headings={[
        { id: 'comparison', title: 'Entry-point comparison' },
        { id: 'full', title: 'Full preset' },
        { id: 'minimal', title: 'Minimal preset' },
        { id: 'forms', title: 'Forms add-on' },
        { id: 'colors', title: 'Colors only' },
        { id: 'source', title: 'Source-level imports' },
        { id: 'composition', title: 'Composition rules' },
      ]}
      title="CSS entry points"
    >
      <section id="comparison">
        <h2>Entry-point comparison</h2>
        <p>The package has five public CSS import patterns. Only the two presets include Tailwind itself; the other entries either extend a preset, extend stock Tailwind, or expose individual source files.</p>
        <div className="table-scroll">
          <table>
            <caption>Decanter v8 CSS entry points</caption>
            <thead>
              <tr><th>Import</th><th>What it provides</th><th>Includes Tailwind</th><th>Best fit</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row"><code>decanter</code></th><td>Theme, components, utilities, variants, and full element defaults</td><td>Yes</td><td>Most Stanford sites</td></tr>
              <tr><th scope="row"><code>decanter/minimal</code></th><td>The same system with only essential base styles</td><td>Yes</td><td>Applications that own their base layer</td></tr>
              <tr><th scope="row"><code>decanter/forms</code></th><td>Decanter form classes and the Tailwind forms reset</td><td>No</td><td>An optional add-on to either preset</td></tr>
              <tr><th scope="row"><code>decanter/colors</code></th><td>Stanford color theme tokens only</td><td>No</td><td>Otherwise stock Tailwind projects</td></tr>
              <tr><th scope="row"><code>decanter/src/*</code></th><td>Direct access to individual source files</td><td>No</td><td>Advanced à-la-carte composition</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="full">
        <h2>Full preset: <code>decanter</code></h2>
        <CodeBlock code="@import 'decanter';" label="app/globals.css" language="css" />
        <p>This is the default choice. It imports Tailwind CSS, every Decanter theme token, component class, utility, and custom variant, plus Decanter’s full base layer.</p>
        <p>The base layer gives unclassed headings, paragraphs, links, lists, tables, and inline code a coherent Stanford treatment. Utilities are still generated on demand by Tailwind; base rules and component classes are emitted whenever the preset is imported.</p>
        <Callout title="Recommended for new sites">
          <p>Start with the full preset unless the application already has an intentional, tested base layer that Decanter must not replace.</p>
        </Callout>
      </section>

      <section id="minimal">
        <h2>Minimal preset: <code>decanter/minimal</code></h2>
        <CodeBlock code="@import 'decanter/minimal';" label="app/globals.css" language="css" />
        <p>The minimal preset includes Tailwind and the same Decanter theme, components, utilities, and variants as the full preset. It removes Decanter’s opinionated element typography and keeps only shared essentials:</p>
        <ul>
          <li>The 62.5% root font size that powers Decanter’s pixel-readable scales.</li>
          <li>Tailwind v3-compatible default border colors.</li>
          <li>List-marker behavior needed after Preflight.</li>
        </ul>
        <p>Use it when a product, application shell, or another design system already styles headings, body copy, links, lists, and tables. See <Link href="/docs/base-styles">Base styles</Link> for a detailed comparison.</p>
      </section>

      <section id="forms">
        <h2>Forms add-on: <code>decanter/forms</code></h2>
        <CodeBlock code={`@import 'decanter';
@import 'decanter/forms';`} label="app/globals.css" language="css" />
        <p>This opt-in entry bundles the <code>@tailwindcss/forms</code> reset with Decanter’s input, textarea, select, checkbox, radio, label, legend, and fieldset classes.</p>
        <Callout title="Not a standalone entry" variant="important">
          <p>Import forms after either <code>decanter</code> or <code>decanter/minimal</code>. It depends on Decanter theme variables and the 62.5% root font size; importing it by itself produces incomplete and incorrectly scaled controls.</p>
        </Callout>
        <p>Only add it when the project uses the documented <Link href="/docs/forms">Decanter form classes</Link>.</p>
      </section>

      <section id="colors">
        <h2>Colors only: <code>decanter/colors</code></h2>
        <CodeBlock code={`@import 'tailwindcss';
@import 'decanter/colors';`} label="app/globals.css" language="css" />
        <p>This standalone entry adds the Stanford palette as Tailwind <code>@theme</code> tokens. It does not include Tailwind, change the spacing scale or breakpoints, add components, or apply element styles.</p>
        <p>Use it when an otherwise stock Tailwind project needs utilities such as <code>bg-cardinal-red</code> or <code>text-digital-blue</code> without adopting the rest of Decanter. Unused color utilities are not generated.</p>
      </section>

      <section id="source">
        <h2>Source-level imports: <code>decanter/src/*</code></h2>
        <p>The source wildcard exposes individual files under the package’s <code>src</code> directory. It can be used to assemble a deliberately smaller custom layer.</p>
        <CodeBlock
          code={`@import 'tailwindcss';
@import 'decanter/src/css/theme/font-family.css';
@import 'decanter/src/css/utilities/modular-type.css';`}
          label="app/globals.css"
          language="css"
        />
        <p>Importing <code>font-family.css</code> exposes Decanter’s font-family tokens, but it does not load any font files. Add Source Sans 3, Source Serif 4, and the Stanford wordmark font separately with the <Link href="/docs/fonts">font-loading snippets</Link> when those stacks are used.</p>
        <Callout title="Advanced and dependency-sensitive" variant="important">
          <p>Individual source files do not resolve their related theme values, base conventions, or component dependencies for you. Prefer a documented preset or the color-only entry unless the project is prepared to audit those dependencies whenever Decanter is updated.</p>
        </Callout>
        <p>The package also exports <code>decanter/package.json</code> for build tooling and metadata inspection. It is not a stylesheet entry point.</p>
      </section>

      <section id="composition">
        <h2>Composition rules</h2>
        <ol>
          <li>Import exactly one main preset: <code>decanter</code> or <code>decanter/minimal</code>.</li>
          <li>Do not add a separate <code>@import &apos;tailwindcss&apos;</code> beside either preset. Both already include Tailwind, and duplicate Preflight output is not removed.</li>
          <li>Place <code>decanter/forms</code> after the selected preset.</li>
          <li>Pair <code>decanter/colors</code> with your own Tailwind import when colors are the only Decanter feature you need.</li>
          <li>Treat <code>decanter/src/*</code> imports as a custom integration whose dependencies you own.</li>
          <li>Place project-specific theme additions and component styles after the Decanter imports so their intent is explicit.</li>
        </ol>
      </section>
    </DocPage>
  );
}
