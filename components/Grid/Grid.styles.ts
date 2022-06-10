export const gridElement = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form', 'button', 'fieldset', 'ul'];
export type GridElementType = typeof gridElement[number];

export const gridGap = {
  none: '',
  default: 'su-grid-gap',
  form: 'su-gap-x-[2.6rem]',
  checkboxes: 'su-gap-x-[2.6rem] su-gap-y-[2rem]',
  skeleton: 'su-gap-x-lg su-gap-y-[2rem] md:su-gap-y-[2.6rem]',
  'skeleton-lg': 'su-gap-x-lg su-gap-y-[3rem] md:su-gap-y-[3.6rem]',
};
export type GridGapType = keyof typeof gridGap;

export const gridNumCols = {
  xs: {
    1: 'su-grid-cols-1',
    2: 'su-grid-cols-2',
    3: 'su-grid-cols-3',
    4: 'su-grid-cols-4',
  },
  sm: {
    1: 'sm:su-grid-cols-1',
    2: 'sm:su-grid-cols-2',
    3: 'sm:su-grid-cols-3',
    4: 'sm:su-grid-cols-4',
  },
  md: {
    1: 'md:su-grid-cols-1',
    2: 'md:su-grid-cols-2',
    3: 'md:su-grid-cols-3',
    4: 'md:su-grid-cols-4',
  },
  lg: {
    1: 'lg:su-grid-cols-1',
    2: 'lg:su-grid-cols-2',
    3: 'lg:su-grid-cols-3',
    4: 'lg:su-grid-cols-4',
  },
  xl: {
    1: 'xl:su-grid-cols-1',
    2: 'xl:su-grid-cols-2',
    3: 'xl:su-grid-cols-3',
    4: 'xl:su-grid-cols-4',
  },
  xxl: {
    1: '2xl:su-grid-cols-1',
    2: '2xl:su-grid-cols-2',
    3: '2xl:su-grid-cols-3',
    4: '2xl:su-grid-cols-4',
  },
};
export type GridNumColsType = keyof typeof gridNumCols.xs;

export const gridJustifyContent = {
  start: 'su-justify-start',
  end: 'su-justify-end',
  center: 'su-justify-center',
  between: 'su-justify-between',
  around: 'su-justify-around',
  evenly: 'su-justify-evenly',
};
export type GridJustifyContentType = keyof typeof gridJustifyContent;

export const gridJustifyItems = {
  start: 'su-justify-items-start',
  end: 'su-justify-items-end',
  center: 'su-justify-items-center',
  stretch: 'su-justify-items-stretch',
};
export type GridJustifyItemsType = keyof typeof gridJustifyItems;

export const gridAlignContent = {
  start: 'su-content-start',
  end: 'su-content-end',
  center: 'su-content-center',
  between: 'su-content-between',
  around: 'su-content-around',
  evenly: 'su-content-evenly',
};
export type GridAlignContentType = keyof typeof gridAlignContent;

export const gridAlignItems = {
  start: 'su-items-start',
  end: 'su-items-end',
  center: 'su-items-center',
  baseline: 'su-items-baseline',
  stretch: 'su-items-stretch',
};
export type GridAlignItemsType = keyof typeof gridAlignItems;