import type { Metadata } from 'next';
import { ExternalIcon } from '@/components/icons';
import { PageHeader } from '@/components/pageHeader';
import { decanterLinks } from '@/data/decanter';

export const metadata: Metadata = {
  title: 'Figma resources',
  description: 'Decanter design resources in Figma.',
};

export default function FigmaPage() {
  return (
    <main id="main-content">
      <PageHeader description="Use Decanter’s shared design assets to align interface decisions with the production CSS framework." eyebrow="Designer" title="Figma" />
      <div className="cc grid gap-40 rs-py-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="wysiwyg max-w-prose-wide">
          <h2>Design and code should agree</h2>
          <p>The Decanter Figma library captures common Stanford foundations and patterns for designers. The CSS package remains the implementation source of truth, so verify type steps, breakpoints, spacing values, and component behavior against the current v8 documentation when preparing developer handoff.</p>
          <h2>Handoff checklist</h2>
          <ul>
            <li>Name Decanter tokens and utilities in annotations where they express the intended design.</li>
            <li>Document responsive behavior at Decanter’s 576, 768, 992, 1200, and 1500px breakpoints.</li>
            <li>Include keyboard, focus, validation, empty, loading, and error states.</li>
            <li>Confirm text/background contrast and behavior at 200% browser zoom.</li>
            <li>Identify which patterns are Decanter foundations and which are product-specific.</li>
          </ul>
          <h2>Beta note</h2>
          <p>Decanter v8 is in beta. Some existing Figma assets may still reflect v7 naming or behavior, so do not infer implementation details solely from an older library component.</p>
        </article>
        <aside className="h-fit border-t-5 border-plum bg-fog-light p-24">
          <h2 className="mb-10 text-24">Open the library</h2>
          <p className="text-16 leading-normal text-black-70">The Figma file may require Stanford access or a manual handoff from the Decanter team.</p>
          <a className="mt-8 inline-flex items-center gap-8 bg-plum px-18 py-11 font-bold text-white no-underline hocus:bg-black hocus:text-white hocus:underline" href={decanterLinks.figma} rel="noreferrer" target="_blank">
            Open Decanter in Figma <ExternalIcon className="size-17" />
          </a>
        </aside>
      </div>
    </main>
  );
}
