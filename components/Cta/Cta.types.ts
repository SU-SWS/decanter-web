import React from 'react';
import { ClassValue } from 'cnbuilder';
import { HeroIconProps, IconType } from '../HeroIcon';
import { CtaVariantType, CtaSizeType, IconAnimationType } from './Cta.styles';
import { CtaAnchorProps } from './CtaAnchor';
import { CtaButtonProps } from './CtaButton';
import { CtaLinkProps } from './CtaLink';

export interface CtaCommonProps {
  variant?: CtaVariantType;
  size?: CtaSizeType;
  srText?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  animate?: IconAnimationType;
  iconProps?: HeroIconProps & React.ComponentProps<'svg'>;
  disabled?: boolean;
  className?: ClassValue;
  children?: React.ReactNode;
}

export type CtaProps = CtaButtonProps | CtaAnchorProps | CtaLinkProps;

// Type guards to branch our props union
// CtaAnchor is for external/mailto/anchor links and CtaLink is for internal links (uses Next Link)
export const isAnchor = (props: CtaProps): props is CtaAnchorProps => !!props.href && (props.href.startsWith('http') || props.href.startsWith('mailto') || props.href.startsWith('#'));
export const isLink = (props: CtaProps): props is CtaLinkProps => !!props.href && !(props.href.startsWith('http') && props.href.startsWith('mailto') && props.href.startsWith('#'));
