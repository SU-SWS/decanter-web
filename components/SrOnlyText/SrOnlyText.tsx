import React, { HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';

export interface SrOnlyTextProps {
  srText?: string;
  className?: ClassValue;
}
type DCNBAttributes = Omit<HTMLAttributes<HTMLSpanElement>, 'className'>;

export const SrOnlyText = ({ srText, className, ...props }: SrOnlyTextProps & DCNBAttributes) => {
  const txt: string = srText ?? '(link is external)';
  return (
    <span className={dcnb('su-sr-only', className)} {...props}>
      {txt}
    </span>
  );
};
