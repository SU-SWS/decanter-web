import React, { useState, useRef } from 'react';
import MUISwipeableDrawer from '@mui/material/SwipeableDrawer';
import { dcnb, ClassValue } from 'cnbuilder';
import { Cta } from '../Cta';
import { HeroIcon } from '../HeroIcon';
import { SidebarMenuGroup, SidebarMenuGroupProps } from './SidebarMenuGroup';
import * as styles from './SidebarNav.styles';

export interface SidebarNavProps {
  navItems: SidebarMenuGroupProps[];
  className?: ClassValue;
}

export const NavContent = ({ navItems }: SidebarNavProps) => (
  <ul className="su-list-unstyled">
    {navItems.map((navItem) => (
      <SidebarMenuGroup key={navItem.label} {...navItem} />
    ))}
  </ul>
);

export const SidebarNav = ({ navItems, className }: SidebarNavProps) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const toggleMenu = (): void => setMenuOpened(!menuOpened);

  return (
    <>
      <nav className={dcnb('su-hidden lg:su-block', className)} aria-label="Main menu">
        <NavContent navItems={navItems} />
      </nav>
      <nav className={dcnb('lg:su-hidden', className)} aria-label="Main menu">
        <button type="button" onClick={toggleMenu} className="su-text-white su-inline-block">
          <HeroIcon icon="menu" noBaseStyle className={styles.hamburger} />
        </button>
        <MUISwipeableDrawer
          open={menuOpened}
          onOpen={() => setMenuOpened(true)}
          onClose={() => setMenuOpened(false)}
          anchor="right"
          classes={{ paper: styles.drawer }}
        >
          <div className={styles.closeButtonWrapper}>
            <Cta
              variant="close-x"
              onClick={() => setMenuOpened(false)}
              className={styles.closeButton}
            />
          </div>
          <NavContent navItems={navItems} />
        </MUISwipeableDrawer>
      </nav>
    </>
  );
};