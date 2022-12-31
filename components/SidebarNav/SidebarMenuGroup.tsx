import React, { useEffect, useState } from 'react';
import { dcnb } from 'cnbuilder';
import { useRouter } from 'next/router';
import { HeroIcon } from '../HeroIcon';
import { SidebarMenuLink, SidebarMenuLinkProps } from './SidebarMenuLink';
import * as styles from './SidebarNav.styles';

export interface SidebarMenuGroupProps {
  href?: string;
  label: string;
  menuLinks?: SidebarMenuLinkProps[];
  parentPath?: string;
  className?: string;
}

export const SidebarMenuGroup = ({
  href,
  label,
  menuLinks,
  parentPath,
  className,
}: SidebarMenuGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const router = useRouter();

  // Expand the child menu if the current page is a child of the parentPath
  useEffect(() => {
    if (parentPath && router.asPath.includes(parentPath)) {
      setIsExpanded(true);
    }
  }, [parentPath, router.asPath]);

  return (
    <li className={styles.parentListItem}>
      {href ? (
        <SidebarMenuLink href={href} label={label} className={className} />
      ) : (
        <>
          <button
            type="button"
            onClick={toggleExpanded}
            aria-expanded={isExpanded}
            className={styles.parentItem}
          >
            {label}
            <HeroIcon icon="chevron-down" className={styles.chevron(isExpanded)} />
          </button>
          <ul className={styles.childMenu} aria-hidden={!isExpanded}>
          {menuLinks?.map((menuItem) => (
            <SidebarMenuLink key={menuItem.label} label={menuItem.label} href={menuItem.href} isSecondLevel />
          ))}
          </ul>
        </>
      )}
    </li>
  );
};