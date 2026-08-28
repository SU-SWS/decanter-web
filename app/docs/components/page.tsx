import type { Metadata } from 'next';
import { DocPage } from '@/components/docs/doc-page';
import { FeatureCard } from '@/components/docs/feature-card';
import { docsNavigation } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Reusable CSS patterns and component classes included in Decanter v8.',
};

export default function ComponentsPage() {
  const componentPages = docsNavigation.find((group) => group.title === 'Components')?.items.slice(1) ?? [];

  return (
    <DocPage
      description="A deliberately small set of framework-independent CSS patterns for common Stanford interface needs, each with rendered examples and copyable code."
      eyebrow="Components"
      headings={[
        { id: 'what-components-mean', title: 'What components mean here' },
        { id: 'component-reference', title: 'Component reference' },
        { id: 'how-components-ship', title: 'How components ship' },
      ]}
      kind="Decanter only"
      title="Components"
    >
      <section id="what-components-mean">
        <h2>What components mean here</h2>
        <p>In Decanter, a component is not necessarily a React component or a self-contained interface element. It is a reusable CSS pattern with a documented class and markup contract.</p>
        <p>Some components style a recognizable control, such as a button or Stanford wordmark. Others modify existing semantic HTML: <code>wysiwyg</code> supplies vertical rhythm to unstructured rich text, <code>centered-container</code> aligns page content, and <code>table-borderless</code> changes one aspect of a table.</p>
      </section>

      <section id="component-reference">
        <h2>Component reference</h2>
        <div className="grid gap-16 md:grid-cols-2">
          {componentPages.map((item) => (
            <FeatureCard description={item.description} href={item.href} key={item.href} title={item.title} />
          ))}
        </div>
      </section>

      <section id="how-components-ship">
        <h2>How components ship</h2>
        <p>Component classes are emitted whenever <code>decanter</code> or <code>decanter/minimal</code> is imported. They are plain CSS and work in React, Twig, PHP, HTML, and other template systems.</p>
        <p>Form styles are opt-in through <code>decanter/forms</code>. The Forms page covers that entry and its related control classes together.</p>
      </section>
    </DocPage>
  );
}
