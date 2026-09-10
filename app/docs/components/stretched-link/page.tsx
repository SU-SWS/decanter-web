import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/componentExample';
import { DocPage } from '@/components/docs/docPage';

export const metadata: Metadata = {
  title: 'Stretched link component',
  description: 'Clickable card link component included in Decanter v8.',
};

export default function StretchedLinkComponentPage() {
  return (
    <DocPage
      description="A utility-like component that expands one nested link across its positioned card container."
      eyebrow="Components"
      headings={[
        { id: 'example', title: 'Example' },
        { id: 'constraints', title: 'Interaction constraints' },
      ]}
      kind="Decanter only"
      title="Stretched link"
    >
      <section id="example">
        <h2>Example</h2>
        <p>The container must establish positioning with <code>relative</code>. The component’s pseudo-element then fills that container.</p>
        <ComponentExample codeTabs={[
          { code: `<article class="relative max-w-600 border border-black-20 bg-white p-24 shadow-sm">
  <p class="subheading mb-8 text-cardinal-red">Campus</p>
  <h3 class="mb-10 text-25">
    <a class="stretched-link" href="#constraints">
      A card with one clear destination
    </a>
  </h3>
  <p class="card-paragraph mb-0">
    The whole card is clickable without wrapping the article in an anchor.
  </p>
</article>`, label: 'HTML', language: 'html' },
          { code: `<article className="relative max-w-600 border border-black-20 bg-white p-24 shadow-sm">
  <p className="subheading mb-8 text-cardinal-red">Campus</p>
  <h3 className="mb-10 text-25">
    <a className="stretched-link" href="#constraints">
      A card with one clear destination
    </a>
  </h3>
  <p className="card-paragraph mb-0">
    The whole card is clickable without wrapping the article in an anchor.
  </p>
</article>`, label: 'React JSX', language: 'jsx' },
        ]}>
          <article className="relative max-w-600 border border-black-20 bg-white p-24 shadow-sm">
            <p className="subheading mb-8 text-cardinal-red">Campus</p>
            <h3 className="mb-10 text-25"><a className="stretched-link" href="#constraints">A card with one clear destination</a></h3>
            <p className="card-paragraph mb-0">The whole card is clickable without wrapping the article in an anchor.</p>
          </article>
        </ComponentExample>
      </section>

      <section id="constraints">
        <h2>Interaction constraints</h2>
        <Callout title="One interactive target per card" variant="important">
          <p>Do not place buttons or additional links underneath the stretched hit area. When another control is essential, raise it above the pseudo-element with <code>relative z-10</code>, then test pointer and keyboard behavior.</p>
        </Callout>
      </section>
    </DocPage>
  );
}
