import type { Metadata } from 'next';
import Link from 'next/link';
import { ComponentExample } from '@/components/docs/componentExample';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Editorial hero example',
  description: 'A display hero pattern built with Decanter’s type, spacing, and color systems.',
};

export default function EditorialHeroPage() {
  return (
    <main id="main-content">
      <PageHeader description="A display hero that pairs an eyebrow, large display type, and a short supporting statement." eyebrow="Examples" title="Editorial hero" />
      <article className="cc rs-py-5">
        <Link className="mb-24 inline-block text-18 font-bold text-cardinal-red no-underline hocus:underline" href="/examples">← Back to examples</Link>
        <h2>Implementation</h2>
        <ComponentExample code={`<section className="bg-plum-dark text-white">
  <div className="cc rs-py-5">
    <p className="text-illuminating">Research</p>
    <h1 className="fluid-type-5 text-white">Ideas that move beyond the expected.</h1>
    <p className="max-w-700 text-white/80">…</p>
  </div>
</section>`}>
          <div className="bg-plum-dark text-white">
            <div className="cc rs-py-5">
              <p className="mb-10 text-13 font-bold uppercase tracking-[0.12em] text-illuminating">Research</p>
              <h3 className="mb-16 max-w-900 fluid-type-5 text-white">Ideas that move beyond the expected.</h3>
              <p className="mb-0 max-w-700 text-19 leading-normal text-white/80">A short supporting statement gives the display type enough context without competing with it.</p>
            </div>
          </div>
        </ComponentExample>
      </article>
    </main>
  );
}
