import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';

const containerElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
type ContainerElementType = typeof containerElements[number];

const containerWidths = {
  full: 'w-full', // width: 100%;
  site: 'cc', // Use Decanter custom screen margins and sets max content width of 1500px
  screen: 'w-screen', // width: 100vw
};
type ContainerWidthType = keyof typeof containerWidths;

export interface ContainerProps {
  as?: ContainerElementType;
  width?: ContainerWidthType;
  children?: ReactNode;
  className?: ClassValue;
}

export const Container = ({
  as = 'div',
  width = 'site',
  className,
  children,
  ...props
}: ContainerProps & HTMLAttributes<HTMLElement>) => React.createElement(
  as,
  {
    className: dcnb(containerWidths[width], className),
    ...props,
  },
  children
);
