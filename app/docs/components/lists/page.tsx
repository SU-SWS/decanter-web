import type { Metadata } from 'next';
import { ComponentExample } from '@/components/docs/ComponentExample';
import { DocPage } from '@/components/docs/DocPage';

export const metadata: Metadata = {
  title: 'List components',
  description: 'Unstyled and horizontal list component classes in Decanter v8.',
};

export default function ListsComponentPage() {
  return (
    <DocPage
      description="Two small list helpers for navigation, metadata, and other layouts where browser markers are not appropriate."
      eyebrow="Components"
      headings={[
        { id: 'unstyled', title: 'Unstyled list' },
        { id: 'horizontal', title: 'Horizontal list' },
      ]}
      kind="Decanter only"
      title="Lists"
    >
      <section id="unstyled">
        <h2>Unstyled list</h2>
        <p><code>list-unstyled</code> removes markers, padding, and outer margins while preserving list semantics.</p>
        <ComponentExample codeTabs={[
          { code: `<ul class="list-unstyled">
  <li>Undergraduate programs</li>
  <li>Graduate programs</li>
  <li>Professional learning</li>
</ul>`, label: 'HTML', language: 'html' },
          { code: `<ul className="list-unstyled">
  <li>Undergraduate programs</li>
  <li>Graduate programs</li>
  <li>Professional learning</li>
</ul>`, label: 'React JSX', language: 'jsx' },
        ]}>
          <ul className="list-unstyled">
            <li>Undergraduate programs</li>
            <li>Graduate programs</li>
            <li>Professional learning</li>
          </ul>
        </ComponentExample>
      </section>

      <section id="horizontal">
        <h2>Horizontal list</h2>
        <p><code>list-horizontal</code> uses the legacy floated layout. Add the desired right margin to each item; the final item’s margin is removed automatically.</p>
        <ComponentExample codeTabs={[
          { code: `<nav aria-label="Example section links">
  <ul class="list-horizontal">
    <li class="mr-20"><a href="#unstyled">News</a></li>
    <li class="mr-20"><a href="#horizontal">Events</a></li>
    <li><a href="#list-guidance">Visit</a></li>
  </ul>
</nav>`, label: 'HTML', language: 'html' },
          { code: `<nav aria-label="Example section links">
  <ul className="list-horizontal">
    <li className="mr-20"><a href="#unstyled">News</a></li>
    <li className="mr-20"><a href="#horizontal">Events</a></li>
    <li><a href="#list-guidance">Visit</a></li>
  </ul>
</nav>`, label: 'React JSX', language: 'jsx' },
        ]}>
          <nav aria-label="Example section links">
            <ul className="list-horizontal">
              <li className="mr-20"><a href="#unstyled">News</a></li>
              <li className="mr-20"><a href="#horizontal">Events</a></li>
              <li><a href="#list-guidance">Visit</a></li>
            </ul>
          </nav>
        </ComponentExample>
        <p id="list-guidance">Use Tailwind’s flex and gap utilities for new layouts that need wrapping, alignment, or more predictable bidirectional behavior. This component is retained for simple legacy patterns.</p>
      </section>
    </DocPage>
  );
}
