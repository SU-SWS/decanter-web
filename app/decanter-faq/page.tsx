import type { Metadata } from 'next';
import { ExternalIcon } from '@/components/Icons';
import { PageHeader } from '@/components/PageHeader';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Frequently asked questions',
  description: 'Frequently asked questions about Decanter’s audience, implementation, governance, accessibility, and support.',
};

export default function FaqPage() {
  return (
    <main id="main-content">
      <PageHeader
        description="Answers about who Decanter serves, what it provides, how it is governed, and where to get help."
        eyebrow="FAQ"
        title="Frequently asked questions"
      />
      <section className="cc rs-py-5">
        <div className="max-w-1000 divide-y divide-black-20 border-y border-black-20">
          {faqItems.map((item, index) => (
            <details className="group py-18" key={item.question}>
              <summary className="flex cursor-pointer list-none items-start gap-14 font-bold text-black hocus:text-cardinal-red">
                <span aria-hidden="true" className="mt-3 shrink-0 text-13 font-bold text-cardinal-red">{String(index + 1).padStart(2, '0')}</span>
                <span className="grow text-20 leading-snug">{item.question}</span>
                <span aria-hidden="true" className="text-24 font-normal">+</span>
              </summary>
              <p className="mt-14 mb-0 max-w-prose-wide pl-38 text-17 leading-normal text-black-70">{item.answer}</p>
            </details>
          ))}
        </div>

        <aside className="mt-40 max-w-1000 border-l-5 border-plum bg-plum-light/10 p-22">
          <h2 className="mb-8 text-24">Still have a question?</h2>
          <p className="mb-14 text-16 leading-normal text-black-70">Use GitHub for bugs and package changes. Stanford community members can also ask implementation questions in the Decanter Slack channel.</p>
          <div className="flex flex-wrap gap-18">
            <a className="inline-flex items-center gap-7 font-bold text-plum-dark" href="https://github.com/SU-SWS/decanter/issues" rel="noreferrer" target="_blank">GitHub issues <ExternalIcon className="size-16" /></a>
            <a className="inline-flex items-center gap-7 font-bold text-plum-dark" href="https://stanfordwebservices.slack.com/archives/C9SL2179B" rel="noreferrer" target="_blank">#decanter on Slack <ExternalIcon className="size-16" /></a>
          </div>
        </aside>
      </section>
    </main>
  );
}
