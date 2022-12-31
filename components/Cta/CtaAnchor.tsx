import React from 'react';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaAnchorProps = React.ComponentPropsWithoutRef<'a'> & CtaCommonProps & {
  href?: string;
}

export const CtaAnchor = React.forwardRef<HTMLAnchorElement, CtaAnchorProps>(
  (props, ref) => {
    const {
      href,
      variant = 'link',
      size,
      icon = 'external',
      iconPosition = 'right',
      animate = 'top-right',
      iconProps,
      srText = '(external link)',
      children,
      className,
      ...rest
    } = props;

    const ctaClasses = getCtaClasses(variant, size, className);

    return (
      <a
        href={href}
        className={ctaClasses}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        {...rest}
      >
        <CtaContent
          variant={variant}
          icon={icon}
          iconPosition={iconPosition}
          animate={animate}
          iconProps={iconProps}
          srText={srText}
        >
          {children}
        </CtaContent>
      </a>
    );
  }
);
