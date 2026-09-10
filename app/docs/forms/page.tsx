import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/codeBlock';
import { ComponentExample } from '@/components/docs/componentExample';
import { DocPage } from '@/components/docs/docPage';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Opt-in form reset and component classes in Decanter v8.',
};

const formHtml = `<form class="max-w-600">
  <fieldset class="fieldset">
    <legend class="legend mb-16 font-bold">Contact preferences</legend>

    <div class="mb-16">
      <label class="label mb-5" for="example-email">Email address</label>
      <input class="input" id="example-email" type="email">
    </div>

    <div class="mb-16">
      <label class="label mb-5" for="example-topic">Topic</label>
      <select class="select" id="example-topic">
        <option>Documentation</option>
        <option>Design system</option>
      </select>
    </div>

    <div class="flex items-center gap-8">
      <input class="checkbox" id="example-updates" type="checkbox">
      <label class="label mb-0" for="example-updates">
        Send me project updates
      </label>
    </div>
  </fieldset>
</form>`;

const formJsx = `<form className="max-w-600">
  <fieldset className="fieldset">
    <legend className="legend mb-16 font-bold">Contact preferences</legend>

    <div className="mb-16">
      <label className="label mb-5" htmlFor="example-email">Email address</label>
      <input className="input" id="example-email" type="email" />
    </div>

    <div className="mb-16">
      <label className="label mb-5" htmlFor="example-topic">Topic</label>
      <select className="select" id="example-topic">
        <option>Documentation</option>
        <option>Design system</option>
      </select>
    </div>

    <div className="flex items-center gap-8">
      <input className="checkbox" id="example-updates" type="checkbox" />
      <label className="label mb-0" htmlFor="example-updates">
        Send me project updates
      </label>
    </div>
  </fieldset>
</form>`;

export default function FormsPage() {
  return (
    <DocPage
      description="An optional forms entry combines the Tailwind forms reset with Decanter classes for accessible, Stanford-aligned controls."
      eyebrow="Components"
      headings={[
        { id: 'setup', title: 'Setup' },
        { id: 'class-reference', title: 'Class reference' },
        { id: 'example', title: 'Example' },
        { id: 'validation', title: 'Validation' },
      ]}
      kind="Decanter only"
      title="Forms"
    >
      <section id="setup">
        <h2>Setup</h2>
        <CodeBlock code={`@import 'decanter';
@import 'decanter/forms';`} label="app/globals.css" language="css" />
        <Callout title="Forms are opt-in" variant="important">
          <p><code>decanter/forms</code> is not standalone. It relies on theme values and root sizing from <code>decanter</code> or <code>decanter/minimal</code>.</p>
        </Callout>
      </section>

      <section id="class-reference">
        <h2>Class reference</h2>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Element</th><th>Behavior</th></tr></thead><tbody>
          <tr><td><code>input</code></td><td>input</td><td>Block field, 18px text, black-20 border</td></tr>
          <tr><td><code>textarea</code></td><td>textarea</td><td>Input treatment with a 160px default height</td></tr>
          <tr><td><code>select</code></td><td>select</td><td>Input treatment with white background</td></tr>
          <tr><td><code>checkbox</code></td><td>checkbox input</td><td>24px control with Digital Blue border and checked state</td></tr>
          <tr><td><code>radio</code></td><td>radio input</td><td>24px control matching checkbox treatment</td></tr>
          <tr><td><code>label</code></td><td>label</td><td>Block, 18px label</td></tr>
          <tr><td><code>legend</code></td><td>legend</td><td>Display line height</td></tr>
          <tr><td><code>fieldset</code></td><td>fieldset</td><td>Removes default border</td></tr>
        </tbody></table></div>
      </section>

      <section id="example">
        <h2>Example</h2>
        <ComponentExample codeTabs={[
          { code: formHtml, label: 'HTML', language: 'html' },
          { code: formJsx, label: 'React JSX', language: 'jsx' },
        ]}>
          <form className="max-w-600">
            <fieldset className="fieldset">
              <legend className="legend mb-16 font-bold">Contact preferences</legend>
              <div className="mb-16">
                <label className="label mb-5" htmlFor="example-email">Email address</label>
                <input className="input" id="example-email" type="email" />
              </div>
              <div className="mb-16">
                <label className="label mb-5" htmlFor="example-topic">Topic</label>
                <select className="select" id="example-topic"><option>Documentation</option><option>Design system</option></select>
              </div>
              <div className="flex items-center gap-8">
                <input className="checkbox" id="example-updates" type="checkbox" />
                <label className="label mb-0" htmlFor="example-updates">Send me project updates</label>
              </div>
            </fieldset>
          </form>
        </ComponentExample>
      </section>

      <section id="validation">
        <h2>Validation</h2>
        <p>Decanter styles the control surface, not validation behavior. Applications must provide:</p>
        <ul>
          <li>A visible label and programmatic name for every control.</li>
          <li>Text error messages linked with <code>aria-describedby</code>.</li>
          <li>Set <code>aria-invalid</code> to <code>true</code> after validation fails.</li>
          <li>Error styling that does not rely on color alone.</li>
          <li>A summary or focused first error for long forms.</li>
        </ul>
      </section>
    </DocPage>
  );
}
