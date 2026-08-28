export const decanterLinks = {
  figma: 'https://www.figma.com/file/HoInlUbZRxyN3ikCJ0K03V/Decanter-v7.0?node-id=0%3A1',
  github: 'https://github.com/SU-SWS/decanter',
} as const;

export const breakpoints = [
  { name: 'sm', decanter: '576px', tailwind: '640px' },
  { name: 'md', decanter: '768px', tailwind: '768px' },
  { name: 'lg', decanter: '992px', tailwind: '1024px' },
  { name: 'xl', decanter: '1200px', tailwind: '1280px' },
  { name: '2xl', decanter: '1500px', tailwind: '1536px' },
  { name: '3xl', decanter: '1700px', tailwind: 'Not provided' },
  { name: '4xl', decanter: '2000px', tailwind: 'Not provided' },
] as const;

export const modularTypeScale = [
  { step: 'type-0', base: '1em', md: '1em', lg: '1em', tracking: 'Normal' },
  { step: 'type-1', base: '1.15em', md: '1.2em', lg: '1.25em', tracking: '-0.01em' },
  { step: 'type-2', base: '1.32em', md: '1.44em', lg: '1.56em', tracking: '-0.012em' },
  { step: 'type-3', base: '1.52em', md: '1.73em', lg: '1.95em', tracking: '-0.014em' },
  { step: 'type-4', base: '1.75em', md: '2.07em', lg: '2.44em', tracking: '-0.016em' },
  { step: 'type-5', base: '2.01em', md: '2.49em', lg: '3.05em', tracking: '-0.018em' },
  { step: 'type-6', base: '2.31em', md: '2.99em', lg: '3.81em', tracking: '-0.02em' },
  { step: 'type-7', base: '2.66em', md: '3.58em', lg: '4.77em', tracking: '-0.022em' },
  { step: 'type-8', base: '3.06em', md: '4.3em', lg: '5.96em', tracking: '-0.024em' },
  { step: 'type-9', base: '3.52em', md: '5.16em', lg: '7.45em', tracking: '-0.026em' },
  { step: 'type-10', base: '4.05em', md: '6.19em', lg: '9.31em', tracking: '-0.028em' },
] as const;

export const fluidTypeScale = [
  { step: 'fluid-type-0', value: 'clamp(1.8rem, 0.44vw + 1.64rem, 2.3rem)' },
  { step: 'fluid-type-1', value: 'clamp(2.1rem, 0.7vw + 1.85rem, 2.9rem)' },
  { step: 'fluid-type-2', value: 'clamp(2.4rem, 1.05vw + 2.02rem, 3.6rem)' },
  { step: 'fluid-type-3', value: 'clamp(2.7rem, 1.58vw + 2.13rem, 4.5rem)' },
  { step: 'fluid-type-4', value: 'clamp(3.1rem, 2.19vw + 2.31rem, 5.6rem)' },
  { step: 'fluid-type-5', value: 'clamp(3.6rem, 2.98vw + 2.53rem, 7rem)' },
  { step: 'fluid-type-6', value: 'clamp(4.2rem, 4.04vw + 2.75rem, 8.8rem)' },
  { step: 'fluid-type-7', value: 'clamp(4.8rem, 5.44vw + 2.84rem, 11rem)' },
  { step: 'fluid-type-8', value: 'clamp(5.5rem, 7.19vw + 2.91rem, 13.7rem)' },
  { step: 'fluid-type-9', value: 'clamp(6.3rem, 9.47vw + 2.89rem, 17.1rem)' },
  { step: 'fluid-type-10', value: 'clamp(7.3rem, 12.37vw + 2.85rem, 21.4rem)' },
] as const;

