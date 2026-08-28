'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsNavigation } from '@/data/navigation';

function NavigationList() {
  const pathname = usePathname();

  return (
    <div className="space-y-24">
      {docsNavigation.map((group) => (
        <section key={group.title}>
          <h2 className="mb-8 text-14 font-bold uppercase tracking-widest text-cardinal-red">{group.title}</h2>
          <ul className="m-0 list-unstyled p-0">
            {group.items.map((item) => {
              const isCurrent = pathname === item.href;
              return (
                <li className="m-0" key={item.href}>
                  <Link
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`block border-l-3 px-12 py-7 text-15 no-underline ${isCurrent ? 'border-cardinal-red bg-cardinal-red/5 font-bold text-cardinal-red-dark' : 'border-transparent font-normal text-black-80 hocus:border-black-30 hocus:bg-fog-light hocus:text-black hocus:underline'}`}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function DocsSidebar() {
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
}
