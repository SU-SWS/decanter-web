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
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      children,
      ...rest
    },
    ref
  ) => (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      {...rest}
    >
      {children}
    </NextLink>
  )
);

Link.displayName = 'Link';
