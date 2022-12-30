import React, { useRef } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';

export type DCNBAnchorAttributes = Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;

export interface SkiplinkProps {
  href?: string;
  className?: ClassValue;
  children?: string;
}

export const Skiplink = ({
  href = '#main-content',
  children = 'Skip to main content',
  className,
  ...rest
}: SkiplinkProps) => {
  const ref = useRef(null);

  return (
    <a
      href={href}
      className={dcnb('su-skiplink', className)}
      ref={ref}
      onFocus={() => ref.current.scrollIntoView()}
      {...rest}
    >
      {children}
    </a>
  );
};
