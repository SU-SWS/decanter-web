'use client';

import {
  Children,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from 'react';
import { CopyButton } from '@/components/docs/copyButton';

export type CodeTabMetadata = {
  code: string;
  label: string;
  language: string;
};

type CodeTabsProps = {
  children: ReactNode;
  className?: string;
  tabs: CodeTabMetadata[];
};

export function CodeTabs({ children, className = '', tabs }: CodeTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId().replaceAll(':', '');
  const panels = Children.toArray(children);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeTab = tabs[activeIndex];

  const activateTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      activateTab(nextIndex);
    }
  };

  return (
    <figure className={`code-block my-24 overflow-hidden rounded-[0.8rem] border border-white/10 bg-[#0b1020] text-white shadow-lg ${className}`}>
      <figcaption className="m-0 flex min-h-48 flex-wrap items-stretch justify-between gap-x-12 border-b border-white/10 bg-[#111827] text-12 font-semibold text-white/75">
        <div aria-label="Code format" className="flex items-stretch" role="tablist">
          {tabs.map((tab, index) => {
            const selected = index === activeIndex;
            return (
              <button
                aria-controls={`${baseId}-panel-${index}`}
                aria-selected={selected}
                className={`relative px-16 py-12 text-left font-semibold hocus:bg-white/8 hocus:text-white ${selected ? 'text-white after:absolute after:inset-x-12 after:bottom-0 after:h-2 after:bg-[#38bdf8]' : 'text-white/65'}`}
                id={`${baseId}-tab-${index}`}
                key={tab.label}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(element) => { tabRefs.current[index] = element; }}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-6 px-8 py-6">
          <span className="rounded-[0.3rem] bg-white/8 px-6 py-3 font-mono text-10 font-medium uppercase tracking-[0.08em] text-[#93c5fd]">{activeTab.language}</span>
          <CopyButton code={activeTab.code} label={activeTab.label} />
        </div>
      </figcaption>
      {panels.map((panel, index) => (
        <div
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={index !== activeIndex}
          id={`${baseId}-panel-${index}`}
          key={tabs[index].label}
          role="tabpanel"
          tabIndex={0}
        >
          {panel}
        </div>
      ))}
    </figure>
  );
}
