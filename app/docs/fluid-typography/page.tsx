import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/component-example';
import { DocPage } from '@/components/docs/doc-page';
import { fluidTypeScale } from '@/data/decanter';

export const metadata: Metadata = {
  title: 'Fluid typography',
  description: 'Viewport-clamped fluid typography utilities in Decanter v8.',
};

export default function FluidTypographyPage() {
  return (
    <DocPage
      description="Viewport-clamped type that scales smoothly between 360px and 1500px without jumping at breakpoints."
      eyebrow="Typography"
      headings={[
        { id: 'when-to-use', title: 'When to use it' },
        { id: 'scale', title: 'The scale' },
        { id: 'example', title: 'Example' },
        { id: 'fluid-vs-modular', title: 'Fluid vs modular' },
      ]}
      kind="Decanter only"
      title="Fluid typography"
    >
      <section id="when-to-use">
        <h2>When to use it</h2>
        <p>Use <code>fluid-type-*</code> for hero banners, feature headings, and wide horizontal components where breakpoint jumps feel abrupt. The minimum and maximum sizes align with Decanter’s responsive type system.</p>
        <Callout title="Use higher steps selectively" variant="important">
          <p>Steps 7 through 10 become extremely large at wide viewports. Reserve them for short display text and test wrapping at browser zoom levels.</p>
        </Callout>
      </section>

      <section id="scale">
        <h2>The scale</h2>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Clamp value</th></tr></thead><tbody>
          {fluidTypeScale.map((item) => <tr key={item.step}><td><code>{item.step}</code></td><td><code>{item.value}</code></td></tr>)}
        </tbody></table></div>
      </section>

      <section id="example">
        <h2>Example</h2>
        <ComponentExample
          code={'<h1 className="fluid-type-6 text-white">\n  Research that changes the world.\n</h1>'}
          previewClassName="!bg-plum-dark !bg-none text-white"
          previewTone="dark"
        >
          <p className="fluid-type-6 mb-0 max-w-1000 leading-tight tracking-[-0.025em] text-white">Research that changes the world.</p>
        </ComponentExample>
      </section>

      <section id="fluid-vs-modular">
        <h2>Fluid vs modular</h2>
        <div className="table-scroll"><table><thead><tr><th>System</th><th>Units</th><th>Scaling</th><th>Best for</th></tr></thead><tbody>
          <tr><td><code>type-*</code></td><td>em</td><td>Steps at md and lg</td><td>Component hierarchies that respond to a parent base size</td></tr>
          <tr><td><code>fluid-type-*</code></td><td>rem + vw</td><td>Continuous from 360px to 1500px</td><td>Viewport-driven display text</td></tr>
        </tbody></table></div>
      </section>
    </DocPage>
  );
}
