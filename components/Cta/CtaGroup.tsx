import React, { HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import * as styles from './CtaGroup.styles';

export type CtaGroupDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

export interface CtaGroupProps extends CtaGroupDivProps {
  align?: styles.CtaGroupAlignType;
  variant?: styles.CtaGroupVariantType;
  className?: ClassValue;
}

export const CtaGroup = ({
  align,
  variant = 'card',
  children,
  className,
  ...rest
}: CtaGroupProps) => (
  <div className={dcnb(styles.root({ align, variant }), className)} {...rest}>
    {children}
  </div>
);
