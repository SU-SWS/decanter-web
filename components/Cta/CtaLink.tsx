import React from 'react';
import { Link, LinkProps } from '../Link';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaLinkProps = Omit<LinkProps, 'className'> & CtaCommonProps & {
  href: string;
}

export const CtaLink = React.forwardRef<HTMLAnchorElement, CtaLinkProps>(
  (props, ref) => {
    const {
      href,
      variant = 'link',
      size,
      icon,
      iconPosition = 'right',
      animate,
      iconProps,
      srText,
      children,
      className,
      ...rest
    } = props;

    const ctaClasses = getCtaClasses(variant, size, className);

    return (
      <Link
        href={href}
        className={ctaClasses}
        {...rest}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
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
      </Link>
    );
  }
);
