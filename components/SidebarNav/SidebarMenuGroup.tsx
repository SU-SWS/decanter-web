import React, { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';
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
      {/* If the item has a href, then it's a top level link, otherwise it's a button to open a child menu */}
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
          <Collapse in={isExpanded} unmountOnExit>
            <ul className={styles.childMenu}>
              {menuLinks?.map((menuItem) => (
                <SidebarMenuLink key={menuItem.label} label={menuItem.label} href={menuItem.href} isSecondLevel />
              ))}
            </ul>
          </Collapse>
        </>
      )}
    </li>
  );
};
