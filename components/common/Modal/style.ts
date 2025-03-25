export type PaddingSize = '64/40' | '24/24' | '32/32' | '32/24';
export type RadiusSize = '16' | '8';

export const paddingCSS: Record<PaddingSize, string> = {
  '64/40': 'px-10 py-8 sm:px-16 sm:py-10',
  '32/32': 'px-4 py-6 sm:p-8',
  '32/24': 'p-4 sm:px-8 sm:py-6',
  '24/24': 'px-4 py-6 sm:p-6',
};

export const borderRadiusCSS: Record<RadiusSize, string> = {
  '16': 'rounded-2xl',
  '8': 'rounded-lg',
};
