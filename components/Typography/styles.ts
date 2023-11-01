export const fontStack = {
  sans: 'font-sans',
  serif: 'font-serif',
};

export const fontWeight = {
  regular: 'font-regular',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const fontSize = {
  base: 'type-0',
  1: 'type-1',
  2: 'type-2',
  3: 'type-3',
  4: 'type-4',
  5: 'type-5',
};

// Line heights
export const fontLeading = {
  none: 'leading-none', // 1
  tight: 'leading-tight', // 1.1
  display: 'leading-display', // 1.2
  snug: 'leading-snug', // 1.3
  cozy: 'leading-cozy', // 1.4
  normal: 'leading', // 1.5
};

// Letter spacing
export const fontTracking = {
  tighter: 'tracking-tighter', // -0.05em
  tight: 'tracking-tight', // 0.025em;
  normal: 'tracking-normal', // 0
  wide: 'tracking-wide', // 0.025em;
  wider: 'tracking-wider', // 0.05em;
  widest: 'tracking-widest', // 0.1em;
};

export const textAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const textColor = {
  white: 'text-white',
  black: '', // Interit from the base which already sets text to black
  'black-60': 'text-black-60',
  'black-80': 'text-black-80',
};

export const textVariant = {
  none: '', // Default base style
  // Decanter typography styles
  big: 'big-paragraph',
  caption: 'caption',
  card: 'card-paragraph',
  intro: 'intro-text',
  subheading: 'subheading',
  splash: 'splash',
};

export const iconStyle = 'inline-block shrink-0 w-[1.2em] mr-04em';
