import type { Metadata } from 'next';
import Link from 'next/link';
import { ComponentExample } from '@/components/docs/componentExample';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Important notice example',
  description: 'An accessible callout pattern for time-sensitive updates built with Decanter.',
};

export default function ImportantNoticePage() {
  return (
    <main id="main-content">
      <PageHeader description="A bordered callout that draws attention to a time-sensitive update without relying on color alone." eyebrow="Examples" title="Important notice" />
      <article className="cc rs-py-5">
        <Link className="mb-24 inline-block text-18 font-bold text-cardinal-red no-underline hocus:underline" href="/examples">← Back to examples</Link>
        <h2>Implementation</h2>
        <ComponentExample code={`<aside className="border-l-5 border-cardinal-red bg-digital-red-xlight/10 px-20 py-16">
  <h2 className="text-21">Application deadline updated</h2>
  <p>Applications now close Friday at 5:00 p.m. Pacific time.</p>
</aside>`}>
          <aside className="border-l-5 border-cardinal-red bg-digital-red-xlight/10 px-20 py-16">
            <h3 className="mb-6 text-21">Application deadline updated</h3>
            <p className="mb-0 text-16 leading-normal text-black-80">Applications now close Friday at 5:00 p.m. Pacific time. Previously submitted applications are not affected.</p>
          </aside>
        </ComponentExample>
      </article>
    </main>
  );
}
