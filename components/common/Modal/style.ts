export type PaddingSize = '64/40' | '24/24' | '32/32' | '32/24';
export type RadiusSize = '16' | '8';

export const paddingCSS: Record<PaddingSize, string> = {
  '64/40': 'px-16 py-10 max-sm:px-10 max-sm:py-8',
  '32/32': 'p-8 max-sm:px-4 max-sm:py-6',
  '32/24': 'px-8 py-6 max-sm:p-4',
  '24/24': 'p-6 max-sm:px-4 max-sm:py-6',
};

export const borderRadiusCSS: Record<RadiusSize, string> = {
  '16': 'rounded-2xl',
  '8': 'rounded-lg',
};
