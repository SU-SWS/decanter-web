import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/componentExample';
import { DocPage } from '@/components/docs/docPage';
import { modularTypeScale } from '@/data/decanter';

export const metadata: Metadata = {
  title: 'Modular typography',
  description: 'Responsive modular type utilities in Decanter v8.',
};

export default function ModularTypographyPage() {
  return (
    <DocPage
      description="Em-based type steps that grow at Decanter’s md and lg breakpoints while tightening letter spacing as the type gets larger."
      eyebrow="Typography"
      headings={[
        { id: 'when-to-use', title: 'When to use it' },
        { id: 'scale', title: 'The scale' },
        { id: 'examples', title: 'Examples' },
        { id: 'container-sizing', title: 'Container sizing' },
      ]}
      kind="Decanter only"
      title="Modular typography"
    >
      <section id="when-to-use">
        <h2>When to use it</h2>
        <p>Use <code>type-0</code> through <code>type-10</code> when text should scale in relation to its container. The steps are well suited to headings, card titles, editorial displays, and component-level type hierarchies.</p>
        <Callout title="Em-based scale">
          <p>Because the utilities use em units, a <code>basefont-*</code> class on a parent changes the whole hierarchy proportionally.</p>
        </Callout>
        <Callout title="Load typefaces before judging the scale">
          <p>The <code>type-*</code> utilities control size, line-height, and tracking; they do not load Source Sans 3 or Source Serif 4. Add the optional font-loading snippets from <Link href="/docs/installation#font-loading">Installation</Link> before final visual review.</p>
        </Callout>
      </section>

      <section id="scale">
        <h2>The scale</h2>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Base</th><th>md</th><th>lg</th><th>Tracking</th></tr></thead><tbody>
          {modularTypeScale.map((item) => <tr key={item.step}><td><code>{item.step}</code></td><td>{item.base}</td><td>{item.md}</td><td>{item.lg}</td><td>{item.tracking}</td></tr>)}
        </tbody></table></div>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <ComponentExample code={`<h2 className="type-5">Promoted heading</h2>
<p className="types type-3">Heading treatment on a paragraph</p>`}>
          <div>
            <h2 className="type-5 mb-16">Promoted heading</h2>
            <p className="types type-3 mb-0">Heading treatment on a paragraph</p>
          </div>
        </ComponentExample>
        <div className="my-24 overflow-hidden border border-black-20 bg-fog-light p-20">
          <p className="mb-16 text-11 font-bold uppercase tracking-[0.14em] text-black-60">Scale preview</p>
          {modularTypeScale.slice(0, 7).map((item) => <p className={`${item.step} mb-12 leading-display`} key={item.step}><span className="mr-10 text-12 font-normal text-black-60">{item.step}</span> Stanford</p>)}
        </div>
      </section>

      <section id="container-sizing">
        <h2>Container sizing</h2>
        <p>The same modular step can be made larger or smaller by changing the container’s base size.</p>
        <ComponentExample code={`<section className="basefont-19">
  <h2 className="type-4">Compact hierarchy</h2>
</section>

<section className="basefont-23">
  <h2 className="type-4">Generous hierarchy</h2>
</section>`}>
          <div className="grid gap-24 lg:grid-cols-2">
            <section className="basefont-19 border border-black-20 bg-white p-18"><h2 className="type-4 mb-0">Compact hierarchy</h2></section>
            <section className="basefont-23 border border-black-20 bg-white p-18"><h2 className="type-4 mb-0">Generous hierarchy</h2></section>
          </div>
        </ComponentExample>
      </section>
    </DocPage>
  );
}
