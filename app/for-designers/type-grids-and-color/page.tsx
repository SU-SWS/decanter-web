import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Type, grids, and color',
  description: 'Design guidance for Decanter typography, layout rhythm, and color.',
};

export default function TypeGridColorPage() {
  return (
    <main id="main-content">
      <PageHeader description="Use Decanter’s foundations as a coherent system rather than treating individual tokens as isolated style choices." eyebrow="Designer" title="Type, grids, and color" />
      <article className="cc rs-py-5">
        <div className="grid gap-24 lg:grid-cols-3">
          <section className="border-t-5 border-plum bg-fog-light p-24">
            <p className="mb-8 font-serif type-4 leading-display">Type</p>
            <p className="text-17 leading-normal text-black-70">Source Sans 3 supports interfaces and body content. Source Serif 4 creates editorial contrast. Responsive modular and fluid scales provide intentional hierarchy.</p>
            <Link className="font-bold text-plum-dark" href="/docs/typography">Typography documentation →</Link>
          </section>
          <section className="border-t-5 border-digital-blue bg-fog-light p-24">
            <div aria-hidden="true" className="mb-18 grid grid-cols-3 gap-8"><span className="h-40 bg-digital-blue-light" /><span className="h-40 bg-digital-blue" /><span className="h-40 bg-digital-blue-dark" /></div>
            <h2 className="mb-10 text-26">Grids</h2>
            <p className="text-17 leading-normal text-black-70">Use the centered container, screen margins, and responsive gap systems to align layouts. Flexbox and CSS Grid behavior comes from Tailwind core.</p>
            <Link className="font-bold text-digital-blue-dark" href="/docs/layout">Layout documentation →</Link>
          </section>
          <section className="border-t-5 border-cardinal-red bg-fog-light p-24">
            <div aria-hidden="true" className="mb-18 flex"><span className="h-40 grow bg-cardinal-red" /><span className="h-40 grow bg-plum" /><span className="h-40 grow bg-palo-alto" /><span className="h-40 grow bg-illuminating" /></div>
            <h2 className="mb-10 text-26">Color</h2>
            <p className="text-17 leading-normal text-black-70">Start with the Stanford identity palette, apply color with purpose, and verify every foreground/background pair for WCAG 2.1 contrast.</p>
            <Link className="font-bold text-cardinal-red" href="/docs/colors">Color documentation →</Link>
          </section>
        </div>
        <section className="mt-48 max-w-prose-wide">
          <h2>Design at real breakpoints</h2>
          <p>Provide examples at the points where layout behavior changes—not only at generic desktop and mobile artboard widths. Decanter’s primary breakpoints are 576, 768, 992, 1200, 1500, 1700, and 2000px.</p>
          <p>Also review narrow reflow at 320 CSS pixels and 200% zoom. A responsive composition must preserve reading order, control labels, focus visibility, and meaningful grouping at every size.</p>
        </section>
      </article>
    </main>
  );
}
