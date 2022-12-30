import React, { AllHTMLAttributes, ReactNode } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { root, logoColors, LogoColorType } from './Logo.styles';

type ContentProps = {
  className?: ClassValue;
  color?: LogoColorType;
  type?: 'short' | 'full' | 'stacked';
  isLink?: boolean;
};

type DCNBAttributes = Omit<AllHTMLAttributes<any>, 'className'>;

export const Logo = ({
  className,
  color = 'cardinal-red',
  type,
  isLink,
  ...props
}: ContentProps & DCNBAttributes) => {
  const logoColor = logoColors[color];
  let logoText: string | ReactNode;

  switch (type) {
    case 'full':
      logoText = 'Stanford University';
      break;

    case 'stacked':
      logoText = (
        <>
          Stanford
          <br />
          University
        </>
      );
      break;

    case 'short':
    default:
      logoText = 'Stanford';
      break;
  }

  // props.isLink
  // Render logo as link or simple div
  if (isLink) {
    return (
      <a className={dcnb('su-logo',  root, logoColor, className)} href="https://www.stanford.edu" {...props}>
        {logoText}
      </a>
    );
  }

  return (
    <div className={dcnb('su-logo', logoColor, className)} {...props}>
      {logoText}
    </div>
  );
};
