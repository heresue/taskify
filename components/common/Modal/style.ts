export type PaddingSize = '64/40' | '24/24' | '32/32' | '32/24';
export type RadiusSize = '16' | '8';

export const paddingCSS: Record<PaddingSize, string> = {
  '64/40': 'px-10 py-8 md:px-16 md:py-10',
  '32/32': 'px-4 py-6 md:p-8',
  '32/24': 'p-4 md:px-8 md:py-6',
  '24/24': 'px-4 py-6 md:p-6',
};

export const borderRadiusCSS: Record<RadiusSize, string> = {
  '16': 'rounded-2xl',
  '8': 'rounded-lg',
};
