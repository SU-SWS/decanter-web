export const flexElement = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form', 'button', 'fieldset'];
export type FlexElementType = typeof flexElement[number];

export const flexDirection = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
};
export type FlexDirectionType = keyof typeof flexDirection;

export const flexWrap = {
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
  nowrap: 'flex-nowrap',
};
export type FlexWrapType = keyof typeof flexWrap;

export const flexJustifyContent = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};
export type FlexJustifyContentType = keyof typeof flexJustifyContent;

export const flexAlignContent = {
  start: 'content-start',
  end: 'content-end',
  center: 'content-center',
  between: 'content-between',
  around: 'content-around',
  evenly: 'content-evenly',
};
export type FlexAlignContentType = keyof typeof flexAlignContent;

export const flexAlignItems = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};
export type FlexAlignItemsType = keyof typeof flexAlignItems;
