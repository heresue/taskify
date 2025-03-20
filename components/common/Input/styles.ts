const getFontSize = (size: number) => {
  const fontSizeMap: Record<number, string> = {
    14: 'text-regular14',
    16: 'text-regular16',
  };

  return fontSizeMap[size] || 'text-regular16';
};
const getBorderClasses = (disabled: boolean, isValid: boolean) => {
  const baseClasses = 'border transition-colors';

  if (!isValid) {
    return `${baseClasses} border-[var(--color-red)]`;
  }

  if (disabled) {
    return `${baseClasses} border-[var(--color-gray300)]`;
  }

  return `${baseClasses} border-[var(--color-gray300)] hover:border-[var(--color-violet)] focus-within:border-[var(--color-violet)]`;
};
export { getFontSize, getBorderClasses };
