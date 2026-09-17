import type { Metadata } from 'next';
import { ComponentExample } from '@/components/docs/ComponentExample';
import { DocPage } from '@/components/docs/DocPage';

export const metadata: Metadata = {
  title: 'Table components',
  description: 'Base and borderless table treatments in Decanter v8.',
};

const tableMarkup = `<table>
  <caption>Enrollment by program</caption>
  <thead>
    <tr>
      <th scope="col">Program</th>
      <th scope="col">Students</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">Undergraduate</th><td>7,800</td></tr>
    <tr><th scope="row">Graduate</th><td>9,600</td></tr>
  </tbody>
</table>`;

export default function TablesComponentPage() {
  return (
    <DocPage
      description="Decanter styles semantic data tables by default and supplies one component class for borderless presentations."
      eyebrow="Components"
      headings={[
        { id: 'base-table', title: 'Base table' },
        { id: 'borderless-table', title: 'Borderless table' },
        { id: 'responsive-tables', title: 'Responsive tables' },
      ]}
      kind="Decanter only"
      title="Tables"
    >
      <section id="base-table">
        <h2>Base table</h2>
        <p>The full Decanter base layer supplies row borders, responsive text, cell padding, semibold headers, and a muted caption.</p>
        <ComponentExample
          codeTabs={[
            { code: tableMarkup, label: 'HTML', language: 'html' },
            { code: tableMarkup, label: 'React JSX', language: 'jsx' },
          ]}
          previewClassName="overflow-x-auto"
        >
          <table>
            <caption>Enrollment by program</caption>
            <thead><tr><th scope="col">Program</th><th scope="col">Students</th></tr></thead>
            <tbody><tr><th scope="row">Undergraduate</th><td>7,800</td></tr><tr><th scope="row">Graduate</th><td>9,600</td></tr></tbody>
          </table>
        </ComponentExample>
      </section>

      <section id="borderless-table">
        <h2>Borderless table</h2>
        <p>Add <code>table-borderless</code> to remove row and cell borders without changing the table’s semantics or other base styling.</p>
        <ComponentExample
          codeTabs={[
            { code: tableMarkup.replace('<table>', '<table class="table-borderless">'), label: 'HTML', language: 'html' },
            { code: tableMarkup.replace('<table>', '<table className="table-borderless">'), label: 'React JSX', language: 'jsx' },
          ]}
          previewClassName="overflow-x-auto"
        >
          <table className="table-borderless">
            <caption>Enrollment by program</caption>
            <thead><tr><th scope="col">Program</th><th scope="col">Students</th></tr></thead>
            <tbody><tr><th scope="row">Undergraduate</th><td>7,800</td></tr><tr><th scope="row">Graduate</th><td>9,600</td></tr></tbody>
          </table>
        </ComponentExample>
      </section>

      <section id="responsive-tables">
        <h2>Responsive tables</h2>
        <p>Keep the table’s semantic structure intact. When its minimum readable width exceeds the viewport, put the table inside a labelled region with horizontal overflow rather than converting rows into unrelated blocks.</p>
      </section>
    </DocPage>
  );
}
