import React from 'react';
import { Cta } from './Cta';
import { CtaProps } from './Cta.types';

export const Chip = ({
  ...rest
}: CtaProps) => (
  <Cta variant="chip" icon="close" {...rest} />
);
