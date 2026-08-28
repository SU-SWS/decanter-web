import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { ComponentExample } from '@/components/docs/component-example';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'WYSIWYG content component',
  description: 'Rich-text vertical rhythm component included in Decanter v8.',
};

const wysiwygHtml = `<div class="wysiwyg">
  <h2>Explore Stanford</h2>
  <h3><a href="#behavior">Learning across disciplines</a></h3>
  <p>Discover programs, people, and ideas across the university.</p>

  <h4>Undergraduate education</h4>
  <p>Build a broad foundation before choosing an area of focus.</p>

  <h5>Ways to learn</h5>
  <ul>
    <li>Courses and seminars</li>
    <li>Research and fieldwork</li>
  </ul>

  <h6>Related resources</h6>
  <p>Review advising, enrollment, and academic calendar information.</p>
</div>`;

const wysiwygJsx = `<div className="wysiwyg">
  <h2>Explore Stanford</h2>
  <h3><a href="#behavior">Learning across disciplines</a></h3>
  <p>Discover programs, people, and ideas across the university.</p>

  <h4>Undergraduate education</h4>
  <p>Build a broad foundation before choosing an area of focus.</p>

  <h5>Ways to learn</h5>
  <ul>
    <li>Courses and seminars</li>
    <li>Research and fieldwork</li>
  </ul>

  <h6>Related resources</h6>
  <p>Review advising, enrollment, and academic calendar information.</p>
</div>`;

export default function WysiwygComponentPage() {
  return (
    <DocPage
      description="A vertical-rhythm wrapper for unstructured rich text from a CMS or other trusted content source."
      eyebrow="Components"
      headings={[
        { id: 'example', title: 'Example' },
        { id: 'behavior', title: 'Behavior' },
        { id: 'content-safety', title: 'Content safety' },
      ]}
      kind="Decanter only"
      title="WYSIWYG content"
    >
      <section id="example">
        <h2>Example</h2>
        <p>The wrapper is the only element that needs a class. The headings, paragraphs, and list below have no type, line-height, margin, or gap utilities, so the preview shows the component’s own vertical rhythm. The <code>h3</code> immediately after the <code>h2</code> demonstrates consecutive heading spacing.</p>
        <ComponentExample codeTabs={[
          { code: wysiwygHtml, label: 'HTML', language: 'html' },
          { code: wysiwygJsx, label: 'React JSX', language: 'jsx' },
        ]}>
          <div className="wysiwyg">
            <h2>Explore Stanford</h2>
            <h3><a href="#behavior">Learning across disciplines</a></h3>
            <p>Discover programs, people, and ideas across the university.</p>
            <h4>Undergraduate education</h4>
            <p>Build a broad foundation before choosing an area of focus.</p>
            <h5>Ways to learn</h5>
            <ul><li>Courses and seminars</li><li>Research and fieldwork</li></ul>
            <h6>Related resources</h6>
            <p>Review advising, enrollment, and academic calendar information.</p>
          </div>
        </ComponentExample>
      </section>

      <section id="behavior">
        <h2>Behavior</h2>
        <ul>
          <li>Consistent spacing after paragraphs, lists, and description lists.</li>
          <li>Additional separation when headings follow body content.</li>
          <li>Tighter rhythm between consecutive heading levels.</li>
          <li>Trimmed first and last child margins.</li>
          <li>Linked headings underline on hover or focus.</li>
        </ul>
      </section>

      <section id="content-safety">
        <h2>Content safety</h2>
        <Callout title="Styling does not sanitize HTML" variant="important">
          <p>The component only supplies presentation. Sanitize CMS or user-provided HTML before rendering it, preserve semantic heading order, and ensure editors can create accessible link text and alternative text.</p>
        </Callout>
      </section>
    </DocPage>
  );
}
