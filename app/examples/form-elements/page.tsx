import type { Metadata } from 'next';
import { ComponentExample } from '@/components/docs/componentExample';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Form example',
  description: 'An accessible form example using the Decanter v8 form classes.',
};

const formCode = `<form>
  <fieldset className="fieldset">
    <legend className="legend">Request documentation help</legend>
    <p id="form-instructions">All fields are required unless marked optional.</p>

    <label className="label" htmlFor="name">Name</label>
    <input aria-describedby="form-instructions" className="input" id="name" required type="text" />

    <label className="label" htmlFor="email">Email</label>
    <input className="input" id="email" required type="email" />

    <label className="label" htmlFor="topic">Topic</label>
    <select className="select" id="topic" required>
      <option value="">Choose a topic</option>
      <option>Installation</option>
      <option>Typography</option>
    </select>

    <label className="label" htmlFor="question">Question</label>
    <textarea className="textarea" id="question" required />

    <input className="checkbox" id="copy" type="checkbox" />
    <label className="label" htmlFor="copy">Email me a copy (optional)</label>

    <button className="button" type="submit">Send request</button>
  </fieldset>
</form>`;

export default function FormExamplePage() {
  return (
    <main id="main-content">
      <PageHeader description="A focused form using visible labels, useful instructions, grouped choices, and Decanter’s opt-in form classes." eyebrow="Examples" title="Form elements" />
      <article className="cc rs-py-5">
        <section>
          <h2>Complete form</h2>
          <p>Decanter provides the visual foundation. The application still owns submission, validation, error messaging, security, and success feedback.</p>
          <ComponentExample code={formCode}>
          <form className="max-w-700 border border-black-20 bg-fog-light p-24">
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
          </ComponentExample>
        </section>
      </article>
    </main>
  );
}
