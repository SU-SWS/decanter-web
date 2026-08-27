import type { Metadata } from 'next';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Custom utilities',
  description: 'Nested-link and legacy text-shadow utilities in Decanter v8.',
};

export default function UtilitiesPage() {
  return (
    <DocPage
      description="A short reference for custom utilities not already covered by Decanter’s typography and spacing systems."
      eyebrow="Building interfaces"
      headings={[
        { id: 'nested-links', title: 'Nested-link utilities' },
        { id: 'text-shadows', title: 'Legacy text shadows' },
        { id: 'removed', title: 'Removed utilities' },
      ]}
      kind="Decanter only"
      title="Custom utilities"
    >
      <section id="nested-links">
        <h2>Nested-link utilities</h2>
        <p>Use <code>link-*</code> on a container to style links inside markup you do not directly control, such as CMS content or a component slot.</p>
        <div className="table-scroll"><table><thead><tr><th>Utility</th><th>Effect on nested links</th></tr></thead><tbody>
          <tr><td><code>link-&lt;color&gt;</code></td><td>Sets any Decanter palette color.</td></tr>
          <tr><td><code>link-hocus-&lt;color&gt;</code></td><td>Sets hover and focus color.</td></tr>
          <tr><td><code>link-underline</code></td><td>Adds underlines.</td></tr>
          <tr><td><code>link-no-underline</code></td><td>Removes underlines.</td></tr>
          <tr><td><code>link-normal</code></td><td>Uses font weight 400.</td></tr>
          <tr><td><code>link-semibold</code></td><td>Uses font weight 600.</td></tr>
          <tr><td><code>link-bold</code></td><td>Uses font weight 700.</td></tr>
        </tbody></table></div>
        <CodeBlock code={`<nav className="bg-cardinal-red link-white link-hocus-illuminating link-no-underline">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>`} label="React" language="tsx" />
        <Callout title="Direct links use core utilities">
          <p>When you own the link element, style it directly with utilities such as <code>text-digital-blue hocus:text-black</code>.</p>
        </Callout>
      </section>

      <section id="text-shadows">
        <h2>Legacy text shadows</h2>
        <p>Three v7 shadows remain under explicit legacy names for backward compatibility:</p>
        <ul>
          <li><code>text-shadow-legacy</code></li>
          <li><code>text-shadow-legacy-md</code></li>
          <li><code>text-shadow-legacy-lg</code></li>
        </ul>
        <p>Prefer Tailwind v4.1’s native <code>text-shadow-*</code> scale for new interfaces.</p>
      </section>

      <section id="removed">
        <h2>Removed utilities</h2>
        <p><code>backface-hidden</code>, <code>embed-container</code>, <code>text-vertical-lr</code>, and Decanter’s old <code>break-words</code> behavior were removed because Tailwind core or arbitrary properties now cover those needs.</p>
      </section>
    </DocPage>
  );
}
