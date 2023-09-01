import React from 'react';

export interface SectionNavItemProps {
  href: string;
  label: string;
}

export const SectionNavItem = ({
  href,
  label,
}: SectionNavItemProps) => (
  <a href={href} className="block text-19 w-fit mb-10 last:mb-0 2xl:max-w-300 2xl:w-300">
    {label}
  </a>
);
