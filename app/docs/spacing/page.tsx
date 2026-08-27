import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Spacing',
  description: 'Pixel-readable and em-based spacing tokens in Decanter v8.',
};

export default function SpacingPage() {
  return (
    <DocPage
      description="Decanter’s numeric spacing utilities read like pixels, with additional em-based tokens for type-driven rhythm."
      eyebrow="Foundations"
      headings={[
        { id: 'numeric-scale', title: 'Numeric scale' },
        { id: 'where-it-applies', title: 'Where it applies' },
        { id: 'em-spacing', title: 'Em-based spacing' },
        { id: 'reading-widths', title: 'Reading widths' },
      ]}
      kind="Tailwind overridden"
      title="Spacing"
    >
      <section id="numeric-scale">
        <h2>Numeric scale</h2>
        <p>Decanter sets Tailwind’s spacing unit to <code>0.1rem</code>. Combined with the 62.5% root font size, the number in a utility is its default pixel value.</p>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>CSS value</th><th>Default pixels</th></tr></thead><tbody>
          <tr><td><code>p-16</code></td><td>1.6rem</td><td>16px</td></tr>
          <tr><td><code>mb-24</code></td><td>2.4rem</td><td>24px</td></tr>
          <tr><td><code>w-300</code></td><td>30rem</td><td>300px</td></tr>
          <tr><td><code>gap-10</code></td><td>1rem</td><td>10px</td></tr>
        </tbody></table></div>
        <Callout title="Different from stock Tailwind" variant="important">
          <p>With stock Tailwind, <code>p-4</code> is 16px. With Decanter, <code>p-4</code> is 4px. Translate copied examples according to their intended size.</p>
        </Callout>
      </section>

      <section id="where-it-applies">
        <h2>Where it applies</h2>
        <p>The shared scale drives padding, margin, width, height, min/max dimensions, gap, inset, translation, and other spacing-based utilities.</p>
        <CodeBlock code={`<div className="max-w-900 px-20 py-16">
  <div className="grid gap-24 md:grid-cols-2">…</div>
</div>`} label="React" language="tsx" />
      </section>

      <section id="em-spacing">
        <h2>Em-based spacing</h2>
        <p>For rhythm that should grow with surrounding typography, use <code>01em</code> through <code>1em</code> as the spacing value.</p>
        <div className="table-scroll"><table><thead><tr><th>Classes</th><th>Values</th><th>Example</th></tr></thead><tbody>
          <tr><td><code>*-01em</code> … <code>*-09em</code></td><td>0.1em … 0.9em</td><td><code>mb-06em</code></td></tr>
          <tr><td><code>*-1em</code></td><td>1em</td><td><code>py-1em</code></td></tr>
        </tbody></table></div>
      </section>

      <section id="reading-widths">
        <h2>Reading widths</h2>
        <ul>
          <li><code>max-w-prose</code> uses Tailwind’s 65ch reading measure.</li>
          <li><code>max-w-prose-wide</code> is a Decanter extension at 75ch.</li>
        </ul>
        <p>For spacing that changes across the viewport, use <Link href="/docs/responsive-spacing">responsive spacing utilities</Link>.</p>
      </section>
    </DocPage>
  );
}
