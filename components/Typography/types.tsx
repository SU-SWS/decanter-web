import React from 'react';
import {
  fontStack,
  fontWeight,
  fontSize,
  fontLeading,
  fontTracking,
  textAlign,
  textColor,
  textVariant,
} from './styles';

export type PolymorphicType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type FontStack = keyof typeof fontStack;

export type FontWeight = keyof typeof fontWeight;

export type FontSize = keyof typeof fontSize;

export type Leading = keyof typeof fontLeading;

export type Tracking = keyof typeof fontTracking;

export type TextAlign = keyof typeof textAlign;

export type TextColor = keyof typeof textColor;

export type TextVariant = keyof typeof textVariant;
