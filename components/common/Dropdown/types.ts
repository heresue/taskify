import { JSX } from 'react';

export type DropdownItem = {
  id: number | string;
  value: string;
  renderItem?: () => JSX.Element;
};
