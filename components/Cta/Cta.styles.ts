export const cta = 'group font-regular hocus:underline transition';

export const ctaVariants = {
  primary: 'no-underline leading-display bg-digital-red hover:bg-black focus-visible:bg-bg-black active:bg-bg-black text-white hocus:text-white hocus:border-lagunita-light shadow hocus:shadow-md hocus:decoration-1 focus:outline-none disabled:border-black-20 disabled:bg-black-20 disabled:text-black',
  secondary: 'no-underline leading-display bg-white hocus:bg-white text-lagunita hocus:text-lagunita-dark border hocus:border rounded border-lagunita-light hocus:border-lagunita-light active:border-lagunita-light shadow hover:shadow-md focus:ring-2 active:ring-2 focus:ring-lagunita-light active:ring-lagunita-light hocus:decoration-1 focus:outline-none disabled:border-black-30 disabled:bg-black-20 disabled:text-black-80',
  chip: 'rounded-full shadow hover:shadow-md focus:shadow active:shadow no-underline underline-offset-2 leading-display bg-white hocus:bg-lagunita-20 text-lagunita hocus:text-lagunita-dark border-2 border-lagunita-40 focus:ring-2 active:ring-2 focus:ring-lagunita-40 active:ring-lagunita-40 focus:outline-none hocus:decoration-lagunita hocus:decoration-1',
  link: 'underline leading-display text-lagunita hocus:text-black decoration-1 hocus:decoration-2 focus-visible:ring-2 focus-visible:ring-lagunita-light focus-visible:outline-none focus-visible:rounded disabled:text-black-60 disabled:!bg-transparent disabled:no-underline',
  action: 'font-semibold text-digital-blue-light hocus:text-white no-underline hocus:underline',
  back: 'no-underline leading-none group-hocus:underline text-black hocus:text-digital-red-dark focus-visible:ring-2 focus-visible:ring-digital-red-light focus-visible:ring-offset-4 focus:outline-none rounded-[1px]',
  'back-external': 'font-semibold no-underline leading-none group-hocus:underline hocus:text-black focus-visible:ring-2 focus-visible:ring-lagunita-light focus-visible:ring-offset-4 focus:outline-none rounded-[1px]',
  ghost: 'bg-transparent leading-display hocus:bg-transparent text-white hocus:text-white border-2 border-white hocus:decoration-1 focus:outline-none',
  close: 'font-semibold leading-none text-lagunita hocus:text-lagunita-dark focus:outline-none',
  'close-x': 'leading-none',
  dismiss: 'font-bold uppercase tracking-widest leading-none text-black hocus:text-black focus:outline-none',
  disabled: 'pointer-events-none',
  unset: '',
};
export type CtaVariantType = keyof typeof ctaVariants;

export const ctaSizes = {
  default: 'px-26 pt-10 pb-11 md:px-30 md:pt-12 md:pb-14 text-16 md:text-20',
  small: 'px-13 py-9 md:px-15 md:py-10 text-16',
  chip: 'text-16 pt-7 pb-8 px-18',
  action: 'text-20 lg:text-23',
  back: 'text-14 md:text-18',
  'text-18': 'text-18',
  close: 'text-18 md:text-21',
  dismiss: 'text-17',
  unset: '',
};
export type CtaSizeType = keyof typeof ctaSizes;

export const icon = 'inline-block';

export const iconStyles = {
  back: 'text-digital-red-light !w-[1.1em]',
  'back-external': 'text-lagunita !w-[2.2rem]',
  close: 'text-lagunita-light group-hocus:text-lagunita-dark !w-[2.2rem] -mt-4',
  'close-x': 'text-current hocus:text-current w-[2.2rem] group-hocus:underline',
  chip: '!w-[1.1em] -mt-2 text-lagunita group-hocus:text-lagunita',
  dismiss: 'text-black !w-[2.2rem] -mt-4',
};

export const iconAnimation = {
  'top-right': 'group-hocus:translate-x-01em group-hocus:-translate-y-01em',
  down: 'group-hocus:translate-y-02em',
  up: 'group-hocus:-translate-y-02em',
  right: 'group-hocus:translate-x-02em',
  left: 'group-hocus:-translate-x-02em',
};
export type IconAnimationType = keyof typeof iconAnimation;

// Leading icons have right margins
// Only add to this map if right margin is different from default class mr-02em
export const iconRightMargin = {
  default: 'mr-02em',
  'arrow-left': 'mr-03em',
  back: 'mr-03em',
  camera: 'mr-03em',
  'user-circle': 'mr-04em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class ml-02em
export const iconLeftMargin = {
  default: 'ml-02em',
  'arrow-right': 'ml-03em',
  back: 'ml-03em',
  'back-external': 'ml-03em',
};
