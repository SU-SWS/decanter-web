import React from 'react';
import { Logo } from '../Logo';

export const IdentityBar = () => (
  <div className="px-20 sm:px-30 md:px-50 lg:px-30 pt-5 pb-1 bg-digital-red">
    <Logo
      isLink
      type="full"
      color="white"
      className="text-20 leading-none"
    />
  </div>
);
