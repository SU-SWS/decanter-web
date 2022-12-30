import React from 'react';
import { dcnb } from 'cnbuilder';
import { useRouter } from 'next/router';
import { Link } from '../Link';
import * as styles from './SidebarNav.styles';

export interface SidebarMenuLinkProps {
  href: string;
  label: string;
  isSecondLevel?: boolean;
  className?: string;
}

export const SidebarMenuLink = ({
  href,
  label,
  isSecondLevel,
  className
}: SidebarMenuLinkProps) => {
  const router = useRouter();
  const isActive = href === router.asPath;

  return (
    <Link href={href} className={dcnb(styles.itemLink(isActive, isSecondLevel), className)}>
      {label}
    </Link>
  );
};
