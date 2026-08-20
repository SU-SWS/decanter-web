import React from 'react';
import { dcnb } from 'cnbuilder';

/**
 * Deprecation notice for used in content markdown files.
 * Use `inline` for table cells and list items, block otherwise.
 */
export interface DeprecatedProps {
  inline?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Deprecated = ({ inline, children, className }: DeprecatedProps) => (
  inline ? (
    <span className={dcnb('inline-block whitespace-nowrap bg-illuminating-light text-black-90 font-semibold uppercase tracking-wide text-[max(1.1rem,0.6em)] leading-none px-8 py-6 rounded', className)}>
      Deprecated
      {children && <span className="normal-case tracking-normal font-normal"> — {children}</span>}
    </span>
  ) : (
    <div className={dcnb('bg-illuminating-light/60 border-l-4 border-illuminating-dark rs-my-1 px-20 py-16 text-[0.9em] last:children:mb-0', className)}>
      <strong className="block uppercase tracking-wide text-[max(1.3rem,0.7em)] mb-6">Deprecated</strong>
      {children}
    </div>
  )
);
