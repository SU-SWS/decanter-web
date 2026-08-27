import type { Metadata } from 'next';
import { CodeBlock } from '@/components/docs/code-block';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Form example',
  description: 'An accessible form example using the Decanter v8 form classes.',
};

export default function FormExamplePage() {
  return (
    <main id="main-content">
      <PageHeader description="A focused form using visible labels, useful instructions, grouped choices, and Decanter’s opt-in form classes." eyebrow="Examples" title="Form elements" />
      <article className="cc grid gap-40 rs-py-5 lg:grid-cols-2 lg:items-start">
        <section>
          <h2>Rendered example</h2>
          <form className="mt-20 border border-black-20 bg-fog-light p-24">
            <fieldset className="fieldset">
              <legend className="legend mb-6 type-2 font-bold">Request documentation help</legend>
              <p className="mb-22 text-16 leading-normal text-black-70" id="form-instructions">All fields are required unless marked optional.</p>
              <div className="mb-18">
                <label className="label mb-5 font-semibold" htmlFor="help-name">Name</label>
                <input aria-describedby="form-instructions" className="input" id="help-name" name="name" required type="text" />
              </div>
              <div className="mb-18">
                <label className="label mb-5 font-semibold" htmlFor="help-email">Email</label>
                <input className="input" id="help-email" name="email" required type="email" />
              </div>
              <div className="mb-18">
                <label className="label mb-5 font-semibold" htmlFor="help-topic">Topic</label>
                <select className="select" defaultValue="" id="help-topic" name="topic" required>
                  <option disabled value="">Choose a topic</option>
                  <option>Installation</option><option>Typography</option><option>Components</option><option>Accessibility</option>
                </select>
              </div>
              <div className="mb-18">
                <label className="label mb-5 font-semibold" htmlFor="help-message">Question</label>
                <textarea className="textarea" id="help-message" name="message" required />
              </div>
              <div className="mb-22 flex items-start gap-10">
                <input className="checkbox mt-2" id="help-copy" name="copy" type="checkbox" />
                <label className="label mb-0" htmlFor="help-copy">Email me a copy <span className="text-black-60">(optional)</span></label>
              </div>
              <button className="button" type="button">Send request</button>
            </fieldset>
          </form>
        </section>
        <section>
          <h2>Implementation</h2>
          <p>Decanter provides the visual foundation. The application still owns submission, validation, error messaging, security, and success feedback.</p>
          <CodeBlock code={`<label className="label" htmlFor="email">Email</label>
<input
  aria-describedby="email-error"
  aria-invalid={hasError}
  className="input"
  id="email"
  required
  type="email"
/>
{hasError && <p id="email-error">Enter a valid email address.</p>}`} label="React" language="tsx" />
        </section>
      </article>
    </main>
  );
}
