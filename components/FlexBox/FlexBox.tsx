import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import {
  flexDirection,
  flexWrap,
  flexJustifyContent,
  flexAlignContent,
  flexAlignItems,
  FlexElementType,
  FlexDirectionType,
  FlexWrapType,
  FlexJustifyContentType,
  FlexAlignContentType,
  FlexAlignItemsType,
} from './FlexBox.levers';

export interface FlexBoxProps {
  children?: ReactNode;
  className?: ClassValue;
  as?: FlexElementType;
  direction?: FlexDirectionType;
  wrap?: FlexWrapType;
  gap?: boolean;
  justifyContent?: FlexJustifyContentType;
  alignContent?: FlexAlignContentType;
  alignItems?: FlexAlignItemsType;
}

export const FlexBox = ({
  as = 'div',
  direction,
  wrap,
  gap,
  justifyContent,
  alignContent,
  alignItems,
  className,
  children,
  ...props
}: FlexBoxProps & HTMLAttributes<HTMLElement>) => {
  const levers: { [key: string]: string } = {};
  levers.direction = flexDirection[direction];
  levers.wrap = flexWrap[wrap];
  levers.justifyContent = flexJustifyContent[justifyContent];
  levers.alignContent = flexAlignContent[alignContent];
  levers.alignItems = flexAlignItems[alignItems];
  levers.gap = gap ? 'su-grid-gap' : '';

  return React.createElement(
    as,
    {
      className: dcnb(
        'su-flex',
        levers.direction,
        levers.wrap,
        levers.gap,
        levers.justifyContent,
        levers.alignContent,
        levers.alignItems,
        className
      ),
      ...props,
    },
    children
  );
};
