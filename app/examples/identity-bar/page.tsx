import type { Metadata } from 'next';
import { ComponentExample } from '@/components/docs/componentExample';
import { PageHeader } from '@/components/pageHeader';
import { IdentityBar } from '@/components/site/identityBar';

export const metadata: Metadata = {
  title: 'Identity Bar example',
  description: 'Stanford Identity Bar implementation used by the Decanter documentation site.',
};

export default function IdentityBarExamplePage() {
  return (
    <main id="main-content">
      <PageHeader description="The Stanford wordmark treatment retained at the top of the Decanter documentation site." eyebrow="Examples" title="Identity Bar" />
      <article className="cc rs-py-5">
        <h2>Implementation</h2>
        <ComponentExample code={`<div className="bg-cardinal-red px-20 pt-5 pb-1 sm:px-30 md:px-50 lg:px-30">
  <a className="logo text-20 leading-none text-white hocus:text-white" href="https://www.stanford.edu">
    Stanford University
  </a>
</div>`}>
          <div className="overflow-hidden border border-black-20"><IdentityBar /></div>
        </ComponentExample>
        <p className="max-w-prose-wide">Load the Stanford wordmark font, retain the Stanford destination, and keep the accessible external-link context supplied by the shared component.</p>
      </article>
    </main>
  );
}
