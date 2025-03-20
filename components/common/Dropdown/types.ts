import { JSX } from 'react';

export type DropdownOption = {
  id: number | string;
  value: string;
  renderItem?: () => JSX.Element;
};

export interface DropdownProps {
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
}
