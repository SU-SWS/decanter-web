import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/component-example';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Skip link component',
  description: 'Keyboard-first skip navigation component included in Decanter v8.',
};

export default function SkipLinkComponentPage() {
  return (
    <DocPage
      description="A visually hidden navigation link that appears when focused and moves keyboard users directly to main content."
      eyebrow="Components"
      headings={[
        { id: 'example', title: 'Example' },
        { id: 'placement', title: 'Placement' },
      ]}
      kind="Decanter only"
      title="Skip link"
    >
      <section id="example">
        <h2>Example</h2>
        <p>The preview holds the normally focused appearance in place so it can be inspected. On a real page, the link remains off-screen until it receives keyboard focus.</p>
        <ComponentExample
          codeTabs={[
            { code: `<a class="skiplink" href="#skip-link-demo-target">
  Skip to main content
</a>

<div
  class="mt-18 border border-black-20 bg-white p-18"
  id="skip-link-demo-target"
  tabindex="-1"
>
  <strong class="block">Main content destination</strong>
  <span class="text-15 text-black-70">
    Activating the link moves the document to this landmark.
  </span>
</div>`, label: 'HTML', language: 'html' },
            { code: `<a className="skiplink" href="#skip-link-demo-target">
  Skip to main content
</a>

<div
  className="mt-18 border border-black-20 bg-white p-18"
  id="skip-link-demo-target"
  tabIndex={-1}
>
  <strong className="block">Main content destination</strong>
  <span className="text-15 text-black-70">
    Activating the link moves the document to this landmark.
  </span>
</div>`, label: 'React JSX', language: 'jsx' },
          ]}
          previewClassName="skiplink-preview"
          title="Visible focus state"
        >
          <a className="skiplink" href="#skip-link-demo-target">Skip to main content</a>
          <div className="mt-18 border border-black-20 bg-white p-18" id="skip-link-demo-target" tabIndex={-1}>
            <strong className="block">Main content destination</strong>
            <span className="text-15 text-black-70">Activating the link moves the document to this landmark.</span>
          </div>
        </ComponentExample>
      </section>

      <section id="placement">
        <h2>Placement</h2>
        <Callout title="Make it the first focusable element" variant="important">
          <p>Place the skip link at the beginning of <code>body</code>, before the Identity Bar and site navigation. Its destination must be the page’s main landmark and the destination ID must be unique.</p>
        </Callout>
        <p><code>skiplinks</code> remains available as an alias, but use the singular <code>skiplink</code> class for new work.</p>
      </section>
    </DocPage>
  );
}
