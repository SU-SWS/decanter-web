'use client';

import { useEffect, useState } from 'react';

export type PageHeading = {
  id: string;
  title: string;
};

type OnThisPageNavProps = {
  headings: PageHeading[];
};

const activeOffset = 120;

export const OnThisPageNav = ({ headings }: OnThisPageNavProps) => {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const sections = headings
        .map((heading) => document.getElementById(heading.id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) return;

      let nextId = sections[0].id;
      const pageBottom = window.scrollY + window.innerHeight;
      const atPageBottom = pageBottom >= document.documentElement.scrollHeight - 2;

      if (atPageBottom) {
        nextId = sections.at(-1)?.id ?? nextId;
      } else {
        for (const section of sections) {
          if (section.getBoundingClientRect().top > activeOffset) break;
          nextId = section.id;
        }
      }

      setActiveId((currentId) => currentId === nextId ? currentId : nextId);
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveSection();
      });
    };

    requestUpdate();
    window.addEventListener('hashchange', requestUpdate);
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('scroll', requestUpdate, { passive: true });

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('hashchange', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('scroll', requestUpdate);
    };
  }, [headings]);

  return (
    <nav aria-label="On this page" className="sticky top-24 py-40">
      <p className="mb-10 text-12 font-bold uppercase tracking-[0.12em] text-black-60">On this page</p>
      <ul className="m-0 list-unstyled border-l border-black-20 p-0">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li className="m-0" key={heading.id}>
              <a
                aria-current={isActive ? 'location' : undefined}
                className={`flex items-start gap-8 border-l-3 px-14 py-7 text-14 leading-snug no-underline ${isActive ? 'border-cardinal-red bg-cardinal-red/8 font-semibold text-cardinal-red-dark' : 'border-transparent font-normal text-black-70 hocus:border-cardinal-red hocus:text-cardinal-red hocus:underline'}`}
                href={`#${heading.id}`}
                onClick={() => setActiveId(heading.id)}
              >
                <span aria-hidden="true" className={`mt-6 size-6 shrink-0 rounded-full ${isActive ? 'bg-cardinal-red' : 'bg-transparent'}`} />
                <span>{heading.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
