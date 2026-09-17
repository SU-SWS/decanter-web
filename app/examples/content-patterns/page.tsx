import type { Metadata } from 'next';
import Link from 'next/link';
import { ComponentExample } from '@/components/docs/ComponentExample';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Content pattern examples',
  description: 'Focused hero, notice, and card examples built with Decanter v8.',
};

export default function ContentPatternsPage() {
  return (
    <main id="main-content">
      <PageHeader description="Three composable examples that use Decanter’s type, spacing, color, container, and interaction systems." eyebrow="Examples" title="Content patterns" />
      <article className="cc rs-py-5">
        <Link className="mb-24 inline-block text-18 font-bold text-cardinal-red no-underline hocus:underline" href="/examples">← Back to examples</Link>
        <section className="mb-56">
          <h2>Editorial hero</h2>
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
        </section>

        <section className="mb-56">
          <h2>Important notice</h2>
          <ComponentExample code={`<aside className="border-l-5 border-cardinal-red bg-digital-red-xlight/10 px-20 py-16">
  <h2 className="text-21">Application deadline updated</h2>
  <p>Applications now close Friday at 5:00 p.m. Pacific time.</p>
</aside>`}>
            <aside className="border-l-5 border-cardinal-red bg-digital-red-xlight/10 px-20 py-16">
              <h3 className="mb-6 text-21">Application deadline updated</h3>
              <p className="mb-0 text-16 leading-normal text-black-80">Applications now close Friday at 5:00 p.m. Pacific time. Previously submitted applications are not affected.</p>
            </aside>
          </ComponentExample>
        </section>

        <section id="linked-story-card">
          <h2>Linked story card</h2>
          <ComponentExample code={`<article className="relative border border-black-20 p-24">
  <p className="text-cardinal-red">Campus</p>
  <h2>
    <a className="stretched-link" href="/story">A simple card with one clear destination</a>
  </h2>
  <p className="card-paragraph">The whole card is clickable.</p>
</article>`}>
            <article className="relative max-w-600 border border-black-20 bg-white p-24 shadow-sm">
              <p className="mb-8 text-12 font-bold uppercase tracking-[0.12em] text-cardinal-red">Campus</p>
              <h3 className="mb-10 text-25"><a className="stretched-link text-black no-underline hocus:text-cardinal-red hocus:underline" href="#linked-story-card">A simple card with one clear destination</a></h3>
              <p className="card-paragraph mb-0 text-black-70">The entire card is clickable without adding nested buttons or competing interactive controls.</p>
            </article>
          </ComponentExample>
        </section>
      </article>
    </main>
  );
}
