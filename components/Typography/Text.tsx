import React, { ReactNode } from 'react';
import { dcnb } from 'cnbuilder';
import {
  PolymorphicType, FontStack, FontSize, FontWeight, TextAlign, TextColor, TextVariant, Leading, Tracking,
} from './types';
import {
  fontStack, fontWeight, fontSize, fontLeading, fontTracking, textAlign, textColor, textVariant, iconStyle,
} from './styles';
import { HeroIcon, HeroIconProps, IconType } from '../HeroIcon';

export type TypographyProps = {
  as?: PolymorphicType;
  font?: FontStack;
  size?: FontSize;
  weight?: FontWeight;
  align?: TextAlign;
  color?: TextColor;
  variant?: TextVariant;
  leading?: Leading;
  tracking?: Tracking;
  italic?: boolean;
  srOnly?: boolean;
  uppercase?: boolean;
  icon?: IconType;
  iconProps?: Omit<HeroIconProps, 'icon' | 'noBaseStyle'>;
  className?: string;
  children?: ReactNode;
}

// IntrinsicProps provides a union of all valid pairings of props and as.
export type IntrinsicProps = {
  [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] & { as?: K; }
}[keyof JSX.IntrinsicElements];

export type TextProps = TypographyProps & IntrinsicProps;

export const Text = ({
  as: AsComponent = 'div',
  font = 'sans',
  size,
  weight,
  align,
  color = 'black',
  variant,
  leading,
  tracking,
  italic,
  srOnly,
  uppercase,
  icon,
  iconProps,
  className,
  children,
  ...rest
}: TextProps) => {
  const { className: iconClasses, ...iProps } = iconProps || {};

  return (
    <AsComponent
      {...rest}
      className={
      dcnb(
        fontStack[font],
        fontSize[size],
        fontWeight[weight],
        textAlign[align],
        textColor[color],
        textVariant[variant],
        fontLeading[leading],
        fontTracking[tracking],
        italic ? 'italic' : '',
        srOnly ? 'sr-only' : '',
        uppercase ? 'uppercase' : '',
        className
      )
    }
    >
      {icon && (
        <HeroIcon
          icon={icon}
          noBaseStyle
          className={dcnb(iconStyle, iconClasses)}
          {...iProps}
        />
      )}
      {children}
    </AsComponent>
  );
};
