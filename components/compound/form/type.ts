import { InputProps } from '@/components/common/Input';
import { TextareaProps } from '@/components/common/Textarea';
interface CommonFieldProps {
  label: React.ReactNode;
  id?: string;
  required?: boolean;
  isValid?: boolean;
  errorMessage?: string;
  errorMessageFontSize?: number;
  customLabelClass?: string;
}

export interface InputSpecificProps extends InputProps {
  fieldType: 'input';
}

export interface TextareaSpecificProps extends TextareaProps {
  fieldType: 'textarea';
}

export type FormFieldProps =
  | (CommonFieldProps & InputSpecificProps)
  | (CommonFieldProps & TextareaSpecificProps);
