import React from 'react';

export interface SectionNavItemProps {
  href: string;
  label: string;
}

export const SectionNavItem = ({
  href,
  label,
}: SectionNavItemProps) => {
  return (
    <a href={href} className="su-block su-w-fit su-mb-10 last:su-mb-0 2xl:su-max-w-300 2xl:su-w-300">
      {label}
    </a>
  );
};
