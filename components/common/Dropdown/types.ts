import { JSX } from 'react';

export type DropdownItem = {
  id: number | string;
} & (
  | { value: string; renderItem?: () => JSX.Element }
  | { value?: string; renderItem: () => JSX.Element }
);

export type SearchableDropdownItem = {
  id: number | string;
  value: string;
  renderItem?: () => JSX.Element;
};
