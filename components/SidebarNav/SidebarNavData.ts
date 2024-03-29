import * as routes from 'utils/routes';

export const SidebarNavData = [
  {
    label: 'About',
    href: routes.about(),
  },
  {
    label: 'For developers',
    parentPath: routes.forDevelopers(),
    menuLinks: [
      { label: 'Installation', href: routes.installation() },
      { label: 'Strategies and conventions', href: routes.strategiesAndConventions() },
      { label: 'Browser compatibility', href: routes.browserCompatibility() },
      { label: 'Support and versions', href: routes.supportAndVersions() },
      { label: 'How to extend', href: routes.howToExtend() },
      { label: 'Tailwind CSS plugins', href: routes.tailwindcssPlugins() },
    ],
  },
  {
    label: 'For designers',
    parentPath: routes.forDesigners(),
    menuLinks: [
      { label: 'Figma', href: routes.figma() },
      { label: 'Stanford identity and brand compliance', href: routes.stanfordIdentity() },
      { label: 'Accessibility', href: routes.accessibilityNotes() },
      { label: 'Type, grids and color', href: routes.typeGridsAndColor() },
    ],
  },
  {
    label: 'Examples',
    parentPath: '/examples',
    menuLinks: [
      { label: 'Alerts', href: routes.alerts() },
      { label: 'Cards', href: routes.cards() },
      { label: 'Containers', href: routes.containers() },
      { label: 'Form elements', href: routes.formElements() },
      { label: 'Global footer', href: routes.globalFooter() },
      { label: 'Grid - Flex', href: routes.gridFlex() },
      { label: 'Grid - CSS Grid', href: routes.gridCssGrid() },
      { label: 'Heros', href: routes.heros() },
      { label: 'Identity bar', href: routes.identityBar() },
      { label: 'Layout', href: routes.Layout() },
      { label: 'Logo', href: routes.logo() },
      { label: 'Modular Typography', href: routes.modularTypography() },
    ],
  },
  {
    label: 'Decanter FAQ',
    href: routes.decanterFaq(),
  },
];
