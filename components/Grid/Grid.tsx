import React, { ReactNode, HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import * as styles from './Grid.styles';

export interface GridProps {
  as?: styles.GridElementType;
  xs?: styles.GridNumColsType;
  sm?: styles.GridNumColsType;
  md?: styles.GridNumColsType;
  lg?: styles.GridNumColsType;
  xl?: styles.GridNumColsType;
  xxl?: styles.GridNumColsType;
  gap?: styles.GridGapType;
  justifyContent?: styles.GridJustifyContentType;
  justifyItems?: styles.GridJustifyItemsType;
  alignContent?: styles.GridAlignContentType;
  alignItems?: styles.GridAlignItemsType;
  children?: ReactNode;
  className?: ClassValue;
}

export type DCNBGridAttributes = Omit<HTMLAttributes<HTMLElement>, 'className'>;

export const Grid = ({
  as = 'div',
  xs = 1,
  sm,
  md,
  lg,
  xl,
  xxl,
  gap = 'default',
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  className,
  children,
  ...rest
}: GridProps & DCNBGridAttributes) => {
  const levers: { [key: string]: string } = {};
  levers.xs = styles.gridNumCols.xs[xs];
  levers.sm = styles.gridNumCols.sm[sm];
  levers.md = styles.gridNumCols.md[md];
  levers.lg = styles.gridNumCols.lg[lg];
  levers.xl = styles.gridNumCols.xl[xl];
  levers.xxl = styles.gridNumCols.xxl[xxl];
  levers.gap = styles.gridGap[gap];
  levers.justifyContent = styles.gridJustifyContent[justifyContent];
  levers.justifyItems = styles.gridJustifyItems[justifyItems];
  levers.alignContent = styles.gridAlignContent[alignContent];
  levers.alignItems = styles.gridAlignItems[alignItems];

  return React.createElement(
    as,
    {
      className: dcnb(
        'su-grid',
        levers.xs,
        levers.sm,
        levers.md,
        levers.lg,
        levers.xl,
        levers.xxl,
        levers.gap,
        levers.justifyContent,
        levers.justifyItems,
        levers.alignContent,
        levers.alignItems,
        className
      ),
      ...rest,
    },
    children
  );
};