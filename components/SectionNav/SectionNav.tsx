import React from 'react';
import { dcnb } from 'cnbuilder';
import { Heading } from 'components/Typography';

/**
 * Section menu for long content pages, e.g., Stategies and conventions
 */
export interface SectionNavProps {
  children?: React.ReactNode;
  className?: string;
}

export const SectionNav = ({
  children,
  className,
}: SectionNavProps) => (
  <nav className={dcnb('sticky top-10', className)} aria-label="Section menu">
    <Heading as="h3" size={1}>On this page</Heading>
    <ul className="list-unstyled">
      {children}
    </ul>
  </nav>
);
