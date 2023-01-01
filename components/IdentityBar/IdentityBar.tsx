import React from 'react';
import { Logo } from '../Logo';

export const IdentityBar = () => (
  <div className='su-pl-20 md:su-pl-30 su-pt-5 su-pb-1 su-bg-digital-red'>
    <Logo
      isLink
      type="full"
      color="white"
      className='su-text-20 su-leading-none'
    />
  </div>
);
