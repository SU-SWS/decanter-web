export const SidebarNavData = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'For developers',
    parentPath: '/for-developers',
    menuLinks: [
      { label: 'Installation', href: '/for-developers/installation' },
      { label: 'Browser compatibility', href: '/for-developers/browser-compatibility' },
      { label: 'Strategies and conventions', href: '/for-developers/strategies-and-conventions' },
      { label: 'Support and versions', href: '/for-developers/support-and-versions' },
      { label: 'How to extend', href: '/for-developers/how-to-extend' },
      { label: 'TailwindCSS plugins', href: '/for-developers/tailwindcss-plugins' },
    ],   
  },
  {
    label: 'For designers',
    parentPath: '/for-designers',
    menuLinks: [
      { label: 'Figma', href: '/for-designers/figma' },
      { label: 'Stanford identity and brand compliance', href: '/for-designers/stanford-identity-and-brand-compliance' },
      { label: 'Accessibility', href: '/for-designers/accessibility-notes' },
      { label: 'Type, grids and color', href: '/for-designers/type-grids-and-color' },
      { label: 'Patterns and examples', href: '/for-designers/patterns-and-examples' },
    ],   
  },
  {
    label: 'Examples',
    parentPath: '/examples',
    menuLinks: [
      { label: 'Figma', href: '/examples/figma' },
      { label: 'Stanford identity and brand compliance', href: '/for-designers/stanford-identity-and-brand-compliance' },
      { label: 'Accessibility', href: '/for-designers/accessibility-notes' },
      { label: 'Type, grids and color', href: '/for-designers/type-grids-and-color' },
      { label: 'Patterns and examples', href: '/for-designers/patterns-and-examples' },
    ],   
  },
  {
    label: 'Decanter FAQ',
    href: '/decanter-faq',
  },
];