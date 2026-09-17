'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsNavigation } from '@/data/navigation';

const NavigationList = () => {
  const pathname = usePathname();
  const currentPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  return (
    <div className="space-y-24">
      {docsNavigation.map((group) => (
        <section key={group.title}>
          <p className="mb-8 text-14 font-bold uppercase tracking-widest text-cardinal-red">{group.title}</p>
          <ul className="m-0 list-unstyled p-0">
            {group.items.map((item) => {
              const itemPath = item.href.length > 1 ? item.href.replace(/\/+$/, '') : item.href;
              const isCurrent = currentPath === itemPath;
              return (
                <li className="m-0" key={item.href}>
                  <Link
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`flex items-center justify-between gap-8 border-l-4 px-12 py-7 text-15 no-underline ${isCurrent ? 'border-cardinal-red bg-cardinal-red/8 font-bold text-cardinal-red-dark' : 'border-transparent font-normal text-black-80 hocus:border-black-30 hocus:bg-fog-light hocus:text-black hocus:underline'}`}
                    href={item.href}
                  >
                    <span>{item.title}</span>
                    {isCurrent ? <span aria-hidden="true" className="size-7 shrink-0 rounded-full bg-cardinal-red" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
};

export const DocsSidebar = () => {
  return (
    <>
      <details className="docs-mobile-nav border-b border-black-20 bg-fog-light px-20 py-12 lg:hidden">
        <summary className="cursor-pointer font-bold text-black">Developer documentation menu</summary>
        <nav aria-label="Developer documentation" className="pt-20 pb-10">
          <NavigationList />
        </nav>
      </details>
      <aside className="hidden w-260 shrink-0 border-r border-black-20 pr-24 lg:block xl:w-280">
        <nav aria-label="Developer documentation" className="sticky top-0 max-h-screen overflow-y-auto py-32 pr-6">
          <NavigationList />
        </nav>
      </aside>
    </>
  );
};
