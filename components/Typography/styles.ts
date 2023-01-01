export const fontStack = {
  sans: 'su-font-sans',
  serif: 'su-font-serif',
};

export const fontWeight = {
  regular: 'su-font-regular',
  semibold: 'su-font-semibold',
  bold: 'su-font-bold',
};

export const fontSize = {
  base: 'su-type-0',
  1: 'su-type-1',
  2: 'su-type-2',
  3: 'su-type-3',
  4: 'su-type-4',
  5: 'su-type-5',
};

// Line heights
export const fontLeading = {
  none: 'su-leading-none', // 1
  tight: 'su-leading-tight', // 1.1
  display: 'su-leading-display', // 1.2
  snug: 'su-leading-snug', // 1.3
  cozy: 'su-leading-cozy', // 1.4
  normal: 'su-leading', // 1.5
};

// Letter spacing
export const fontTracking = {
  tighter: 'su-tracking-tighter', // -0.05em
  tight: 'su-tracking-tight', // 0.025em;
  normal: 'su-tracking-normal', // 0
  wide: 'su-tracking-wide', // 0.025em;
  wider: 'su-tracking-wider', // 0.05em;
  widest: 'su-tracking-widest', // 0.1em;
};

export const textAlign = {
  left: 'su-text-left',
  center: 'su-text-center',
  right: 'su-text-right',
};

export const textColor = {
  white: 'su-text-white',
  black: '', // Interit from the base which already sets text to black
  'black-60': 'su-text-black-60', // For headings on eg., Education info and text on eg, Names and pronouns
  'black-80': 'su-text-black-80', // Validation rules color
  'digital-red-light': 'su-text-digital-red-light', // For error messages
  'digital-green': 'su-text-digital-green',
};

export const textVariant = {
  none: '', // Default base style
  // Decanter typography styles
  big: 'su-big-paragraph',
  caption: 'su-caption',
  card: 'su-card-paragraph',
  intro: 'su-intro-text',
  subheading: 'su-subheading',
  // Below variants prefixed with "ma-" are specific to the My Account project
  // The CSS associated with these classes are in /src/tailwind/plugins/components/typography/ma-typography.js
  'ma-body': 'su-ma-body', // 18px for all breakpoints. Called "MA Body" in Figma.
  'ma-card': 'su-ma-card', // 16px for all breakpoints. Called "MA Card" in Figma.
  'ma-intro': 'su-ma-intro', // Used for page intro text
  'ma-big': 'su-ma-big', // 23px for all breakpoints. Called "MA Big" in Figma.
  // My Account heading sizes (not necessarily associated with heading levels)
  'ma-level-1': 'su-ma-level-1', // Called "Level 1" in Figma
  'ma-level-2': 'su-ma-level-2', // Called "Level 2" in Figma
  'ma-level-3': 'su-ma-level-3', // Called "Level 3" in Figma
};

export const iconStyle = 'su-inline-block su-shrink-0 su-w-[1.2em] su-mr-04em';
