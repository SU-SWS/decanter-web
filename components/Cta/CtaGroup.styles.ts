import { dcnb } from 'cnbuilder';
import { CtaGroupProps } from './CtaGroup';

export const ctaGroupAligns = {
  left: '',
  center: 'mx-auto w-fit',
  right: 'ml-auto mr-0 block w-fit',
};
export type CtaGroupAlignType = keyof typeof ctaGroupAligns;

export const ctaGroupVariants = {
  card: 'children:mr-16 last:children:mr-0', // Add/Edit & Delete buttons on data cards
  profile: 'leading-none children:leading-none children:pr-10 children:mr-10 children:border-r children:border-black-70 last:children:pr-0 last:children:mr-0 last:children:border-r-0 text-18', // Add/Edit & Delete buttons on profile cards
  form: 'flex justify-center w-full rs-mt-7 relative -left-13 md:-left-15', // Cancel and Save buttons at the bottom of most forms
  'form-register': 'flex justify-center w-full rs-mt-6',
  modal: 'flex justify-center rs-mt-3 children:rs-mr-1 last:children:mr-0', // Modal Buttons
  'image-form': 'flex flex-col children:rs-mb-0 sm:flex-row sm:children:rs-mr-1 last:children:mr-0',
};
export type CtaGroupVariantType = keyof typeof ctaGroupVariants;

export const root = (
  { align, variant }: CtaGroupProps
) => dcnb(ctaGroupAligns[align], ctaGroupVariants[variant]);
