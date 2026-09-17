import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Accessibility for designers',
  description: 'WCAG 2.1 design guidance for Decanter interfaces.',
};

const checklist = [
  ['Color and contrast', 'Verify 4.5:1 for normal text, 3:1 for large text, and 3:1 for meaningful interface boundaries. Never use color as the only signal.'],
  ['Keyboard and focus', 'Specify a logical order, visible focus, skip navigation, and complete states for every interactive element.'],
  ['Zoom and reflow', 'Design layouts that work at 200% zoom and reflow at 320 CSS pixels without two-dimensional scrolling.'],
  ['Content structure', 'Use a meaningful heading hierarchy, descriptive link text, concise labels, and instructions that appear before they are needed.'],
  ['Forms and errors', 'Pair every input with a visible label and provide persistent, text-based instructions and errors.'],
  ['Motion and media', 'Avoid unnecessary motion, provide controls for time-based content, and plan captions, transcripts, and text alternatives.'],
] as const;

export default function DesignerAccessibilityPage() {
  return (
    <main id="main-content">
      <PageHeader description="Decanter provides an accessible foundation, but compliance depends on every product’s content, structure, states, and testing." eyebrow="Designer" title="Accessibility" />
      <article className="cc rs-py-5">
        <div className="max-w-prose-wide">
          <p className="intro-text">This documentation site targets WCAG 2.1 Level AA. Treat accessibility as a design requirement from the first sketch, not a final implementation review.</p>
        </div>
        <div className="mt-32 grid gap-18 md:grid-cols-2">
          {checklist.map(([title, description], index) => (
            <section className="border border-black-20 bg-white p-22" key={title}>
              <p className="mb-8 text-12 font-bold uppercase tracking-[0.12em] text-cardinal-red">0{index + 1}</p>
              <h2 className="mb-10 text-24">{title}</h2>
              <p className="mb-0 text-16 leading-normal text-black-70">{description}</p>
            </section>
          ))}
        </div>
        <section className="mt-40 border-l-5 border-digital-blue bg-digital-blue-light/15 p-22">
          <h2 className="mb-10 text-24">Shared responsibility</h2>
          <p className="mb-0 max-w-prose-wide text-17 leading-normal">A conforming design system cannot make an application conform automatically. Teams still need semantic implementation, real content review, keyboard and screen-reader testing, automated checks, zoom testing, and remediation before release.</p>
        </section>
      </article>
    </main>
  );
}
