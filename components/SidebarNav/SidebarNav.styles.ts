import { dcnb } from 'cnbuilder';
// First level parent menu item
export const parentListItem = 'm-0 border-t border-cool-grey last:border-b';
export const parentItem = 'relative group w-full text-left text-21 no-underline hocus:underline border-l-5 py-16 block pl-26 pr-48 transition font-semibold text-white hocus:text-white border-transparent hocus:border-white hocus:underline';
export const chevron = (isActive?: boolean) => dcnb('inline-block transition absolute top-[2.4rem] right-26', {
  'rotate-180': isActive,
  'rotate-0': !isActive,
});

// Child Menu
export const childMenu = 'list-unstyled m-0 ml-26 mb-12 aria-hidden:hidden';

// Menu Item
export const itemLink = (isActive?: boolean, isSecondLevel?: boolean) => dcnb('group no-underline hocus:underline border-l-5 block transition text-white hocus:text-white hocus:border-white hocus:underline', {
  'border-white': isActive,
  'border-transparent': !isActive,
  'text-18 py-8 px-20': isSecondLevel,
  'text-21 py-16 pl-26 pr-48': !isSecondLevel,
});

// Mobile Drawer
export const hamburger = 'w-30 relative top-2 hocus:text-digital-red-light';
export const drawer = '!w-[90%] sm:!w-400 !bg-black';
export const closeButtonWrapper = 'py-20 px-[2.2rem]';
export const closeButton = 'flex items-center justify-center w-30 h-30 rounded-full hocus:bg-digital-red-light ml-auto mr-0 text-white text-24';
