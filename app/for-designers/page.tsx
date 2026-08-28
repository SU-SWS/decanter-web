import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';
import { PageHeader } from '@/components/pageHeader';

export const metadata: Metadata = {
  title: 'Designer resources',
  description: 'Figma, accessibility, identity, typography, grids, and color guidance for designers using Decanter.',
};

const resources = [
  {
    title: 'Figma',
    href: '/for-designers/figma',
    description: 'Access the Decanter design library and understand how design assets relate to the CSS framework.',
  },
  {
    title: 'Accessibility',
    href: '/for-designers/accessibility-notes',
    description: 'Design inclusive interfaces that meet the site’s WCAG 2.1 Level AA target.',
  },
  {
    title: 'Stanford identity',
    href: '/for-designers/stanford-identity-and-brand-compliance',
    description: 'Use Stanford identity elements and Decanter without treating implementation defaults as the full brand policy.',
  },
  {
    title: 'Type, grids, and color',
    href: '/for-designers/type-grids-and-color',
    description: 'Apply Decanter’s type systems, responsive layout rhythm, and Stanford color palette in design work.',
  },
] as const;

export default function DesignerOverviewPage() {
  return (
    <main id="main-content">
      <PageHeader
        description="Design guidance and resources for creating accessible, Stanford-aligned experiences that map cleanly to Decanter’s implementation systems."
        eyebrow="Designer"
        title="Design with Decanter"
      />
      <section className="cc rs-py-5">
        <div className="mb-32 max-w-800">
          <h2 className="mb-14 type-4">One shared language</h2>
          <p className="text-19 leading-normal text-black-70">Decanter connects design decisions to production-ready tokens and utilities. Use these resources to align color, type, spacing, interaction, and accessibility before development begins.</p>
        </div>
        <div className="grid gap-18 md:grid-cols-2">
          {resources.map((resource) => (
            <article className="relative border border-black-20 bg-white p-24 shadow-sm" key={resource.href}>
              <h2 className="mb-10 text-26">
                <Link className="stretched-link text-black no-underline hocus:text-cardinal-red hocus:underline" href={resource.href}>{resource.title}</Link>
              </h2>
              <p className="mb-18 text-17 leading-normal text-black-70">{resource.description}</p>
              <span aria-hidden="true" className="inline-flex items-center gap-7 text-14 font-bold text-cardinal-red">Read guidance <ArrowIcon className="size-17" /></span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
