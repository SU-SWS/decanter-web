import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon, CheckIcon } from '@/components/icons';
import { CodeBlock } from '@/components/docs/codeBlock';

export const metadata: Metadata = {
  title: 'Stanford’s design system for Tailwind CSS',
  description: 'Build accessible, Stanford-branded digital experiences with Decanter v8 and Tailwind CSS v4.',
};

const installCommand = 'npm install -D tailwindcss @tailwindcss/postcss decanter@beta';
const cssImport = `@import 'decanter';
@import 'decanter/forms'; /* optional */`;

const differences = [
  {
    label: 'Decanter only',
    title: 'Stanford design language',
    description: 'Identity colors, responsive type systems, screen margins, components, and accessible interaction variants.',
    href: '/docs',
    tone: 'border-cardinal-red',
  },
  {
    label: 'Tailwind overridden',
    title: 'Defaults tuned for Stanford',
    description: 'A pixel-readable spacing scale, Stanford breakpoints, type stacks, line heights, and a 62.5% root size.',
    href: '/docs/tailwind-overrides',
    tone: 'border-plum',
  },
  {
    label: 'Tailwind extended',
    title: 'More expressive utilities',
    description: 'Fluid and modular type, responsive spacing, 3xl and 4xl screens, centered containers, and hocus variants.',
    href: '/docs/fluid-typography',
    tone: 'border-digital-blue',
  },
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-surface homepage-grid text-white">
        <div className="cc grid items-center gap-48 rs-py-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(38rem,0.95fr)] xl:gap-80">
          <div>
            <div className="mb-20 flex flex-wrap items-center gap-10">
              <span className="rounded-[999px] border border-digital-red-xlight/40 bg-digital-red-xlight/10 px-10 py-5 text-12 font-bold uppercase tracking-[0.12em] text-digital-red-xlight">
                Decanter 8 beta
              </span>
              <span className="text-14 text-white/65">CSS-first · Tailwind CSS v4</span>
            </div>
            <h1 className="mb-20 max-w-900 fluid-type-6 tracking-[-0.035em] text-white">
              Stanford’s design system for modern CSS.
            </h1>
            <p className="mb-28 max-w-700 text-20 leading-normal text-white/80 md:text-23">
              Build accessible, distinctly Stanford digital experiences with a focused layer of design tokens, components, and utilities on top of Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-12">
              <Link className="inline-flex items-center gap-8 bg-white px-20 py-12 text-16 font-bold text-black no-underline hocus:bg-fog-light hocus:text-cardinal-red hocus:underline" href="/docs">
                Read the developer docs <ArrowIcon className="size-18" />
              </Link>
              <Link className="inline-flex items-center border border-white/40 px-20 py-12 text-16 font-bold text-white no-underline hocus:bg-white/10 hocus:text-white hocus:underline" href="/docs/installation">
                Install Decanter
              </Link>
            </div>
          </div>
          <div className="home-code min-w-0 rounded-[0.8rem] border border-white/15 bg-black/85 p-8">
            <CodeBlock code={installCommand} label="Terminal" />
            <CodeBlock code={cssImport} label="app/globals.css" language="css" />
            <div className="flex items-center gap-8 px-16 pb-14 text-13 text-white/65">
              <CheckIcon className="size-17 text-digital-green-light" />
              No JavaScript config. No duplicate Tailwind import.
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black-20 bg-fog-light">
        <div className="cc flex flex-col gap-14 py-18 text-14 text-black-80 md:flex-row md:items-center md:justify-between">
          <p className="m-0"><strong className="text-black">Beta documentation:</strong> This site follows Decanter <code>8.0.0-beta.0</code>.</p>
          <Link className="font-bold text-cardinal-red" href="/docs/upgrade-v7">Upgrading from v7? Start here →</Link>
        </div>
      </section>

      <section className="cc rs-py-6">
        <div className="mb-38 max-w-800">
          <p className="mb-10 text-13 font-bold uppercase tracking-[0.14em] text-cardinal-red">Focused documentation</p>
          <h2 className="mb-16 fluid-type-4 tracking-[-0.025em]">Learn what Decanter changes.</h2>
          <p className="mb-0 text-20 leading-normal text-black-70">Tailwind already documents its core utilities. This site concentrates on the parts that are unique to Decanter, or behave differently after Decanter is imported.</p>
        </div>
        <div className="grid gap-18 lg:grid-cols-3">
          {differences.map((item) => (
            <article className={`relative border-t-5 border-x border-b border-x-black-20 border-b-black-20 bg-white p-24 shadow-sm ${item.tone}`} key={item.title}>
              <p className="mb-10 text-12 font-bold uppercase tracking-[0.12em] text-black-60">{item.label}</p>
              <h3 className="mb-10 text-25 leading-display">
                <Link className="stretched-link text-black no-underline hocus:text-cardinal-red hocus:underline" href={item.href}>{item.title}</Link>
              </h3>
              <p className="mb-0 text-17 leading-normal text-black-70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="cc grid gap-48 rs-py-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-10 text-13 font-bold uppercase tracking-[0.14em] text-digital-red-xlight">Responsive by design</p>
            <h2 className="mb-16 fluid-type-4 tracking-[-0.025em] text-white">One spacing class. Three intentional steps.</h2>
            <p className="mb-22 max-w-700 text-19 leading-normal text-white/75">
              Decanter’s responsive spacing utilities encode Stanford’s layout rhythm without repeating breakpoint modifiers throughout your markup.
            </p>
            <CodeBlock code={'<section className="rs-py-4">\n  Responsive section content\n</section>'} label="React" language="tsx" />
            <Link className="inline-flex items-center gap-7 font-bold text-digital-blue-light hocus:text-white" href="/docs/responsive-spacing">
              Explore responsive spacing <ArrowIcon className="size-17" />
            </Link>
          </div>
          <div className="border border-white/15 bg-white/5 p-20 sm:p-30">
            <div className="rs-py-4 bg-plum text-center text-16 font-bold text-white">
              <span className="block sm:hidden">34px vertical padding</span>
              <span className="hidden sm:block 2xl:hidden">58px vertical padding at md</span>
              <span className="hidden 2xl:block">61px vertical padding at 2xl</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cc rs-py-6">
        <div className="grid gap-40 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <p className="mb-10 text-13 font-bold uppercase tracking-[0.14em] text-cardinal-red">Know the override</p>
            <h2 className="mb-16 fluid-type-4 tracking-[-0.025em]">Familiar classes, different scale.</h2>
            <p className="text-19 leading-normal text-black-70">Decanter’s 62.5% root font size and <code>0.1rem</code> spacing unit make numeric utilities read like pixels. That is convenient—but important to understand when bringing in stock Tailwind markup.</p>
            <Link className="inline-flex items-center gap-7 font-bold text-cardinal-red" href="/docs/tailwind-overrides">
              Review every override <ArrowIcon className="size-17" />
            </Link>
          </div>
          <div className="table-scroll overflow-x-auto border border-black-20">
            <table>
              <thead className="bg-fog-light">
                <tr><th>Class</th><th>Tailwind core</th><th>With Decanter</th></tr>
              </thead>
              <tbody>
                <tr><td><code>p-4</code></td><td>16px</td><td><strong>4px</strong></td></tr>
                <tr><td><code>p-16</code></td><td>64px</td><td><strong>16px</strong></td></tr>
                <tr><td><code>lg:</code></td><td>1024px</td><td><strong>992px</strong></td></tr>
                <tr><td><code>2xl:</code></td><td>1536px</td><td><strong>1500px</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-black-20 bg-fog-light">
        <div className="cc grid gap-24 rs-py-5 md:grid-cols-3">
          <Link className="group block border border-black-20 bg-white p-24 text-black no-underline hocus:border-cardinal-red hocus:text-cardinal-red" href="/docs">
            <span className="mb-8 block text-12 font-bold uppercase tracking-[0.12em] text-black-60">Developers</span>
            <strong className="block text-24">Build with Decanter</strong>
            <span className="mt-8 block text-16 font-normal leading-normal text-black-70">Installation, foundations, components, utilities, and migration.</span>
          </Link>
          <Link className="group block border border-black-20 bg-white p-24 text-black no-underline hocus:border-cardinal-red hocus:text-cardinal-red" href="/for-designers">
            <span className="mb-8 block text-12 font-bold uppercase tracking-[0.12em] text-black-60">Designers</span>
            <strong className="block text-24">Design with Decanter</strong>
            <span className="mt-8 block text-16 font-normal leading-normal text-black-70">Figma, identity, accessibility, typography, grids, and color.</span>
          </Link>
          <Link className="group block border border-black-20 bg-white p-24 text-black no-underline hocus:border-cardinal-red hocus:text-cardinal-red" href="/showcase">
            <span className="mb-8 block text-12 font-bold uppercase tracking-[0.12em] text-black-60">Showcase</span>
            <strong className="block text-24">See Decanter in use</strong>
            <span className="mt-8 block text-16 font-normal leading-normal text-black-70">Explore Stanford products built on the shared design system.</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
