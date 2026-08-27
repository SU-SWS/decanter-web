import type { Metadata } from 'next';
import { CodeBlock } from '@/components/docs/code-block';
import { PageHeader } from '@/components/page-header';
import { GlobalFooter } from '@/components/site/global-footer';

export const metadata: Metadata = {
  title: 'Global Footer example',
  description: 'Stanford Global Footer implementation used by the Decanter documentation site.',
};

export default function GlobalFooterExamplePage() {
  return (
    <main id="main-content">
      <PageHeader description="The common Stanford links, wordmark, location, and policy links retained by this site." eyebrow="Examples" title="Global Footer" />
      <article className="rs-py-5">
        <div className="cc mb-20"><h2>Rendered example</h2><p>The shared component below is the same Global Footer rendered at the bottom of every page.</p></div>
        <div className="border-y border-black-20"><GlobalFooter /></div>
        <div className="cc mt-32">
          <h2>Usage</h2>
          <CodeBlock code={`import { GlobalFooter } from '@/components/site/global-footer';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <GlobalFooter />
    </>
  );
}`} label="app/layout.tsx" language="tsx" />
          <p className="max-w-prose-wide">Keep the standard destinations and policy language current. Do not remove the Accessibility or Non-Discrimination links from Stanford’s shared footer.</p>
        </div>
      </article>
    </main>
  );
}
