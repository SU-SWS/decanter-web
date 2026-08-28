import type { Metadata } from 'next';
import { ComponentExample } from '@/components/docs/componentExample';
import { PageHeader } from '@/components/pageHeader';
import { GlobalFooter } from '@/components/site/globalFooter';

export const metadata: Metadata = {
  title: 'Global Footer example',
  description: 'Stanford Global Footer implementation used by the Decanter documentation site.',
};

export default function GlobalFooterExamplePage() {
  return (
    <main id="main-content">
      <PageHeader description="The common Stanford links, wordmark, location, and policy links retained by this site." eyebrow="Examples" title="Global Footer" />
      <article className="cc rs-py-5">
        <h2>Usage</h2>
        <p>The shared component below is the same Global Footer rendered at the bottom of every page.</p>
        <ComponentExample code={`import { GlobalFooter } from '@/components/site/globalFooter';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <GlobalFooter />
    </>
  );
}`} label="app/layout.tsx">
          <div className="-mx-20 -mb-20 border-y border-black-20 sm:-mx-28 sm:-mb-28"><GlobalFooter /></div>
        </ComponentExample>
        <p className="max-w-prose-wide">Keep the standard destinations and policy language current. Do not remove the Accessibility or Non-Discrimination links from Stanford’s shared footer.</p>
      </article>
    </main>
  );
}
