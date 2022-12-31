export const cta = 'su-group su-font-regular hocus:su-underline su-transition';

export const ctaVariants = {
  primary: 'su-no-underline su-leading-display su-bg-lagunita hover:su-bg-lagunita-dark focus-visible:su-bg-lagunita-dark active:su-bg-lagunita su-text-white hocus:su-text-white su-border su-rounded su-border-lagunita-light hocus:su-border-lagunita-light active:su-border-lagunita-light su-shadow hocus:su-shadow-md active:su-ring-2 focus:su-ring-2 active:su-ring-lagunita-light focus:su-ring-lagunita-light hocus:su-decoration-1 focus:su-outline-none disabled:su-border-black-20 disabled:su-bg-black-20 disabled:su-text-black',
  secondary: 'su-no-underline su-leading-display su-bg-white hocus:su-bg-white su-text-lagunita hocus:su-text-lagunita-dark su-border hocus:su-border su-rounded su-border-lagunita-light hocus:su-border-lagunita-light active:su-border-lagunita-light su-shadow hover:su-shadow-md focus:su-ring-2 active:su-ring-2 focus:su-ring-lagunita-light active:su-ring-lagunita-light hocus:su-decoration-1 focus:su-outline-none disabled:su-border-black-30 disabled:su-bg-black-20 disabled:su-text-black-80',
  red: 'su-no-underline su-leading-display su-bg-digital-red-light hover:su-bg-digital-red-dark focus-visible:su-bg-digital-red-dark active:su-bg-gitial-red su-text-white hocus:su-text-white su-border su-border-digital-red-light hocus:su-border-digital-red-dark active:su-border-digital-red-dark su-shadow hocus:su-shadow-md active:su-ring-2 focus:su-ring-2 active:su-ring-digital-red-xlight focus:su-ring-digital-red-xlight hocus:su-decoration-1 focus:su-outline-none',
  chip: 'su-rounded-full su-shadow hover:su-shadow-md focus:su-shadow active:su-shadow su-no-underline su-underline-offset-2 su-leading-display su-bg-white hocus:su-bg-lagunita-20 su-text-lagunita hocus:su-text-lagunita-dark su-border-2 su-border-lagunita-40 focus:su-ring-2 active:su-ring-2 focus:su-ring-lagunita-40 active:su-ring-lagunita-40 focus:su-outline-none hocus:su-decoration-lagunita hocus:su-decoration-1',
  link: 'su-underline su-leading-display su-text-lagunita hocus:su-text-black su-decoration-1 hocus:su-decoration-2 focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-outline-none focus-visible:su-rounded disabled:su-text-black-60 disabled:!su-bg-transparent disabled:su-no-underline',
  back: 'su-no-underline su-leading-none group-hocus:su-underline su-text-black hocus:su-text-digital-red-dark focus-visible:su-ring-2 focus-visible:su-ring-digital-red-light focus-visible:su-ring-offset-4 focus:su-outline-none su-rounded-[1px]',
  'back-external': 'su-font-semibold su-no-underline su-leading-none group-hocus:su-underline hocus:su-text-black focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-ring-offset-4 focus:su-outline-none su-rounded-[1px]',
  masthead: 'su-no-underline su-text-black-10 hocus:su-text-black-10',
  footer: 'su-font-regular su-leading-display su-underline-offset-[3px] su-text-black-20 hocus:su-text-black-20 su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight',
  'footer-featured': '!su-font-semibold su-leading-display su-no-underline su-underline-offset-[3px] su-text-black-20 hocus:su-text-black-20 su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight',
  ghost: 'su-bg-transparent su-leading-display hocus:su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white hocus:su-decoration-1 focus:su-outline-none',
  cancel: 'su-rounded su-leading-display su-text-lagunita su-underline hocus:su-text-black su-decoration-1 hocus:su-decoration-2 focus:su-ring-2 focus:su-ring-lagunita-light focus:su-outline-none',
  close: 'su-font-semibold su-leading-none su-text-lagunita hocus:su-text-lagunita-dark focus:su-outline-none',
  'close-x': 'su-leading-none',
  dismiss: 'su-font-bold su-uppercase su-tracking-widest su-leading-none su-text-black hocus:su-text-black focus:su-outline-none',
  disabled: 'su-pointer-events-none',
  unset: '',
};
export type CtaVariantType = keyof typeof ctaVariants;

export const ctaSizes = {
  default: 'su-px-26 su-py-14 md:su-px-30 md:su-py-20 su-text-16 md:su-text-20',
  small: 'su-px-13 su-py-9 md:su-px-15 md:su-py-10 su-text-16',
  masthead: 'su-text-14 md:su-text-17 xl:su-text-18',
  footer: '',
  'footer-featured': 'su-ma-intro',
  card: 'su-ma-card',
  chip: 'su-text-16 su-pt-7 su-pb-8 su-px-18',
  back: 'su-text-14 md:su-text-18',
  'text-18': 'su-text-18',
  close: 'su-text-18 md:su-text-21',
  dismiss: 'su-text-17',
  saaButton: 'su-px-20 su-pt-7 su-pb-9 md:su-px-30 md:su-pt-12 md:su-pb-14 su-text-16 md:su-text-20',
  unset: '',
};
export type CtaSizeType = keyof typeof ctaSizes;

export const icon = 'su-inline-block';

export const iconStyles = {
  'footer-featured': 'su-text-digital-red-xlight group-hocus:su-text-black-20',
  masthead: 'su-text-white group-hocus:su-text-white',
  back: 'su-text-digital-red-light !su-w-[1.1em]',
  'back-external': 'su-text-lagunita !su-w-[2.2rem]',
  close: 'su-text-lagunita-light group-hocus:su-text-lagunita-dark !su-w-[2.2rem] su--mt-4',
  'close-x': 'su-text-current hocus:su-text-current su-w-[2.2rem] group-hocus:su-underline',
  chip: '!su-w-[1.1em] su--mt-2 su-text-lagunita group-hocus:su-text-lagunita',
  dismiss: 'su-text-black !su-w-[2.2rem] su--mt-4',
};

export const iconAnimation = {
  'top-right': 'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em',
  down: 'group-hocus:su-translate-y-02em',
  up: 'group-hocus:su--translate-y-02em',
  right: 'group-hocus:su-translate-x-02em',
  left: 'group-hocus:su--translate-x-02em',
};
export type IconAnimationType = keyof typeof iconAnimation;

// Leading icons have right margins
// Only add to this map if right margin is different from default class su-mr-02em
export const iconRightMargin = {
  default: 'su-mr-02em',
  'arrow-left': 'su-mr-03em',
  back: 'su-mr-03em',
  camera: 'su-mr-03em',
  'user-circle': 'su-mr-04em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class su-ml-02em
export const iconLeftMargin = {
  default: 'su-ml-02em',
  'arrow-right': 'su-ml-03em',
  back: 'su-ml-03em',
  'back-external': 'su-ml-03em',
};
