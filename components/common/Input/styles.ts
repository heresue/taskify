const getFontSize = (size: number) => {
  const fontSizeMap: Record<number, string> = {
    14: 'text-regular14',
    16: 'text-regular16',
  };

  return fontSizeMap[size] || 'text-regular16';
};
const getBorderColor = (isValid: boolean) => {
  return isValid ? 'border-[var(--color-purple)]' : 'border-[var(--color-red)]';
};

export { getFontSize, getBorderColor };
