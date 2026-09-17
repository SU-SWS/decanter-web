import type { Metadata } from 'next';
import { Callout } from '@/components/docs/Callout';
import { ComponentExample } from '@/components/docs/ComponentExample';
import { DocPage } from '@/components/docs/DocPage';

export const metadata: Metadata = {
  title: 'Stanford logo component',
  description: 'Horizontal, stacked, and reversed Stanford wordmark treatments in Decanter v8.',
};

export default function LogoComponentPage() {
  return (
    <DocPage
      description="The Stanford wordmark component, shown in horizontal, stacked, and reversed treatments."
      eyebrow="Components"
      headings={[
        { id: 'horizontal', title: 'Horizontal wordmark' },
        { id: 'stacked', title: 'Stacked wordmark' },
        { id: 'reversed', title: 'Reversed wordmark' },
        { id: 'requirements', title: 'Requirements' },
      ]}
      kind="Decanter only"
      title="Stanford logo"
    >
      <p>The <code>logo</code> class applies the Stanford font, ligature settings, cropped line height, brand color, and link treatment. Its size is intentionally composed with a text or type utility.</p>

      <section id="horizontal">
        <h2>Horizontal wordmark</h2>
        <ComponentExample codeTabs={[
          { code: '<a class="logo text-32" href="https://www.stanford.edu">\n  Stanford University\n</a>', label: 'HTML', language: 'html' },
          { code: '<a className="logo text-32" href="https://www.stanford.edu">\n  Stanford University\n</a>', label: 'React JSX', language: 'jsx' },
        ]}>
          <a className="logo text-32" href="https://www.stanford.edu">Stanford University</a>
        </ComponentExample>
      </section>

      <section id="stacked">
        <h2>Stacked wordmark</h2>
        <p>Add an explicit line break between the two words and use a modular type step when the lockup should scale responsively.</p>
        <ComponentExample codeTabs={[
          { code: '<a class="logo type-3" href="https://www.stanford.edu">\n  Stanford<br>\n  University\n</a>', label: 'HTML', language: 'html' },
          { code: '<a className="logo type-3" href="https://www.stanford.edu">\n  Stanford<br />\n  University\n</a>', label: 'React JSX', language: 'jsx' },
        ]}>
          <a className="logo type-3" href="https://www.stanford.edu">Stanford<br />University</a>
        </ComponentExample>
      </section>

      <section id="reversed">
        <h2>Reversed wordmark</h2>
        <p>Override both the resting and interaction colors when the wordmark appears on a Cardinal or other dark background.</p>
        <ComponentExample
          codeTabs={[
            { code: '<a\n  class="logo text-32 text-white hocus:text-white"\n  href="https://www.stanford.edu"\n>\n  Stanford University\n</a>', label: 'HTML', language: 'html' },
            { code: '<a\n  className="logo text-32 text-white hocus:text-white"\n  href="https://www.stanford.edu"\n>\n  Stanford University\n</a>', label: 'React JSX', language: 'jsx' },
          ]}
          previewClassName="!bg-cardinal-red !bg-none"
        >
          <a className="logo text-32 text-white hocus:text-white" href="https://www.stanford.edu">Stanford University</a>
        </ComponentExample>
      </section>

      <section id="requirements">
        <h2>Requirements</h2>
        <Callout title="Load the Stanford font">
          <p>Decanter defines the <code>font-stanford</code> stack but does not bundle its font file. Load the approved Stanford webfont before using this component, and keep the wordmark linked to Stanford’s main website in global identity treatments.</p>
        </Callout>
      </section>
    </DocPage>
  );
}
