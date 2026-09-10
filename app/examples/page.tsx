import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Examples',
  description: 'A focused set of practical implementation examples using Decanter v8.',
};

const examples = [
  {
    title: 'Content patterns',
    href: '/examples/content-patterns',
    description: 'A hero, notice, and one versatile linked-card pattern built from Decanter foundations.',
  },
  {
    title: 'Form elements',
    href: '/examples/form-elements',
    description: 'A practical accessible form using the opt-in Decanter forms entry.',
  },
  {
    title: 'Identity Bar',
    href: '/examples/identity-bar',
    description: 'The Stanford identity treatment retained at the top of this site.',
  },
  {
    title: 'Global Footer',
    href: '/examples/global-footer',
    description: 'The common Stanford links, wordmark, and policy footer used by this site.',
  },
] as const;

export default function ExamplesPage() {
  return (
    <main id="main-content">
      <PageHeader
        description="A smaller, practical collection of patterns that demonstrate Decanter-specific systems without duplicating Tailwind’s layout documentation."
        eyebrow="Examples"
        title="Focused implementation examples"
      />
      <section className="cc rs-py-5">
        <div className="mb-30 max-w-800">
          <p className="intro-text">These examples are intentionally limited. Flexbox, CSS Grid, and general utility composition are covered by Tailwind’s documentation; the examples here focus on Stanford identity and Decanter-specific behavior.</p>
        </div>
        <div className="grid gap-18 md:grid-cols-2">
          {examples.map((example) => (
            <article className="relative border border-black-20 bg-white p-24 shadow-sm" key={example.href}>
              <h2 className="mb-10 text-26"><Link className="stretched-link text-black no-underline hocus:text-cardinal-red hocus:underline" href={example.href}>{example.title}</Link></h2>
              <p className="mb-18 text-17 leading-normal text-black-70">{example.description}</p>
              <span aria-hidden="true" className="inline-flex items-center gap-7 text-14 font-bold text-cardinal-red">View example <ArrowIcon className="size-17" /></span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
