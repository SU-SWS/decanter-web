import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/component-example';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Button component',
  description: 'Cardinal action button component included in Decanter v8.',
};

export default function ButtonComponentPage() {
  return (
    <DocPage
      description="A Cardinal action treatment for native buttons, links, and button-like inputs."
      eyebrow="Components"
      headings={[
        { id: 'examples', title: 'Examples' },
        { id: 'behavior', title: 'Behavior' },
        { id: 'guidance', title: 'Usage guidance' },
      ]}
      kind="Decanter only"
      title="Button"
    >
      <section id="examples">
        <h2>Examples</h2>
        <p>The same <code>button</code> class can style a native button or an anchor when the destination is a page.</p>
        <ComponentExample
          codeTabs={[
            { code: `<button class="button" type="button">
  Submit application
</button>

<a class="button" href="#guidance">
  Apply now
</a>`, label: 'HTML', language: 'html' },
            { code: `<button className="button" type="button">
  Submit application
</button>

<a className="button" href="#guidance">
  Apply now
</a>`, label: 'React JSX', language: 'jsx' },
          ]}
        >
          <div className="flex flex-wrap items-center gap-14">
            <button className="button" type="button">Submit application</button>
            <a className="button" href="#guidance">Apply now</a>
          </div>
        </ComponentExample>
      </section>

      <section id="behavior">
        <h2>Behavior</h2>
        <ul>
          <li>Digital Red background with white text.</li>
          <li>Black background and underline on hover or focus.</li>
          <li>A medium shadow reinforces keyboard focus.</li>
          <li>One-second-rem-equivalent vertical padding and two-rem-equivalent horizontal padding.</li>
        </ul>
      </section>

      <section id="guidance">
        <h2>Usage guidance</h2>
        <Callout title="Choose the semantic element first" variant="important">
          <p>Use a <code>button</code> for an action in the current interface. Use an anchor when activating the control navigates to another URL. The shared appearance does not make those elements interchangeable.</p>
        </Callout>
      </section>
    </DocPage>
  );
}
