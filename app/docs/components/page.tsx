import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Components',
  description: 'CSS component classes included in Decanter v8.',
};

export default function ComponentsPage() {
  return (
    <DocPage
      description="A deliberately small set of framework-independent CSS components for common Stanford interface needs."
      eyebrow="Building interfaces"
      headings={[
        { id: 'button', title: 'Button' },
        { id: 'logo', title: 'Stanford logo' },
        { id: 'skip-link', title: 'Skip link' },
        { id: 'stretched-link', title: 'Stretched link' },
        { id: 'lists-and-tables', title: 'Lists and tables' },
        { id: 'wysiwyg', title: 'WYSIWYG content' },
      ]}
      kind="Decanter only"
      title="Components"
    >
      <p>Component classes are emitted whenever <code>decanter</code> or <code>decanter/minimal</code> is imported. They are plain CSS and work in React, Twig, PHP, HTML, and other template systems.</p>

      <section id="button">
        <h2>Button</h2>
        <p><code>button</code> supplies a Cardinal action treatment for buttons, links, and button-like inputs.</p>
        <div className="my-20 border border-black-20 bg-fog-light p-24"><button className="button" type="button">Submit application</button></div>
        <CodeBlock code={`<button className="button" type="submit">Submit application</button>
<a className="button" href="/apply">Apply now</a>`} label="HTML / JSX" language="html" />
      </section>

      <section id="logo">
        <h2>Stanford logo</h2>
        <p><code>logo</code> applies the Stanford wordmark font, ligature settings, line-height trim, brand color, and link treatment. Load the Stanford font before using it.</p>
        <div className="my-20 border border-black-20 bg-white p-24"><a className="logo type-3 no-underline" href="https://www.stanford.edu">Stanford University</a></div>
        <CodeBlock code={'<a className="logo type-3" href="https://www.stanford.edu">Stanford University</a>'} label="React" language="tsx" />
      </section>

      <section id="skip-link">
        <h2>Skip link</h2>
        <p><code>skiplink</code> visually hides an in-page navigation link until keyboard focus places it in the upper-left corner.</p>
        <CodeBlock code={`<body>
  <a className="skiplink" href="#main-content">Skip to main content</a>
  <main id="main-content">…</main>
</body>`} label="HTML" language="html" />
      </section>

      <section id="stretched-link">
        <h2>Stretched link</h2>
        <p><code>stretched-link</code> expands a nested link’s hit area over a positioned container.</p>
        <CodeBlock code={`<article className="relative border border-black-20 p-20">
  <h3><a className="stretched-link" href="/story">Story title</a></h3>
  <p className="card-paragraph">The whole card is clickable.</p>
</article>`} label="React" language="tsx" />
        <Callout title="One interactive target per card" variant="important">
          <p>Do not place buttons or additional links underneath the stretched hit area. If other controls are essential, raise them above it with <code>relative z-10</code> and test the complete keyboard order.</p>
        </Callout>
      </section>

      <section id="lists-and-tables">
        <h2>Lists and tables</h2>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Behavior</th></tr></thead><tbody>
          <tr><td><code>list-unstyled</code></td><td>Removes markers, padding, and margins.</td></tr>
          <tr><td><code>list-horizontal</code></td><td>Creates the legacy floated horizontal list treatment.</td></tr>
          <tr><td><code>table-borderless</code></td><td>Removes borders from a base-styled table.</td></tr>
        </tbody></table></div>
      </section>

      <section id="wysiwyg">
        <h2>WYSIWYG content</h2>
        <p><code>wysiwyg</code> adds dependable vertical rhythm to unstructured rich text from a CMS: paragraph and list spacing, heading separation, trimmed edges, and linked-heading behavior.</p>
        <CodeBlock code={'<div className="wysiwyg">{/* Trusted CMS output */}</div>'} label="React" language="tsx" />
      </section>
    </DocPage>
  );
}
