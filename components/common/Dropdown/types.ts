import { JSX } from 'react';

export type DropdownItem = {
  id: number | string;
  value: string;
  renderItem?: () => JSX.Element;
};

export interface DropdownProps {
  options: DropdownItem[];
  onSelect: (option: DropdownItem) => void;
}
