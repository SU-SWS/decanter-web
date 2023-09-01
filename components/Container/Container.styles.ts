export const containerElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
export type ContainerElementType = typeof containerElements[number];

export const containerWidths = {
  full: 'w-full', // width: 100%; default
  site: 'cc', // Use Decanter custom screen margins and sets max content width of 1500px
  screen: 'w-screen', // width: 100vw
};
export type ContainerWidthType = keyof typeof containerWidths;
