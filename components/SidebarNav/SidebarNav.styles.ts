import { dcnb } from "cnbuilder";
// First level parent menu item
export const parentListItem = 'su-m-0 su-border-t su-border-cool-grey';
export const parentItem = 'su-relative su-group su-w-full su-text-left su-text-21 su-no-underline hocus:su-underline su-border-l-5 su-py-16 su-block su-pl-26 su-pr-48 su-transition-all su-duration-300 su-font-semibold su-text-white hocus:su-text-white su-border-transparent hocus:su-border-white hocus:su-underline';
export const chevron = (isActive?: boolean) => dcnb('su-inline-block su-transition su-absolute su-top-[2.4rem] su-right-26', {
  'su-rotate-180': isActive,
  'su-rotate-0': !isActive,
});

// Child Menu
export const childMenu = 'su-list-unstyled su-m-0 su-ml-26 su-mb-12 aria-hidden:su-hidden';

// Menu Item
export const itemLink = (isActive?: boolean, isSecondLevel?: boolean) => dcnb('su-group su-no-underline hocus:su-underline su-border-l-5  su-block su-pl-26  su-transition-all su-duration-300 su-text-white hocus:su-text-white hocus:su-border-white hocus:su-underline', {
  'su-border-white': isActive,
  'su-border-transparent': !isActive,
  'su-text-18 su-py-8': isSecondLevel,
  'su-text-21 su-py-16 su-pr-48': !isSecondLevel,
});