import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalIcon } from '@/components/icons';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Stanford identity and brand compliance',
  description: 'How Decanter relates to Stanford identity guidance.',
};

export default function IdentityGuidancePage() {
  return (
    <main id="main-content">
      <PageHeader description="Decanter implements common digital foundations, while the Stanford identity site remains the authority for brand policy and usage." eyebrow="Designer" title="Stanford identity and brand compliance" />
      <article className="cc grid gap-40 rs-py-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="wysiwyg max-w-prose-wide">
          <h2>What Decanter provides</h2>
          <ul>
            <li>Stanford identity color tokens and documented contrast guidance.</li>
            <li>Source Sans 3, Source Serif 4, and Stanford wordmark font stacks.</li>
            <li>Responsive page margins, typography, spacing, and basic identity components.</li>
            <li>A shared implementation vocabulary for Stanford digital products.</li>
          </ul>
          <p>Decanter defines those font stacks in CSS, but developers still need to load the font files. Include <Link href="/docs/installation#font-loading">font-loading requirements</Link> in implementation handoff when a design relies on Source Sans 3, Source Serif 4, or the Stanford wordmark ligature font.</p>
          <h2>What it does not replace</h2>
          <p>Decanter does not grant trademark permission, determine organization naming, approve logo lockups, or replace the identity website’s guidance. Product teams remain responsible for reviewing current policy and securing any required approvals.</p>
          <h2>Identity elements</h2>
          <p>Use the Stanford Identity Bar and Global Footer consistently on Stanford properties. Preserve their text, destinations, hierarchy, and accessible link treatment when integrating them into a product shell.</p>
        </div>
        <aside className="h-fit border-t-5 border-cardinal-red bg-fog-light p-24">
          <h2 className="mb-10 text-24">Primary guidance</h2>
          <p className="text-16 leading-normal text-black-70">Check the official identity site before making brand decisions, especially when guidance may have changed.</p>
          <a className="inline-flex items-center gap-8 font-bold text-cardinal-red" href="https://identity.stanford.edu" rel="noreferrer" target="_blank">
            Visit Stanford Identity <ExternalIcon className="size-17" />
          </a>
        </aside>
      </article>
    </main>
  );
}
