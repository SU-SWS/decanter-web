import React from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { SidebarMenuGroup, SidebarMenuGroupProps } from './SidebarMenuGroup';

export interface SidebarNavProps {
  navItems: SidebarMenuGroupProps[];
  className?: ClassValue;
}

export const SidebarNav = ({ navItems, className }: SidebarNavProps) => (
  <nav className={dcnb('su-sidebar-nav', className)} aria-label="Main menu">
    <ul className="su-list-unstyled">
      {navItems.map((navItem) => (
        <SidebarMenuGroup key={navItem.label} {...navItem} />
      ))}
    </ul>
  </nav>
);