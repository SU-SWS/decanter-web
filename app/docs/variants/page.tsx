import type { Metadata } from 'next';
import { Callout } from '@/components/docs/Callout';
import { ComponentExample } from '@/components/docs/ComponentExample';
import { DocPage } from '@/components/docs/DocPage';

export const metadata: Metadata = {
  title: 'Custom variants',
  description: 'Accessible hover and focus variants in Decanter v8.',
};

export default function VariantsPage() {
  return (
    <DocPage
      description="Combined hover and focus variants keep pointer and keyboard affordances aligned without duplicating every state class."
      eyebrow="Building interfaces"
      headings={[
        { id: 'variants', title: 'Variants' },
        { id: 'why', title: 'Why use them' },
        { id: 'examples', title: 'Examples' },
        { id: 'choosing', title: 'Choosing a variant' },
      ]}
      kind="Decanter only"
      title="Custom variants"
    >
      <section id="variants">
        <h2>Variants</h2>
        <div className="table-scroll"><table><thead><tr><th>Variant</th><th>Applies when</th></tr></thead><tbody>
          <tr><td><code>hocus:</code></td><td>The element is hovered or focused.</td></tr>
          <tr><td><code>hocus-visible:</code></td><td>The element is hovered or keyboard-focused.</td></tr>
          <tr><td><code>hocus-within:</code></td><td>The element is hovered or contains focus.</td></tr>
          <tr><td><code>group-hocus:</code></td><td>A parent group is hovered or focused.</td></tr>
          <tr><td><code>group-hocus-visible:</code></td><td>A parent group is hovered or keyboard-focused.</td></tr>
          <tr><td><code>group-hocus-within:</code></td><td>A parent group is hovered or contains focus.</td></tr>
        </tbody></table></div>
      </section>

      <section id="why">
        <h2>Why use them</h2>
        <p><code>hocus:underline</code> replaces the repeated pair <code>hover:underline focus:underline</code>. That keeps keyboard focus treatment from drifting away from pointer behavior during maintenance.</p>
        <Callout title="Focus still needs to be visible" variant="important">
          <p>Do not use these variants to remove focus indicators. Combined state styling complements the browser or application focus ring.</p>
        </Callout>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <ComponentExample code={`<a className="bg-digital-red px-16 py-10 text-white hocus:bg-black hocus:underline" href="/learn">
  Learn more
</a>

<button className="border border-digital-blue px-16 py-10 hocus-visible:bg-digital-blue hocus-visible:text-white">
  Save
</button>

<div className="border border-black-20 hocus-within:border-digital-green">
  <label className="label" htmlFor="search">Search</label>
  <input className="input" id="search" type="search" />
</div>`}>
          <div className="grid gap-20 sm:grid-cols-2">
            <div className="flex flex-wrap items-start gap-14">
              <a className="bg-digital-red px-16 py-10 text-white no-underline hocus:bg-black hocus:text-white hocus:underline" href="#choosing">Learn more</a>
              <button className="border border-digital-blue px-16 py-10 hocus-visible:bg-digital-blue hocus-visible:text-white" type="button">Save</button>
            </div>
            <div className="border border-black-20 bg-white p-14 hocus-within:border-digital-green">
              <label className="label mb-5" htmlFor="variant-search">Search</label>
              <input className="input" id="variant-search" type="search" />
            </div>
          </div>
        </ComponentExample>
      </section>

      <section id="choosing">
        <h2>Choosing a variant</h2>
        <ul>
          <li>Use <code>hocus:</code> for ordinary links and buttons when focus should mirror hover.</li>
          <li>Use <code>hocus-visible:</code> when focus styling would be visually intrusive after a pointer click.</li>
          <li>Use <code>hocus-within:</code> on form groups, composite widgets, and containers that react to focused descendants.</li>
        </ul>
      </section>
    </DocPage>
  );
}
