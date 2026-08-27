import type { Metadata } from 'next';
import { DocPage } from '@/components/docs/doc-page';
import { FeatureCard } from '@/components/docs/feature-card';
import { docsNavigation } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Developer documentation',
  description: 'Developer documentation for the custom foundations, components, utilities, variants, and Tailwind overrides in Decanter v8.',
};

export default function DeveloperOverviewPage() {
  return (
    <DocPage
      description="A focused guide to the Stanford-specific systems Decanter adds to Tailwind CSS v4—and the Tailwind defaults it intentionally changes."
      eyebrow="Developers"
      headings={[
        { id: 'documentation-scope', title: 'Documentation scope' },
        { id: 'foundations', title: 'Foundations' },
        { id: 'building-interfaces', title: 'Building interfaces' },
      ]}
      title="Build with Decanter"
    >
      <section id="documentation-scope">
        <h2>Documentation scope</h2>
        <p>Decanter is a CSS-first preset for Tailwind CSS v4. Core Tailwind utilities such as flexbox, grid, positioning, transforms, and effects work normally and are documented by Tailwind. This site documents only:</p>
        <ul>
          <li>Classes, components, variants, and theme tokens provided by Decanter.</li>
          <li>Core Tailwind defaults that Decanter overrides or extends.</li>
          <li>Migration details that affect projects moving from Decanter v7.</li>
          <li>Stanford design and accessibility guidance needed to use the system well.</li>
        </ul>
      </section>

      <section id="foundations">
        <h2>Foundations</h2>
        <div className="grid gap-16 md:grid-cols-2">
          {docsNavigation[1].items.map((item) => (
            <FeatureCard description={item.description} href={item.href} key={item.href} label="Foundation" title={item.title} />
          ))}
        </div>
      </section>

      <section id="building-interfaces">
        <h2>Building interfaces</h2>
        <div className="grid gap-16 md:grid-cols-2">
          {docsNavigation[2].items.map((item) => (
            <FeatureCard description={item.description} href={item.href} key={item.href} label="Reference" title={item.title} />
          ))}
        </div>
      </section>
    </DocPage>
  );
}