export const responsiveSpacing = [
  { step: '0', base: '15px', md: '18px', xxl: '19px' },
  { step: '1', base: '20px', md: '26px', xxl: '27px' },
  { step: '2', base: '30px', md: '36px', xxl: '38px' },
  { step: '3', base: '32px', md: '45px', xxl: '48px' },
  { step: '4', base: '34px', md: '58px', xxl: '61px' },
  { step: '5', base: '38px', md: '72px', xxl: '76px' },
  { step: '6', base: '45px', md: '90px', xxl: '95px' },
  { step: '7', base: '50px', md: '108px', xxl: '114px' },
  { step: '8', base: '60px', md: '126px', xxl: '133px' },
  { step: '9', base: '70px', md: '162px', xxl: '171px' },
  { step: '10', base: '80px', md: '216px', xxl: '228px' },
] as const;

export const colorGroups = [
  {
    name: 'Primary',
    colors: [
      ['cardinal-red', '#8C1515'],
      ['cardinal-red-light', '#B83A4B'],
      ['cardinal-red-dark', '#820000'],
      ['cardinal-red-xdark', '#7A0000'],
      ['cardinal-red-xxdark', '#541107'],
    ],
  },
  {
    name: 'Web interactive',
    colors: [
      ['digital-red', '#B1040E'],
      ['digital-red-light', '#E50808'],
      ['digital-red-xlight', '#F83535'],
      ['digital-blue', '#006CB8'],
      ['digital-blue-light', '#85CCFF'],
      ['digital-blue-dark', '#00548F'],
      ['digital-blue-vivid', '#0597FF'],
      ['digital-green', '#008566'],
      ['digital-green-light', '#1AECBA'],
      ['digital-green-dark', '#006F54'],
      ['digital-green-bright', '#009B76'],
    ],
  },
  {
    name: 'Accent',
    colors: [
      ['palo-alto', '#175E54'], ['palo-alto-light', '#2D716F'], ['palo-alto-dark', '#014240'],
      ['palo-verde', '#279989'], ['palo-verde-light', '#59B3A9'], ['palo-verde-dark', '#017E7C'],
      ['olive', '#8F993E'], ['olive-light', '#A6B168'], ['olive-dark', '#7A863B'],
      ['bay', '#6FA287'], ['bay-light', '#8AB8A7'], ['bay-dark', '#417865'],
      ['sky', '#4298B5'], ['sky-light', '#67AFD2'], ['sky-dark', '#016895'],
      ['lagunita', '#007C92'], ['lagunita-light', '#009AB4'], ['lagunita-dark', '#006B81'],
      ['poppy', '#E98300'], ['poppy-light', '#F9A44A'], ['poppy-dark', '#D1660F'],
      ['spirited', '#E04F39'], ['spirited-light', '#F4795B'], ['spirited-dark', '#C74632'],
      ['illuminating', '#FEDD5C'], ['illuminating-light', '#FFE781'], ['illuminating-dark', '#FEC51D'],
      ['plum', '#620059'], ['plum-light', '#734675'], ['plum-dark', '#350D36'],
      ['brick', '#651C32'], ['brick-light', '#7F2D48'], ['brick-dark', '#42081B'],
      ['archway', '#5D4B3C'], ['archway-light', '#766253'], ['archway-dark', '#2F2424'],
      ['stone', '#7F7776'], ['stone-light', '#D4D1D1'], ['stone-dark', '#544948'],
      ['fog', '#DAD7CB'], ['fog-light', '#F4F4F4'], ['fog-dark', '#B6B1A9'],
    ],
  },
  {
    name: 'Grayscale',
    colors: [
      ['black-true', '#000000'], ['black', '#2E2D29'], ['black-90', '#43423E'],
      ['black-80', '#585754'], ['black-70', '#6D6C69'], ['black-60', '#767674'],
      ['black-50', '#979694'], ['black-40', '#ABABA9'], ['black-30', '#C0C0BF'],
      ['black-20', '#D5D5D4'], ['black-10', '#EAEAEA'], ['cool-grey', '#53565A'],
    ],
  },
] as const;
