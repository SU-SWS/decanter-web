import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Base styles',
  description: 'Element-level base styles in Decanter v8 full and minimal entry points.',
};

export default function BaseStylesPage() {
  return (
    <DocPage
      description="Choose between Decanter’s opinionated element defaults and a minimal foundation for applications that already own their base styles."
      eyebrow="Building interfaces"
      headings={[
        { id: 'full-entry', title: 'Full entry' },
        { id: 'minimal-entry', title: 'Minimal entry' },
        { id: 'shared-essentials', title: 'Shared essentials' },
        { id: 'choosing', title: 'Choosing an entry' },
      ]}
      kind="Tailwind overridden"
      title="Base styles"
    >
      <section id="full-entry">
        <h2>Full entry</h2>
        <CodeBlock code="@import 'decanter';" label="app/globals.css" language="css" />
        <p>The default entry styles bare HTML elements so content starts with a coherent Stanford typographic hierarchy:</p>
        <ul>
          <li>Responsive <code>body</code> font sizing and Source Sans 3 stack.</li>
          <li><code>h1</code> through <code>h6</code> mapped to the modular type scale.</li>
          <li>Paragraph spacing and responsive line height.</li>
          <li>Accessible link color, weight, underline, hover, and focus treatment.</li>
          <li>List markers, item rhythm, tables, captions, and code sizing.</li>
        </ul>
      </section>

      <section id="minimal-entry">
        <h2>Minimal entry</h2>
        <CodeBlock code="@import 'decanter/minimal';" label="app/globals.css" language="css" />
        <p>The minimal entry keeps Decanter’s theme, utilities, variants, and component classes while removing element-level typography opinions. It is appropriate when an application or another design system already styles headings, paragraphs, links, and tables.</p>
      </section>

      <section id="shared-essentials">
        <h2>Shared essentials</h2>
        <p>Both entries provide:</p>
        <ul>
          <li>The 62.5% root font size used by Decanter’s pixel-readable scale.</li>
          <li>Tailwind v3-compatible default border color behavior.</li>
          <li>List marker defaults needed after Preflight.</li>
          <li>Every Decanter theme token, utility, component, and custom variant.</li>
        </ul>
      </section>

      <section id="choosing">
        <h2>Choosing an entry</h2>
        <Callout title="Default recommendation">
          <p>Use the full <code>decanter</code> entry for new Stanford sites. Choose <code>decanter/minimal</code> only when another intentional base layer already exists.</p>
        </Callout>
        <p>Do not import both entries. Each includes Tailwind itself, and duplicate imports are not deduplicated.</p>
      </section>
    </DocPage>
  );
}
