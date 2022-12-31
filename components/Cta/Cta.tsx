import React from 'react';
import { CtaAnchor } from './CtaAnchor';
import { CtaButton, CtaButtonProps } from './CtaButton';
import { CtaLink } from './CtaLink';
import { CtaProps, isAnchor, isLink } from './Cta.types';

/**
 * Button, link button or CTA link
 *
*/
export const Cta = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CtaProps>(
  (props, ref) => {
    if (isAnchor(props)) {
      return (
        <CtaAnchor {...props} ref={ref as React.ForwardedRef<HTMLAnchorElement>} />
      );
    }

    if (isLink(props)) {
      return (
        <CtaLink {...props} ref={ref as React.ForwardedRef<HTMLAnchorElement>} />
      );
    }

    return (
      <CtaButton {...props as CtaButtonProps} ref={ref as React.ForwardedRef<HTMLButtonElement>} />
    );
  }
);
