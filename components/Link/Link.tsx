import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

/**
 * Simple Next Link Wrapper
 */

export type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      // Destructure NextLinkProps
      children,
      ...rest
    },
    ref
  ) => (
    <NextLink
      {...rest}
    >
      {children}
    </NextLink>
  )
);

Link.displayName = 'Link';
