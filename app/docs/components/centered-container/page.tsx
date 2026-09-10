import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/componentExample';
import { DocPage } from '@/components/docs/docPage';

export const metadata: Metadata = {
  title: 'Centered container component',
  description: 'Standard Stanford content container included in Decanter v8.',
};

const alignedSectionsHtml = `<div>
  <section class="bg-plum-dark text-white">
    <div class="centered-container py-24">
      <div class="border-l-4 border-illuminating pl-14">
        <p class="mb-6 text-14 font-semibold uppercase tracking-wide text-white/75">
          University update
        </p>
        <h3 class="m-0 text-26 text-white">One shared content edge</h3>
      </div>
    </div>
  </section>

  <section class="bg-white">
    <div class="centered-container py-24">
      <div class="border-l-4 border-digital-blue pl-14">
        <p class="m-0">The background changes, but the content stays aligned.</p>
      </div>
    </div>
  </section>
</div>`;

const alignedSectionsJsx = `<div>
  <section className="bg-plum-dark text-white">
    <div className="centered-container py-24">
      <div className="border-l-4 border-illuminating pl-14">
        <p className="mb-6 text-14 font-semibold uppercase tracking-wide text-white/75">
          University update
        </p>
        <h3 className="m-0 text-26 text-white">One shared content edge</h3>
      </div>
    </div>
  </section>

  <section className="bg-white">
    <div className="centered-container py-24">
      <div className="border-l-4 border-digital-blue pl-14">
        <p className="m-0">The background changes, but the content stays aligned.</p>
      </div>
    </div>
  </section>
</div>`;

const nestedContainerHtml = `<div class="centered-container py-24">
  <div class="border border-black-20 bg-white p-20">
    <p class="mb-16 border-l-4 border-cardinal-red pl-14">
      Parent container content
    </p>

    <div class="cc">
      <p class="m-0 border-l-4 border-digital-blue pl-14">
        Nested component content uses the same edge
      </p>
    </div>
  </div>
</div>`;

const nestedContainerJsx = `<div className="centered-container py-24">
  <div className="border border-black-20 bg-white p-20">
    <p className="mb-16 border-l-4 border-cardinal-red pl-14">
      Parent container content
    </p>

    <div className="cc">
      <p className="m-0 border-l-4 border-digital-blue pl-14">
        Nested component content uses the same edge
      </p>
    </div>
  </div>
</div>`;

export default function CenteredContainerComponentPage() {
  return (
    <DocPage
      description="A page-alignment pattern with responsive side margins and a 1500px wide-screen content cap."
      eyebrow="Components"
      headings={[
        { id: 'page-alignment', title: 'Page alignment' },
        { id: 'nesting', title: 'Nested containers' },
        { id: 'behavior', title: 'Behavior and aliases' },
      ]}
      kind="Decanter only"
      title="Centered container"
    >
      <section id="page-alignment">
        <h2>Page alignment</h2>
        <p>Let each page section own its full-width background, then apply <code>centered-container</code> to the inner wrapper. The responsive gutters keep content in different sections on the same vertical edge.</p>
        <ComponentExample
          codeTabs={[
            { code: alignedSectionsHtml, label: 'HTML', language: 'html' },
            { code: alignedSectionsJsx, label: 'React JSX', language: 'jsx' },
          ]}
          previewClassName="centered-container-alignment-preview !p-0"
        >
          <div>
            <section className="bg-plum-dark text-white">
              <div className="centered-container py-24">
                <div className="border-l-4 border-illuminating pl-14">
                  <p className="mb-6 text-14 font-semibold uppercase tracking-wide text-white/75">University update</p>
                  <h3 className="m-0 text-26 text-white">One shared content edge</h3>
                </div>
              </div>
            </section>
            <section className="bg-white">
              <div className="centered-container py-24">
                <div className="border-l-4 border-digital-blue pl-14">
                  <p className="m-0">The background changes, but the content stays aligned.</p>
                </div>
              </div>
            </section>
          </div>
        </ComponentExample>
      </section>

      <section id="nesting">
        <h2>Nested containers</h2>
        <p>A nested <code>centered-container</code> or <code>cc</code> automatically drops its horizontal padding. This lets a reusable component opt into page alignment without doubling the parent’s gutters.</p>
        <ComponentExample
          codeTabs={[
            { code: nestedContainerHtml, label: 'HTML', language: 'html' },
            { code: nestedContainerJsx, label: 'React JSX', language: 'jsx' },
          ]}
          previewClassName="centered-container-nesting-preview !p-0"
        >
          <div className="centered-container py-24">
            <div className="border border-black-20 bg-white p-20">
              <p className="mb-16 border-l-4 border-cardinal-red pl-14">Parent container content</p>
              <div className="cc">
                <p className="m-0 border-l-4 border-digital-blue pl-14">Nested component content uses the same edge</p>
              </div>
            </div>
          </div>
        </ComponentExample>
      </section>

      <section id="behavior">
        <h2>Behavior and aliases</h2>
        <p><code>centered-container</code> is the descriptive class name. <code>cc</code> is an exact, shorter alias. Both use the <Link href="/docs/layout#screen-margins">screen-margin tokens and Decanter breakpoints</Link>.</p>
        <Callout title="Wide-screen cap">
          <p>At viewports 1700px and wider, the side padding is calculated so the content area stops growing at 1500px and remains centered.</p>
        </Callout>
      </section>
    </DocPage>
  );
}
