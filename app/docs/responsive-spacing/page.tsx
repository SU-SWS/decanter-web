import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/component-example';
import { DocPage } from '@/components/docs/doc-page';
import { responsiveSpacing } from '@/data/decanter';

export const metadata: Metadata = {
  title: 'Responsive spacing',
  description: 'Responsive padding, margin, and gap utilities in Decanter v8.',
};

export default function ResponsiveSpacingPage() {
  return (
    <DocPage
      description="Apply a coordinated XS, md, and 2xl spacing progression with one class instead of repeating breakpoint modifiers."
      eyebrow="Foundations"
      headings={[
        { id: 'syntax', title: 'Syntax' },
        { id: 'steps', title: 'Spacing steps' },
        { id: 'examples', title: 'Examples' },
        { id: 'choosing-a-step', title: 'Choosing a step' },
      ]}
      kind="Decanter only"
      title="Responsive spacing"
    >
      <section id="syntax">
        <h2>Syntax</h2>
        <p>Responsive spacing is available for every side of padding and margin, plus row and column gaps.</p>
        <div className="table-scroll"><table><thead><tr><th>Purpose</th><th>Classes</th></tr></thead><tbody>
          <tr><td>Padding</td><td><code>rs-p-*</code>, <code>rs-px-*</code>, <code>rs-py-*</code>, <code>rs-pt/pr/pb/pl-*</code></td></tr>
          <tr><td>Margin</td><td><code>rs-m-*</code>, <code>rs-mx-*</code>, <code>rs-my-*</code>, <code>rs-mt/mr/mb/ml-*</code></td></tr>
          <tr><td>Gap</td><td><code>rs-gap-*</code>, <code>rs-gap-x-*</code>, <code>rs-gap-y-*</code></td></tr>
        </tbody></table></div>
      </section>

      <section id="steps">
        <h2>Spacing steps</h2>
        <div className="table-scroll"><table><thead><tr><th>Step</th><th>Base</th><th>md (768px)</th><th>2xl (1500px)</th></tr></thead><tbody>
          {responsiveSpacing.map((item) => <tr key={item.step}><td><code>{item.step}</code></td><td>{item.base}</td><td>{item.md}</td><td>{item.xxl}</td></tr>)}
        </tbody></table></div>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <ComponentExample code={`<section className="rs-py-4 bg-plum text-center text-white">
  Vertical padding: 34px → 58px → 61px
</section>

<div className="grid rs-gap-2 md:grid-cols-3">
  Responsive gutters: 30px → 36px → 38px
</div>`}>
          <div className="space-y-20">
            <div className="rs-py-4 bg-plum text-center font-bold text-white">This area uses <code className="text-white">rs-py-4</code></div>
            <div className="grid rs-gap-2 md:grid-cols-3">
              {['First', 'Second', 'Third'].map((label) => <div className="bg-white p-16 text-center shadow-sm" key={label}>{label}</div>)}
            </div>
          </div>
        </ComponentExample>
      </section>

      <section id="choosing-a-step">
        <h2>Choosing a step</h2>
        <ul>
          <li>Steps 0–2 work well inside compact components and grids.</li>
          <li>Steps 3–5 suit ordinary page sections and feature bands.</li>
          <li>Steps 6–10 create large editorial or campaign-scale whitespace.</li>
        </ul>
        <Callout title="Negative steps were removed" variant="important">
          <p>Version 8 no longer includes <code>neg1</code> or <code>neg2</code>. Use a fixed numeric utility when spacing should stay below step 0.</p>
        </Callout>
      </section>
    </DocPage>
  );
}
