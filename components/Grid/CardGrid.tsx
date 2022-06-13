import React, { HTMLAttributes } from 'react';
import { Grid, GridProps } from './Grid';

export interface CardGridProps extends GridProps {
  numCol?: 1 | 2 | 3; // Number of columns for desktop, ie, number of cards per row
}

export type DCNBCardGridAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

export const CardGrid = ({
  numCol = 2,
  ...rest
}: CardGridProps & DCNBCardGridAttributes) => (
  <Grid
    as="div"
    xs={1}
    md={numCol > 1 ? 2 : null}
    xl={numCol > 2 ? numCol : null}
    {...rest}
  />
);