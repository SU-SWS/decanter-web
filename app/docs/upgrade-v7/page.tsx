import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Upgrade from Decanter v7',
  description: 'Breaking changes and class replacements for upgrading from Decanter v7 to v8.',
};

const replacements = [
  ['JavaScript preset', "@import 'decanter'"],
  ['font-regular', 'font-normal'],
  ['link-regular', 'link-normal'],
  ['foggy / foggy-light / foggy-dark', 'fog / fog-light / fog-dark'],
  ['break-words with Decanter behavior', 'wrap-anywhere'],
  ['text-m0 … text-m9', 'type-0 … type-9'],
  ['text-shadow / -md / -lg', 'text-shadow-legacy / -md / -lg'],
  ['embed-container', 'aspect-video plus size-full on the child'],
  ['aspect-w-* / aspect-h-*', 'Core aspect-* utilities'],
  ['children:', '*:'],
] as const;

export default function UpgradeV7Page() {
  return (
    <DocPage
      description="Version 8 moves Decanter from a Tailwind v3 JavaScript preset to a CSS-first Tailwind v4 package. Audit these changes before switching imports."
      eyebrow="Migration"
      headings={[
        { id: 'before-starting', title: 'Before starting' },
        { id: 'css-first', title: 'Move to CSS-first' },
        { id: 'forms', title: 'Opt in to forms' },
        { id: 'class-changes', title: 'Class changes' },
        { id: 'removed', title: 'Removed features' },
      ]}
      title="Upgrade from Decanter v7"
    >
      <section id="before-starting">
        <h2>Before starting</h2>
        <ol>
          <li>Upgrade the project to Tailwind CSS v4 using Tailwind’s official upgrade guidance.</li>
          <li>Commit the working v7 state so visual regressions are easy to compare.</li>
          <li>Search templates for the removed and renamed classes listed below.</li>
          <li>Test every major page at Decanter’s updated breakpoints.</li>
        </ol>
      </section>

      <section id="css-first">
        <h2>Move from a preset to CSS</h2>
        <p>Remove Decanter from <code>tailwind.config.js</code>. Version 8 no longer ships a JavaScript preset or its TypeScript declarations.</p>
        <CodeBlock code={`/* Delete this v7 configuration */
module.exports = {
  presets: [require('decanter')],
};`} label="tailwind.config.js" language="javascript" />
        <CodeBlock code="@import 'decanter';" label="app/globals.css" language="css" />
        <p>Move any project-specific <code>theme.extend</code> values into Tailwind v4 <code>@theme</code> blocks.</p>
      </section>

      <section id="forms">
        <h2>Opt in to form styles</h2>
        <p>Form classes and the <code>@tailwindcss/forms</code> reset moved to a separate entry point.</p>
        <CodeBlock code={`@import 'decanter';
@import 'decanter/forms';`} label="Only for projects with forms" language="css" />
      </section>

      <section id="class-changes">
        <h2>Class changes</h2>
        <div className="table-scroll"><table><thead><tr><th>v7</th><th>v8</th></tr></thead><tbody>
          {replacements.map(([before, after]) => <tr key={before}><td><code>{before}</code></td><td><code>{after}</code></td></tr>)}
        </tbody></table></div>
        <Callout title="Modular type is intentionally responsive">
          <p><code>type-N</code> matches the old <code>text-mN</code> scale only at large screens. It is deliberately smaller on mobile and adds proportional letter spacing. Use an arbitrary em value if an exact legacy rendering must be preserved.</p>
        </Callout>
      </section>

      <section id="removed">
        <h2>Removed features</h2>
        <ul>
          <li><code>font-slab</code> is gone. Define a project font if a slab family is required.</li>
          <li><code>font-mono</code> is no longer overridden and uses Tailwind’s system monospace stack.</li>
          <li>Social platform color tokens are gone; define current brand colors locally.</li>
          <li>Negative responsive spacing steps are gone.</li>
          <li><code>credits</code> was removed because small italic text is not recommended for accessibility.</li>
          <li>The aspect-ratio plugin and children variants were replaced by Tailwind core features.</li>
        </ul>
      </section>
    </DocPage>
  );
}
