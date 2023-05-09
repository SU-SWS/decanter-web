import React from 'react';
import { dcnb } from 'cnbuilder';
import { HeroIcon, IconType } from '../HeroIcon';
import { SrOnlyText } from '../SrOnlyText';
import * as styles from './Cta.styles';
import { CtaCommonProps } from './Cta.types';

export const CtaContent = (props: CtaCommonProps) => {
  const {
    variant,
    icon,
    iconPosition,
    animate,
    iconProps,
    srText,
    children,
  } = props;

  let heroicon = '' as IconType;

  switch (variant) {
    case 'dismiss':
      heroicon = icon || 'dismiss';
      break;
    case 'close':
    case 'close-x':
      heroicon = icon || 'close';
      break;
    case 'back':
      heroicon = icon || 'back';
      break;
    case 'back-external':
      heroicon = icon || 'back';
      break;
    default:
      heroicon = icon;
  }

  const iconAnimate = styles.iconAnimation[animate];
  const iconMarginLeft = iconPosition === 'right' && children ? styles.iconLeftMargin[heroicon] || styles.iconLeftMargin.default : '';
  const iconMarginRight = iconPosition === 'left' && children ? styles.iconRightMargin[heroicon] || styles.iconRightMargin.default : '';
  const iconStyle = styles.iconStyles[variant];
  const { className: iconClasses, ...iProps } = iconProps || {};

  return (
    <>
      {iconPosition === 'right' && children}
      {heroicon && (
      <HeroIcon
        icon={heroicon}
        className={dcnb(styles.icon, iconStyle, iconAnimate, iconMarginLeft, iconMarginRight, iconClasses)}
        {...iProps}
      />
      )}
      {iconPosition !== 'right' && children}
      {srText && <SrOnlyText srText={` ${srText}`} />}
    </>
  );
};
