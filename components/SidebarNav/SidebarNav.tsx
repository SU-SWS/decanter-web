import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MUISwipeableDrawer from '@mui/material/SwipeableDrawer';
import { dcnb, ClassValue } from 'cnbuilder';
import { Text } from 'components/Typography';
import { Cta } from '../Cta';
import { HeroIcon } from '../HeroIcon';
import { SidebarMenuGroup, SidebarMenuGroupProps } from './SidebarMenuGroup';
import figmaIcon from '../../images/figma.svg';
import githubIcon from '../../images/github.svg';
import * as styles from './SidebarNav.styles';

export interface SidebarNavProps {
  navItems: SidebarMenuGroupProps[];
  className?: ClassValue;
}

export const NavContent = ({ navItems }: SidebarNavProps) => (
  <>
    <ul className="su-list-unstyled">
      {navItems.map((navItem) => (
        <SidebarMenuGroup key={navItem.label} {...navItem} />
      ))}
    </ul>
    <div className="su-pl-30 su-py-20 su-flex">
      <a href="https://github.com/SU-SWS/decanter/tree/v7" className="su-flex su-items-center su-text-white hocus:su-text-white hocus:su-underline">
        <div className="su-w-30 su-h-30 su-mr-8" aria-hidden>
          <Image
            src={githubIcon}
            alt="Decanter Github repo"
          />
        </div>
        <Text leading="none" weight="regular" variant="card">GitHub</Text>
      </a>
      <a
        href="https://www.figma.com/file/HoInlUbZRxyN3ikCJ0K03V/Decanter-v7.0?node-id=0%3A1&t=jT60s0dZMGYJi0FX-1"
        className="su-flex su-items-center su-ml-30 su-text-white hocus:su-text-white hocus:su-underline"
      >
        <div className="su-w-[2.2rem] su-mt-2 su-mr-9" aria-hidden>
          <Image
            src={figmaIcon}
            alt="Decanter Figma library"
          />
        </div>
        <Text leading="none" weight="regular" variant="card">Figma</Text>
      </a>
    </div>
  </>
);

export const SidebarNav = ({ navItems, className }: SidebarNavProps) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const toggleMenu = (): void => setMenuOpened(!menuOpened);

  // Close Drawer on route change
  const router = useRouter();
  const prevPath = useRef(router.asPath);
  useEffect(() => {
    if (prevPath.current !== router.asPath) {
      setMenuOpened(false);
    }
    prevPath.current = router.asPath;
  }, [router.asPath]);

  return (
    <>
      <nav className={dcnb('su-hidden lg:su-block', className)} aria-label="Main menu">
        <NavContent navItems={navItems} />
      </nav>
      <nav className={dcnb('lg:su-hidden', className)} aria-label="Main menu">
        <button
          type="button"
          onClick={toggleMenu}
          className="su-text-white su-inline-block"
          aria-label={menuOpened ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpened}
        >
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
              srText="Close menu"
            />
          </div>
          <NavContent navItems={navItems} />
        </MUISwipeableDrawer>
      </nav>
    </>
  );
};
