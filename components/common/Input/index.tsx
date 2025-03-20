import React from 'react';
import { getBorderColor, getFontSize } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 16 | 14;
  customBorderClass?: string;
  customInputClass?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = ({
  leftIcon,
  rightIcon,
  isValid = true,
  size = 16,
  customBorderClass = '',
  customInputClass = '',
  ref,
  ...props
}: InputProps) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border ${getBorderColor(isValid)} px-4 py-3 ${customBorderClass}`}
    >
      {leftIcon && leftIcon}
      <input
        className={`w-full border-none text-[var(--color-black200)] outline-none placeholder:text-[var(--color-gray-400)] ${getFontSize(size)} ${customInputClass}`}
        ref={ref}
        {...props}
      />
      {rightIcon && rightIcon}
    </div>
  );
};

export default Input;
