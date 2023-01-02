import React from 'react';
import { Logo } from '../Logo';

export const IdentityBar = () => (
  <div className='su-px-20 sm:su-px-30 md:su-px-50 lg:su-px-30 su-pt-5 su-pb-1 su-bg-digital-red'>
    <Logo
      isLink
      type="full"
      color="white"
      className='su-text-20 su-leading-none'
    />
  </div>
);
