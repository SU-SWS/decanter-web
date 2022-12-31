import React from 'react';
import { dcnb } from 'cnbuilder';
import { SectionNavItemProps } from './SectionNavItem';
import { Heading } from 'components/Typography';

export interface SectionNavProps {
 children?: React.ReactNode;
 className?: string;
}

export const SectionNav = ({
 children,
 className,
}: SectionNavProps) => (
  <nav className={dcnb('su-section-nav su-sticky su-top-10', className)} aria-label="Section menu">
    <Heading as="h3" size={1}>On this page</Heading>
    <ul className="su-list-unstyled">
     {children}
    </ul>
  </nav>
);
