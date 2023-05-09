import React from 'react';
import { dcnb } from 'cnbuilder';
import { HeadingType } from './types';
import { TypographyProps } from './Text';
import {
  fontStack,
  fontWeight,
  fontSize,
  fontLeading,
  fontTracking,
  textAlign,
  textColor,
  textVariant,
} from './styles';

export type HeadingProps = Omit<TypographyProps, 'as'> & React.HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingType;
}

// Convenience component for headings
export const Heading = ({
  as: AsComponent = 'h2',
  font = 'sans',
  align,
  color = 'black',
  leading,
  tracking,
  size,
  variant,
  weight,
  italic,
  srOnly,
  uppercase,
  className,
  children,
  ...rest
}: HeadingProps) => (
  <AsComponent
    {...rest}
    className={
    dcnb(
      fontStack[font],
      textAlign[align],
      fontLeading[leading],
      fontTracking[tracking],
      fontSize[size],
      fontWeight[weight],
      textColor[color],
      textVariant[variant],
      italic ? 'su-italic' : '',
      srOnly ? 'su-sr-only' : '',
      uppercase ? 'su-uppercase' : '',
      className
    )
  }
  >
    {children}
  </AsComponent>
);
