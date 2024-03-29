import React from 'react';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaButtonProps = React.ComponentPropsWithoutRef<'button'> & CtaCommonProps & {
  href?: undefined;
}

// eslint-disable-next-line react/display-name
export const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  (props, ref) => {
    const {
      type = 'button',
      variant = 'primary',
      iconPosition = 'right',
      icon,
      size,
      animate,
      iconProps,
      srText,
      disabled,
      children,
      className,
      ...rest
    } = props;

    const ctaClasses = getCtaClasses(variant, size, className, disabled);

    return (
      <button
        /* eslint-disable react/button-has-type */
        type={type}
        disabled={disabled}
        className={ctaClasses}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
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
      </button>
    );
  }
);
