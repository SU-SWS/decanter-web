import type { Metadata } from 'next';
import Link from 'next/link';
import { ComponentExample } from '@/components/docs/componentExample';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Linked story card example',
  description: 'A fully clickable card pattern using the Decanter stretched-link utility.',
};

export default function LinkedStoryCardPage() {
  return (
    <main id="main-content">
      <PageHeader description="A card with one clear destination. The entire card is clickable without nested interactive controls." eyebrow="Examples" title="Linked story card" />
      <article className="cc rs-py-5">
        <Link className="mb-24 inline-block text-18 font-bold text-cardinal-red no-underline hocus:underline" href="/examples">← Back to examples</Link>
        <h2 id="linked-story-card">Implementation</h2>
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
      </article>
    </main>
  );
}
