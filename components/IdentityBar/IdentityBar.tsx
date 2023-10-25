import React from 'react';
import { dcnb } from 'cnbuilder';
import { Logo } from '../Logo';

export const IdentityBar = ({ className }) => (
  <div className={dcnb('px-20 sm:px-30 md:px-50 lg:px-30 pt-5 pb-1', className)}>
    <Logo
      isLink
      type="full"
      color="white"
      className="text-20 leading-none"
    />
  </div>
);
