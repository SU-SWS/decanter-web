import { OnThisPageNav, type PageHeading } from '@/components/docs/OnThisPageNav';

type DocPageProps = {
  children: React.ReactNode;
  description: string;
  eyebrow: string;
  headings?: PageHeading[];
  kind?: 'Decanter only' | 'Tailwind overridden' | 'Tailwind extended' | 'Guide';
  title: string;
};

const kindStyles = {
  'Decanter only': 'border-cardinal-red/25 bg-cardinal-red/8 text-cardinal-red-dark',
  'Tailwind overridden': 'border-plum/25 bg-plum/8 text-plum-dark',
  'Tailwind extended': 'border-digital-blue/25 bg-digital-blue/8 text-digital-blue-dark',
  Guide: 'border-black-20 bg-fog-light text-black-80',
};

export const DocPage = ({ children, description, eyebrow, headings = [], kind = 'Guide', title }: DocPageProps) => {
  return (
    <main className="min-w-0 grow" id="main-content">
      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_220px] xl:gap-48">
        <article className="doc-prose min-w-0 rs-py-4">
          <header className="mb-40 border-b border-black-20 pb-30">
            <div className="mb-14 flex flex-wrap items-center gap-10">
              <span className="text-13 font-bold uppercase tracking-widest text-cardinal-red">{eyebrow}</span>
              <span className={`rounded-[999px] border px-9 py-4 text-12 font-semibold ${kindStyles[kind]}`}>{kind}</span>
            </div>
            <h1 className="mb-16 max-w-prose-wide fluid-type-5 text-black">{title}</h1>
            <p className="mb-0 max-w-prose text-20 leading-normal text-black-70 md:text-22">{description}</p>
          </header>
          {children}
        </article>
        {headings.length > 0 ? (
          <aside className="hidden xl:block">
            <OnThisPageNav headings={headings} />
          </aside>
        ) : null}
      </div>
    </main>
  );
};
