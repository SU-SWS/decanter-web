import type { Metadata } from 'next';
import Link from 'next/link';
import { ComponentExample } from '@/components/docs/componentExample';
import { PageHeader } from '@/components/pageHeader';
import { GlobalFooter } from '@/components/site/globalFooter';

export const metadata: Metadata = {
  title: 'Global Footer example',
  description: 'Stanford Global Footer implementation used by the Decanter documentation site.',
};

export default function GlobalFooterExamplePage() {
  return (
    <main id="main-content">
      <PageHeader description="The common Stanford links, wordmark, location, and policy links retained by this site." eyebrow="Examples" title="Global Footer" />
      <article className="cc rs-py-5">
        <Link className="mb-24 inline-block text-18 font-bold text-cardinal-red no-underline hocus:underline" href="/examples">← Back to examples</Link>
        <h2>Usage</h2>
        <p>The shared component below is the same Global Footer rendered at the bottom of every page.</p>
        <ComponentExample code={`<footer class="cc w-full bg-cardinal-red text-white basefont-20 rs-py-1">
  <div class="flex flex-col lg:flex-row" title="Common Stanford resources">
    <div class="mt-5 mb-9 text-center">
      <a class="logo inline-block type-3 text-white no-underline hocus:text-white hocus:underline" href="https://www.stanford.edu">
        Stanford<br />University
        <span class="sr-only"> (link is external)</span>
      </a>
    </div>
    <div class="grow text-left sm:text-center lg:pl-45 lg:text-left xl:pl-50">
      <nav aria-label="Global footer menu" class="mb-10 flex flex-row justify-center sm:flex-col sm:items-center lg:items-start">
        <ul class="mr-19 mb-10 flex list-unstyled flex-col p-0 text-15 sm:mr-0 sm:mb-4 sm:flex-row sm:text-14 md:text-17 lg:text-17 2xl:text-18">
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://www.stanford.edu">
              Stanford Home<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://visit.stanford.edu/basics">
              Maps & Directions<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://www.stanford.edu/search/">
              Search Stanford<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li>
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://emergency.stanford.edu">
              Emergency Info<span class="sr-only"> (link is external)</span>
            </a>
          </li>
        </ul>
        <ul class="ml-19 mb-10 flex list-unstyled flex-col p-0 text-15 sm:ml-0 sm:mb-0 sm:flex-row sm:text-14 md:text-15 xl:text-16">
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://www.stanford.edu/terms/">
              Terms of Use<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://www.stanford.edu/privacy/">
              Privacy<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://uit.stanford.edu/security/copyright-infringement">
              Copyright<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4">
              Trademarks<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li class="sm:mr-10 md:mr-20 lg:mr-27">
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination">
              Non-Discrimination<span class="sr-only"> (link is external)</span>
            </a>
          </li>
          <li>
            <a class="text-white no-underline hocus:text-white hocus:underline" href="https://www.stanford.edu/accessibility">
              Accessibility<span class="sr-only"> (link is external)</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="text-center text-13 sm:text-14 lg:text-left">
        <span class="whitespace-nowrap">© Stanford University.</span>
        <span class="whitespace-nowrap"> Stanford, California 94305.</span>
      </div>
    </div>
  </div>
</footer>`} label="HTML" language="html">
          <div className="-mx-20 -mb-20 border-y border-black-20 sm:-mx-28 sm:-mb-28"><GlobalFooter /></div>
        </ComponentExample>
        <p className="max-w-prose-wide">Keep the standard destinations and policy language current. Do not remove the Accessibility or Non-Discrimination links from Stanford’s shared footer.</p>
      </article>
    </main>
  );
}
