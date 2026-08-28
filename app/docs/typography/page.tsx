import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';
import { ComponentExample } from '@/components/docs/component-example';
import { DocPage } from '@/components/docs/doc-page';

export const metadata: Metadata = {
  title: 'Typography',
  description: 'Font families, base sizes, text styles, and line heights in Decanter v8.',
};

const textStyles = [
  ['splash-text', 'Hero display text', 'Responsive type-6 sizing with heading styles'],
  ['intro-text', 'Opening paragraph', 'Type-2 sizing with a 65ch maximum width'],
  ['big-paragraph', 'Emphasized body copy', '1.15em with responsive line height'],
  ['card-paragraph', 'Card teaser', 'Never smaller than 16px'],
  ['subheading', 'Supporting heading copy', 'Responsive type-1 sizing'],
  ['quote-text', 'Pull quotation', '1.25em italic'],
  ['caption', 'Caption on any element', 'At least 16px with snug leading'],
  ['types', 'Heading treatment without size', 'Combine with a type-* class'],
] as const;

export default function TypographyPage() {
  return (
    <DocPage
      description="Decanter supplies Stanford font stacks, responsive base sizes, semantic text styles, and an intentional line-height scale."
      eyebrow="Foundations"
      headings={[
        { id: 'font-families', title: 'Font families' },
        { id: 'loading-fonts', title: 'Loading fonts' },
        { id: 'body-and-headings', title: 'Body and headings' },
        { id: 'base-fonts', title: 'Base font containers' },
        { id: 'text-styles', title: 'Text styles' },
        { id: 'line-heights', title: 'Line heights' },
      ]}
      kind="Tailwind overridden"
      title="Typography"
    >
      <section id="font-families">
        <h2>Font families</h2>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Leading family</th><th>Use</th></tr></thead><tbody>
          <tr><td><code>font-sans</code></td><td>Source Sans 3</td><td>Default interface and body text</td></tr>
          <tr><td><code>font-serif</code></td><td>Source Serif 4</td><td>Editorial and display text</td></tr>
          <tr><td><code>font-mono</code></td><td>Roboto Mono <span className="text-black-60">(site override)</span></td><td>Code samples and technical data on this site</td></tr>
          <tr><td><code>font-stanford</code></td><td>Stanford</td><td>Stanford wordmark only</td></tr>
        </tbody></table></div>
        <ComponentExample code={`<p className="font-sans">Source Sans 3</p>
<p className="font-serif">Source Serif 4</p>
<p className="font-mono">Roboto Mono</p>`}>
          <div className="space-y-12">
            <p className="m-0 font-sans text-24">Source Sans 3</p>
            <p className="m-0 font-serif text-24">Source Serif 4</p>
            <p className="m-0 font-mono text-20">Roboto Mono</p>
          </div>
        </ComponentExample>
        <Callout title="Fonts are referenced, not bundled">
          <p>Decanter provides font-family utilities but does not download font files. This documentation site overrides Tailwind’s <code>font-mono</code> token with Roboto Mono. Load only the families and weights the project actually uses.</p>
        </Callout>
      </section>

      <section id="loading-fonts">
        <h2>Loading fonts</h2>
        <p>For Source Sans 3, Source Serif 4, and this site’s Roboto Mono code face, use framework font tooling, self-hosted files, or an optimized stylesheet link. Decanter uses weights 400, 600, and 700 plus italics for its core text families.</p>
        <CodeBlock code={`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
/>`} label="app/layout.tsx" language="tsx" />
      </section>

      <section id="body-and-headings">
        <h2>Body and headings</h2>
        <p>The full entry sets body text to 18px, 19px at <code>md</code>, and 21px at <code>2xl</code>. Headings use the modular scale:</p>
        <div className="table-scroll"><table><thead><tr><th>Element</th><th>Size utility</th></tr></thead><tbody>
          <tr><td><code>h1</code></td><td><code>type-5</code></td></tr>
          <tr><td><code>h2</code></td><td><code>type-4</code></td></tr>
          <tr><td><code>h3</code></td><td><code>type-3</code></td></tr>
          <tr><td><code>h4</code></td><td><code>type-2</code></td></tr>
          <tr><td><code>h5</code></td><td><code>type-1</code></td></tr>
          <tr><td><code>h6</code></td><td><code>type-0</code></td></tr>
        </tbody></table></div>
        <p><Link href="/docs/modular-typography">Explore the modular scale</Link> or use <Link href="/docs/fluid-typography">fluid typography</Link> for viewport-clamped display text.</p>
      </section>

      <section id="base-fonts">
        <h2>Base font containers</h2>
        <p><code>basefont-19</code> through <code>basefont-23</code> set responsive container sizes so all em-based type inside scales together. The default body behaves like <code>basefont-21</code>.</p>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Base</th><th>md</th><th>2xl</th></tr></thead><tbody>
          <tr><td><code>basefont-19</code></td><td>16px</td><td>18px</td><td>19px</td></tr>
          <tr><td><code>basefont-20</code></td><td>18px</td><td>19px</td><td>20px</td></tr>
          <tr><td><code>basefont-21</code></td><td>18px</td><td>19px</td><td>21px</td></tr>
          <tr><td><code>basefont-22</code></td><td>18px</td><td>20px</td><td>22px</td></tr>
          <tr><td><code>basefont-23</code></td><td>18px</td><td>21px</td><td>23px</td></tr>
        </tbody></table></div>
      </section>

      <section id="text-styles">
        <h2>Text styles</h2>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Purpose</th><th>Key behavior</th></tr></thead><tbody>
          {textStyles.map(([name, purpose, behavior]) => <tr key={name}><td><code>{name}</code></td><td>{purpose}</td><td>{behavior}</td></tr>)}
        </tbody></table></div>
      </section>

      <section id="line-heights">
        <h2>Line heights</h2>
        <div className="table-scroll"><table><thead><tr><th>Class</th><th>Value</th><th>Typical use</th></tr></thead><tbody>
          <tr><td><code>leading-half</code></td><td>0.5</td><td>Tightly cropped display text</td></tr>
          <tr><td><code>leading-trim</code></td><td>0.75</td><td>Wordmarks</td></tr>
          <tr><td><code>leading-tight</code></td><td>1.1</td><td>Very large display text</td></tr>
          <tr><td><code>leading-display</code></td><td>1.2</td><td>Headings</td></tr>
          <tr><td><code>leading-snug</code></td><td>1.3</td><td>Captions and cards</td></tr>
          <tr><td><code>leading-cozy</code></td><td>1.4</td><td>Compact body text</td></tr>
          <tr><td><code>leading-normal</code></td><td>1.5</td><td>Body text</td></tr>
        </tbody></table></div>
      </section>
    </DocPage>
  );
}
