import { dcnb, ClassValue } from 'cnbuilder';
import * as styles from './Cta.styles';
import { CtaVariantType, CtaSizeType } from './Cta.styles';

export const getCtaClasses = (
  variant: CtaVariantType,
  size: CtaSizeType,
  className: ClassValue,
  disabled: (boolean | null) = null
): string => {
  let ctaSize = '' as keyof typeof styles.ctaSizes;

  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'ghost':
      ctaSize = size || 'default';
      break;
    case 'link':
      ctaSize = size || 'unset';
      break;
    case 'action':
      ctaSize = size || 'action';
      break;
    case 'dismiss':
      ctaSize = size || 'dismiss';
      break;
    case 'close':
      ctaSize = size || 'close';
      break;
    case 'back':
      ctaSize = size || 'back';
      break;
    case 'back-external':
      ctaSize = size || 'text-18';
      break;
    case 'chip':
      ctaSize = size || 'chip';
      break;
    default:
      ctaSize = size;
  }

  const levers: { [key: string]: string } = {};
  levers.variant = styles.ctaVariants[variant];
  levers.size = styles.ctaSizes[ctaSize];
  levers.disabled = disabled ? styles.ctaVariants.disabled : '';
  const ctaClasses = dcnb(styles.cta, levers.size, levers.variant, levers.disabled, className);

  return ctaClasses;
};
