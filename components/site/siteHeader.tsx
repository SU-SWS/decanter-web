import Link from 'next/link';
import { FigmaIcon, GitHubIcon, MenuIcon } from '@/components/Icons';
import { SearchDialog } from '@/components/site/SearchDialog';
import { decanterLinks } from '@/data/decanter';
import { primaryNavigation } from '@/data/navigation';

export function SiteHeader() {
  return (
    <header className="site-header bg-black text-white">
      <div className="cc flex min-h-72 items-center justify-between gap-20">
        <Link className="flex items-center gap-10 text-white no-underline hocus:text-white hocus:underline" href="/">
          <span className="text-24 font-bold tracking-[-0.02em]">Decanter</span>
          <span className="rounded-[0.3rem] border border-white/30 px-7 py-3 text-12 font-semibold uppercase tracking-[0.08em] text-white/90">
            v8 beta
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-24 lg:flex">
          {primaryNavigation.map((item) => (
            <Link className="text-16 font-semibold text-white no-underline hocus:text-white hocus:underline" href={item.href} key={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-10">
          <SearchDialog />
          <a
            aria-label="Decanter on GitHub (opens in a new tab)"
            className="hidden rounded-[0.3rem] p-8 text-white hocus:bg-white/10 hocus:text-white sm:inline-flex"
            href={decanterLinks.github}
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon className="size-24" />
          </a>
          <a
            aria-label="Decanter design library on Figma (opens in a new tab)"
            className="hidden rounded-[0.3rem] p-8 text-white hocus:bg-white/10 hocus:text-white sm:inline-flex"
            href={decanterLinks.figma}
            rel="noreferrer"
            target="_blank"
          >
            <FigmaIcon className="size-24" />
          </a>
          <details className="site-mobile-menu relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-[0.3rem] p-8 text-white hocus:bg-white/10">
              <MenuIcon className="size-26" />
              <span className="sr-only">Open site navigation</span>
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 z-50 mt-10 w-260 border border-black-20 bg-white p-12 shadow-xl">
              <ul className="m-0 list-unstyled p-0">
                {primaryNavigation.map((item) => (
                  <li className="m-0" key={item.href}>
                    <Link className="block px-12 py-10 text-16 text-black no-underline hocus:bg-fog-light hocus:text-cardinal-red hocus:underline" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
