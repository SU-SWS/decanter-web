import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocPage } from '@/components/docs/doc-page';
import { colorGroups } from '@/data/decanter';

export const metadata: Metadata = {
  title: 'Colors',
  description: 'Stanford identity color tokens provided by Decanter v8.',
};

export default function ColorsPage() {
  return (
    <DocPage
      description="The complete Stanford identity palette is available as Tailwind theme tokens, CSS variables, and every color-driven utility."
      eyebrow="Foundations"
      headings={[
        { id: 'using-colors', title: 'Using colors' },
        { id: 'accessibility', title: 'Accessibility' },
        ...colorGroups.map((group) => ({ id: group.name.toLowerCase().replaceAll(' ', '-'), title: group.name })),
      ]}
      kind="Decanter only"
      title="Stanford colors"
    >
      <section id="using-colors">
        <h2>Using colors</h2>
        <p>Each token works with background, text, border, outline, gradient, fill, stroke, and other Tailwind color utilities.</p>
        <CodeBlock code={`<div className="bg-cardinal-red text-white">…</div>
<p className="border-b-2 border-fog-dark text-digital-blue">…</p>
<div className="bg-linear-to-r from-black to-plum">…</div>`} label="React" language="tsx" />
        <p>The same values are exposed as CSS variables such as <code>var(--color-cardinal-red)</code>. Projects that need only the palette can combine <code>decanter/colors</code> with their own Tailwind import.</p>
      </section>

      <section id="accessibility">
        <h2>Accessibility</h2>
        <p>Color tokens do not guarantee an accessible pairing. Test foreground and background combinations for WCAG 2.1 AA contrast: 4.5:1 for normal text and 3:1 for large text.</p>
        <Callout title="Useful starting point">
          <p>White text generally works on the dark values, Cardinal Red, Digital Red, Digital Blue, Digital Green, Plum, Brick, Archway, Palo Alto, and Lagunita. Use black text on light values and verify every mid-tone pairing.</p>
        </Callout>
      </section>

      {colorGroups.map((group) => {
        const id = group.name.toLowerCase().replaceAll(' ', '-');
        return (
          <section id={id} key={group.name}>
            <h2>{group.name}</h2>
            <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
              {group.colors.map(([token, hex]) => (
                <div className="overflow-hidden border border-black-20 bg-white" key={token}>
                  <div aria-hidden="true" className="h-72" style={{ backgroundColor: hex }} />
                  <div className="flex items-start justify-between gap-10 px-12 py-10">
                    <code className="text-13">{token}</code>
                    <span className="text-12 font-semibold uppercase text-black-60">{hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </DocPage>
  );
}
