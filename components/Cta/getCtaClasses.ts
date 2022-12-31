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
    case 'red':
    case 'cancel':
    case 'ghost':
      ctaSize = size || 'default';
      break;
    case 'facet':
      ctaSize = size || 'facet';
      break;
    case 'filter':
      ctaSize = size || 'filter';
      break;
    case 'footer':
      ctaSize = size || 'footer';
      break;
    case 'footer-featured':
      ctaSize = size || 'footer-featured';
      break;
    case 'masthead':
      ctaSize = size || 'masthead';
      break;
    case 'user':
      ctaSize = size || 'user';
      break;
    case 'user-light':
      ctaSize = size || 'user-light';
      break;
    case 'user-header':
      ctaSize = size || 'user-header';
      break;
    case 'link':
      ctaSize = size || 'unset';
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
    case 'showmore':
      ctaSize = size || 'showmore';
      break;
    case 'showmore-button':
      ctaSize = size || 'showmore-button';
      break;
    case 'showmore-panel':
      ctaSize = size || 'showmore-panel';
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
