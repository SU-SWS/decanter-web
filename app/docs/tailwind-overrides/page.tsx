import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocPage } from '@/components/docs/doc-page';
import { breakpoints } from '@/data/decanter';

export const metadata: Metadata = {
  title: 'Tailwind overrides',
  description: 'Core Tailwind CSS defaults overridden or extended by Decanter v8.',
};

export default function TailwindOverridesPage() {
  return (
    <DocPage
      description="Decanter keeps Tailwind’s utility model, but changes a small set of foundational defaults to match Stanford’s design system."
      eyebrow="Getting started"
      headings={[
        { id: 'root-size', title: 'Root font size' },
        { id: 'spacing', title: 'Spacing scale' },
        { id: 'breakpoints', title: 'Breakpoints' },
        { id: 'typography', title: 'Typography defaults' },
        { id: 'base-styles', title: 'Base styles' },
      ]}
      kind="Tailwind overridden"
      title="Tailwind defaults Decanter changes"
    >
      <section id="root-size">
        <h2>Root font size</h2>
        <p>Decanter sets <code>html {'{ font-size: 62.5% }'}</code>, so one rem is normally 10px. This makes rem-based class numbers easy to read.</p>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Computed value</th><th>Default pixels</th></tr></thead><tbody>
          <tr><td><code>text-18</code></td><td>1.8rem</td><td>18px</td></tr>
          <tr><td><code>p-16</code></td><td>1.6rem</td><td>16px</td></tr>
          <tr><td><code>w-300</code></td><td>30rem</td><td>300px</td></tr>
        </tbody></table></div>
      </section>

      <section id="spacing">
        <h2>Spacing scale</h2>
        <p>Decanter replaces Tailwind’s <code>--spacing</code> value with <code>0.1rem</code>. The class number therefore reads as pixels at the default browser font size.</p>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Tailwind core</th><th>With Decanter</th></tr></thead><tbody>
          <tr><td><code>p-4</code></td><td>1rem / 16px</td><td>0.4rem / 4px</td></tr>
          <tr><td><code>p-16</code></td><td>4rem / 64px</td><td>1.6rem / 16px</td></tr>
          <tr><td><code>gap-24</code></td><td>6rem / 96px</td><td>2.4rem / 24px</td></tr>
        </tbody></table></div>
        <Callout title="Check copied Tailwind examples" variant="important">
          <p>Stock Tailwind markup often relies on classes such as <code>p-4</code> and <code>gap-6</code>. Those values are much smaller under Decanter, so translate the intended pixel value before copying an example.</p>
        </Callout>
      </section>

      <section id="breakpoints">
        <h2>Breakpoints</h2>
        <div className="table-scroll"><table><thead><tr><th>Prefix</th><th>Decanter</th><th>Tailwind default</th></tr></thead><tbody>
          {breakpoints.map((item) => <tr key={item.name}><td><code>{item.name}:</code></td><td>{item.decanter}</td><td>{item.tailwind}</td></tr>)}
        </tbody></table></div>
      </section>

      <section id="typography">
        <h2>Typography defaults</h2>
        <ul>
          <li><code>font-sans</code> begins with Source Sans 3.</li>
          <li><code>font-serif</code> begins with Source Serif 4.</li>
          <li><code>font-stanford</code> provides the Stanford wordmark stack.</li>
          <li>The leading scale uses Decanter values from <code>leading-half</code> through <code>leading-normal</code>.</li>
          <li>Body copy is responsive: 18px, 19px at <code>md</code>, and 21px at <code>2xl</code>.</li>
        </ul>
        <p><Link href="/docs/typography">See the complete typography reference.</Link></p>
      </section>

      <section id="base-styles">
        <h2>Base styles</h2>
        <p>The full entry adds opinions for headings, paragraphs, links, lists, tables, captions, and code elements. Choose the minimal entry when those element styles should remain application-owned.</p>
        <CodeBlock code="@import 'decanter/minimal';" label="Use minimal base styles" language="css" />
        <p><Link href="/docs/base-styles">Compare the full and minimal entries.</Link></p>
      </section>
    </DocPage>
  );
}
