import React from 'react';
import Input, { InputProps } from '@/components/common/Input';
import { getFontSize } from '@/components/common/Input/styles';
interface InputFieldProps extends InputProps {
  label: React.ReactNode;
  required?: boolean;
  isValid?: boolean;
  errorMessage?: string;
  errorMessageFontSize?: number;
  customLabelClass?: string;
}

const InputField = ({
  id,
  label,
  ref,
  customLabelClass,
  required,
  isValid,
  errorMessage,
  errorMessageFontSize = 14,
  ...inputProps
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`text-medium18 text-black200 flex items-center gap-[2px] ${customLabelClass}`}
      >
        {label}
        {required && <span className="text-[var(--color-violet)]">*</span>}
      </label>
      <Input id={id} ref={ref} isValid={isValid} {...inputProps} />
      {!isValid && (
        <span className={`text-[var(--color-red)] ${getFontSize(errorMessageFontSize)}`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputField;
