import type { Metadata } from 'next';
import { ExternalIcon } from '@/components/icons';
import { PageHeader } from '@/components/pageHeader';
import { showcaseProjects } from '@/data/showcase';

export const metadata: Metadata = {
  title: 'Showcase',
  description: 'Stanford websites and digital products built with Decanter.',
};

export default function ShowcasePage() {
  return (
    <main id="main-content">
      <PageHeader
        description="A selection of Stanford websites and digital products shaped by Decanter’s shared design foundations."
        eyebrow="Showcase"
        title="Built with Decanter"
      />
      <section className="cc rs-py-5">
        <div className="mb-36 flex flex-col gap-18 border-l-5 border-cardinal-red bg-fog-light p-22 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mb-6 text-24">Awesome Decanter</h2>
            <p className="mb-0 max-w-700 text-16 leading-normal text-black-70">Find more community projects and implementation resources in the public Awesome Decanter collection.</p>
          </div>
          <a className="inline-flex shrink-0 items-center gap-8 font-bold text-cardinal-red" href="https://github.com/SU-SWS/Awesome-Decanter/" rel="noreferrer" target="_blank">
            Browse the repository <ExternalIcon className="size-17" />
          </a>
        </div>

        <div className="grid gap-18 md:grid-cols-2 xl:grid-cols-3">
          {showcaseProjects.map((project) => (
            <article className="relative flex min-h-240 flex-col border border-black-20 bg-white p-24 shadow-sm" key={project.url}>
              <p className="mb-16 text-11 font-bold uppercase tracking-[0.12em] text-cardinal-red">{project.category}</p>
              <h2 className="mb-10 text-25 leading-display">
                <a className="stretched-link text-black no-underline hocus:text-cardinal-red hocus:underline" href={project.url} rel="noreferrer" target="_blank">
                  {project.title}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h2>
              <p className="mb-20 grow text-16 leading-normal text-black-70">{project.description}</p>
              <span aria-hidden="true" className="inline-flex items-center gap-7 text-14 font-bold text-cardinal-red">Visit site <ExternalIcon className="size-16" /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="cc rs-py-5">
          <h2 className="mb-12 type-3 text-white">Share your project</h2>
          <p className="mb-18 max-w-700 text-18 leading-normal text-white/75">Are you part of the Stanford digital community? Share what you built and help the Decanter team understand how the system is being used.</p>
          <a className="inline-flex items-center gap-8 bg-white px-18 py-11 font-bold text-black no-underline hocus:bg-fog-light hocus:text-cardinal-red hocus:underline" href="https://stanfordwebservices.slack.com/archives/C9SL2179B" rel="noreferrer" target="_blank">
            Join #decanter on Slack <ExternalIcon className="size-17" />
          </a>
        </div>
      </section>
    </main>
  );
}
