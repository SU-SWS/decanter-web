export const flexElement = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form', 'button', 'fieldset'];
export type FlexElementType = typeof flexElement[number];

export const flexDirection = {
  row: 'su-flex-row',
  'row-reverse': 'su-flex-row-reverse',
  col: 'su-flex-col',
  'col-reverse': 'su-flex-col-reverse',
};
export type FlexDirectionType = keyof typeof flexDirection;

export const flexWrap = {
  wrap: 'su-flex-wrap',
  'wrap-reverse': 'su-flex-wrap-reverse',
  nowrap: 'su-flex-nowrap',
};
export type FlexWrapType = keyof typeof flexWrap;

export const flexJustifyContent = {
  start: 'su-justify-start',
  end: 'su-justify-end',
  center: 'su-justify-center',
  between: 'su-justify-between',
  around: 'su-justify-around',
  evenly: 'su-justify-evenly',
};
export type FlexJustifyContentType = keyof typeof flexJustifyContent;

export const flexAlignContent = {
  start: 'su-content-start',
  end: 'su-content-end',
  center: 'su-content-center',
  between: 'su-content-between',
  around: 'su-content-around',
  evenly: 'su-content-evenly',
};
export type FlexAlignContentType = keyof typeof flexAlignContent;

export const flexAlignItems = {
  start: 'su-items-start',
  end: 'su-items-end',
  center: 'su-items-center',
  baseline: 'su-items-baseline',
  stretch: 'su-items-stretch',
};
export type FlexAlignItemsType = keyof typeof flexAlignItems;
