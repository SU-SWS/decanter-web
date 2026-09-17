'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CloseIcon, SearchIcon } from '@/components/Icons';
import { searchEntries } from '@/data/navigation';

export function SearchDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchEntries.slice(0, 8);

    return searchEntries.filter((entry) => (
      [entry.title, entry.description, ...(entry.keywords ?? [])]
        .join(' ')
        .toLowerCase()
        .includes(normalized)
    )).slice(0, 10);
  }, [query]);

  const open = () => {
    dialogRef.current?.showModal();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  const close = () => {
    dialogRef.current?.close();
    setQuery('');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.matches('input, textarea, select, [contenteditable="true"]');
      if ((event.key === '/' && !isTyping) || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k')) {
        event.preventDefault();
        open();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        aria-keyshortcuts="Control+K Meta+K /"
        className="flex items-center gap-8 rounded-[0.3rem] border border-white/25 bg-white/5 px-10 py-8 text-14 font-semibold text-white hocus:bg-white/10"
        onClick={open}
        type="button"
      >
        <SearchIcon className="size-20" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded-[0.3rem] bg-white/10 px-6 py-2 text-11 font-normal text-white/80 xl:inline">⌘ K</kbd>
      </button>
      <dialog
        aria-labelledby="search-title"
        className="search-dialog m-auto w-[min(68rem,calc(100%-4rem))] border-0 bg-transparent p-0"
        onClick={(event) => {
          if (event.currentTarget === event.target) close();
        }}
        ref={dialogRef}
      >
        <div className="overflow-hidden rounded-[0.6rem] border border-black-20 bg-white shadow-2xl">
          <div className="flex items-center gap-10 border-b border-black-20 px-16 py-12">
            <SearchIcon className="size-22 shrink-0 text-black-60" />
            <label className="sr-only" htmlFor="site-search" id="search-title">Search Decanter documentation</label>
            <input
              autoComplete="off"
              className="w-full border-0 bg-transparent p-0 text-18 text-black outline-0 placeholder:text-black-50"
              id="site-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Decanter documentation"
              ref={inputRef}
              type="search"
              value={query}
            />
            <button aria-label="Close search" className="rounded-[0.3rem] p-6 text-black-70 hocus:bg-fog-light hocus:text-black" onClick={close} type="button">
              <CloseIcon className="size-22" />
            </button>
          </div>
          <div aria-live="polite" className="max-h-[60vh] overflow-y-auto p-8">
            {results.length > 0 ? (
              <ul className="m-0 list-unstyled p-0">
                {results.map((entry) => (
                  <li className="m-0" key={entry.href}>
                    <Link className="block rounded-[0.3rem] px-14 py-11 text-black no-underline hocus:bg-fog-light hocus:text-cardinal-red" href={entry.href} onClick={close}>
                      <span className="block text-16 font-bold">{entry.title}</span>
                      <span className="mt-2 block text-14 font-normal leading-snug text-black-70">{entry.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="m-0 px-14 py-20 text-16 text-black-70">No pages match “{query}”.</p>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
