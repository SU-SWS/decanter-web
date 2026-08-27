export type NavigationItem = {
  title: string;
  href: string;
  description: string;
  keywords?: string[];
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export const primaryNavigation = [
  { title: 'Developers', href: '/docs' },
  { title: 'Designer', href: '/for-designers' },
  { title: 'Examples', href: '/examples' },
  { title: 'Showcase', href: '/showcase' },
  { title: 'FAQ', href: '/decanter-faq' },
] as const;

export const docsNavigation: NavigationGroup[] = [
  {
    title: 'Getting started',
    items: [
      {
        title: 'Overview',
        href: '/docs',
        description: 'What Decanter adds to Tailwind CSS and how the documentation is organized.',
        keywords: ['developer', 'documentation', 'tailwind'],
      },
      {
        title: 'Installation',
        href: '/docs/installation',
        description: 'Install Decanter v8 beta with Tailwind CSS v4 in a Next.js project.',
        keywords: ['npm', 'nextjs', 'postcss', 'setup'],
      },
      {
        title: 'Tailwind overrides',
        href: '/docs/tailwind-overrides',
        description: 'The core Tailwind defaults that Decanter changes or extends.',
        keywords: ['spacing', 'breakpoints', 'font', 'line height'],
      },
      {
        title: 'Upgrade from v7',
        href: '/docs/upgrade-v7',
        description: 'Breaking changes and replacements when moving from Decanter v7 to v8.',
        keywords: ['migration', 'deprecated', 'tailwind 4'],
      },
    ],
  },
  {
    title: 'Foundations',
    items: [
      {
        title: 'Colors',
        href: '/docs/colors',
        description: 'Stanford identity colors as Tailwind theme tokens.',
        keywords: ['cardinal', 'palette', 'contrast'],
      },
      {
        title: 'Typography',
        href: '/docs/typography',
        description: 'Font families, base sizes, text styles, and line heights.',
        keywords: ['source sans', 'source serif', 'font'],
      },
      {
        title: 'Modular typography',
        href: '/docs/modular-typography',
        description: 'Responsive, em-based type steps from type-0 through type-10.',
        keywords: ['type scale', 'heading', 'responsive type'],
      },
      {
        title: 'Fluid typography',
        href: '/docs/fluid-typography',
        description: 'Viewport-clamped type utilities from fluid-type-0 through fluid-type-10.',
        keywords: ['clamp', 'fluid type', 'hero'],
      },
      {
        title: 'Spacing',
        href: '/docs/spacing',
        description: 'The pixel-readable spacing scale and em-based rhythm tokens.',
        keywords: ['padding', 'margin', 'gap', 'width'],
      },
      {
        title: 'Responsive spacing',
        href: '/docs/responsive-spacing',
        description: 'Single-class responsive padding, margin, and gap utilities.',
        keywords: ['rs-p', 'rs-m', 'rs-gap'],
      },
      {
        title: 'Layout and breakpoints',
        href: '/docs/layout',
        description: 'Stanford containers, screen margins, gaps, and custom breakpoints.',
        keywords: ['centered container', 'cc', 'grid gap', 'screens'],
      },
    ],
  },
  {
    title: 'Building interfaces',
    items: [
      {
        title: 'Base styles',
        href: '/docs/base-styles',
        description: 'Element-level defaults in the full and minimal Decanter entry points.',
        keywords: ['preflight', 'headings', 'links', 'tables'],
      },
      {
        title: 'Components',
        href: '/docs/components',
        description: 'Buttons, logos, skip links, lists, tables, and WYSIWYG content.',
        keywords: ['button', 'logo', 'skiplink', 'stretched link'],
      },
      {
        title: 'Forms',
        href: '/docs/forms',
        description: 'Opt-in form reset and Decanter form classes.',
        keywords: ['input', 'select', 'checkbox', 'radio'],
      },
      {
        title: 'Custom utilities',
        href: '/docs/utilities',
        description: 'Nested-link utilities and legacy text shadows.',
        keywords: ['link', 'text shadow', 'wysiwyg'],
      },
      {
        title: 'Custom variants',
        href: '/docs/variants',
        description: 'Combined hover and focus variants for accessible interactions.',
        keywords: ['hocus', 'focus visible', 'group'],
      },
    ],
  },
];

export const resourceNavigation: NavigationItem[] = [
  {
    title: 'Designer resources',
    href: '/for-designers',
    description: 'Figma, identity, accessibility, typography, grids, and color guidance.',
    keywords: ['figma', 'brand', 'design'],
  },
  {
    title: 'Examples',
    href: '/examples',
    description: 'A focused set of practical Decanter implementation examples.',
    keywords: ['patterns', 'code', 'preview'],
  },
  {
    title: 'Showcase',
    href: '/showcase',
    description: 'Stanford websites and products built with Decanter.',
    keywords: ['projects', 'gallery'],
  },
  {
    title: 'Decanter FAQ',
    href: '/decanter-faq',
    description: 'Audience, governance, adoption, accessibility, and support questions.',
    keywords: ['questions', 'governance', 'support'],
  },
];

export const searchEntries = [
  ...docsNavigation.flatMap((group) => group.items),
  ...resourceNavigation,
];
