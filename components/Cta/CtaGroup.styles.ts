import { dcnb } from 'cnbuilder';
import { CtaGroupProps } from './CtaGroup';

export const ctaGroupAligns = {
  left: '',
  center: 'su-mx-auto su-w-fit',
  right: 'su-ml-auto su-mr-0 su-block su-w-fit',
};
export type CtaGroupAlignType = keyof typeof ctaGroupAligns;

export const ctaGroupVariants = {
  card: 'children:su-mr-16 last:children:su-mr-0', // Add/Edit & Delete buttons on data cards
  profile: 'su-leading-none children:su-leading-none children:su-pr-10 children:su-mr-10 children:su-border-r children:su-border-black-70 last:children:su-pr-0 last:children:su-mr-0 last:children:su-border-r-0 su-text-18', // Add/Edit & Delete buttons on profile cards
  form: 'su-flex su-justify-center su-w-full su-rs-mt-7 su-relative su--left-13 md:su--left-15', // Cancel and Save buttons at the bottom of most forms
  'form-register': 'su-flex su-justify-center su-w-full su-rs-mt-6',
  modal: 'su-flex su-justify-center su-rs-mt-3 children:su-rs-mr-1 last:children:su-mr-0', // Modal Buttons
  'image-form': 'su-flex su-flex-col children:su-rs-mb-0 sm:su-flex-row sm:children:su-rs-mr-1 last:children:su-mr-0',
};
export type CtaGroupVariantType = keyof typeof ctaGroupVariants;

export const root = (
  { align, variant }: CtaGroupProps
) => dcnb(ctaGroupAligns[align], ctaGroupVariants[variant]);
