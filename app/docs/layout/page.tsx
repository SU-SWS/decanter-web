import type { Metadata } from 'next';
import Link from 'next/link';
import { ComponentExample } from '@/components/docs/componentExample';
import { DocPage } from '@/components/docs/docPage';
import { breakpoints } from '@/data/decanter';

export const metadata: Metadata = {
  title: 'Layout and breakpoints',
  description: 'Centered containers, responsive screen margins, gaps, and breakpoints in Decanter v8.',
};

export default function LayoutPage() {
  return (
    <DocPage
      description="Stanford screen margins, wide-screen caps, page-level grid gaps, and breakpoints tuned for Decanter layouts."
      eyebrow="Foundations"
      headings={[
        { id: 'screen-margins', title: 'Screen margins' },
        { id: 'grid-gaps', title: 'Grid gaps' },
        { id: 'breakpoints', title: 'Breakpoints' },
        { id: 'core-layout', title: 'Core layout utilities' },
      ]}
      kind="Tailwind extended"
      title="Layout and breakpoints"
    >
      <section id="screen-margins">
        <h2>Screen margins</h2>
        <p>These tokens drive the <Link href="/docs/components/centered-container">centered container component</Link> and can also be used in custom page-level layout rules.</p>
        <div className="table-scroll"><table><thead><tr><th>Viewport</th><th>Side margin</th></tr></thead><tbody>
          <tr><td>Below 576px</td><td>20px</td></tr>
          <tr><td>sm, 576px+</td><td>30px</td></tr>
          <tr><td>md, 768px+</td><td>50px</td></tr>
          <tr><td>lg, 992px+</td><td>80px</td></tr>
          <tr><td>xl, 1200px+</td><td>100px</td></tr>
          <tr><td>3xl, 1700px+</td><td>1500px content centered</td></tr>
        </tbody></table></div>
      </section>

      <section id="grid-gaps">
        <h2>Grid gaps</h2>
        <p>Decanter adds four page-level gap tokens and a responsive shorthand.</p>
        <div className="table-scroll"><table><thead><tr><th>Token</th><th>Value</th></tr></thead><tbody>
          <tr><td><code>gap-xs</code></td><td>20px</td></tr>
          <tr><td><code>gap-lg</code></td><td>36px</td></tr>
          <tr><td><code>gap-xl</code></td><td>40px</td></tr>
          <tr><td><code>gap-2xl</code></td><td>48px</td></tr>
        </tbody></table></div>
        <p><code>grid-gap</code> applies those values progressively at the base, lg, xl, and 2xl breakpoints.</p>
        <ComponentExample code={`<div className="grid grid-gap md:grid-cols-3">
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</div>`}>
          <div className="grid grid-gap md:grid-cols-3">
            {['First', 'Second', 'Third'].map((label) => <div className="bg-plum p-18 text-center font-semibold text-white" key={label}>{label}</div>)}
          </div>
        </ComponentExample>
      </section>

      <section id="breakpoints">
        <h2>Breakpoints</h2>
        <div className="table-scroll"><table><thead><tr><th>Prefix</th><th>Minimum width</th><th>Tailwind default</th></tr></thead><tbody>
          {breakpoints.map((item) => <tr key={item.name}><td><code>{item.name}:</code></td><td>{item.decanter}</td><td>{item.tailwind}</td></tr>)}
        </tbody></table></div>
        <p>All normal Tailwind forms work with these screens, including <code>max-lg:hidden</code> and responsive arbitrary utilities.</p>
      </section>

      <section id="core-layout">
        <h2>Use Tailwind core for everything else</h2>
        <p>Decanter does not redefine flexbox, CSS Grid, aspect ratio, positioning, container queries, or alignment utilities. Use Tailwind’s core documentation for those systems.</p>
      </section>
    </DocPage>
  );
}
