'use client';

import { ArrowDropDownIcon, KebabVertIcon } from '@/components/common/Dropdown/icons';
import { DropdownItem } from '@/components/common/Dropdown/types';

interface TriggerProps {
  onClick: () => void;
  isOpen: boolean;
}

interface SelectionTriggerProps extends TriggerProps {
  selected: DropdownItem;
}

export function MenuTrigger({ onClick }: TriggerProps) {
  return (
    <button
      className="hover:bg-gray200 size-5 cursor-pointer rounded-sm lg:size-7"
      onClick={onClick}
    >
      <KebabVertIcon width="28" height="28" />
    </button>
  );
}

export function SelectionTrigger({ onClick, selected, isOpen }: SelectionTriggerProps) {
  return (
    <button
      className={`hover:bg-gray200 border-gray300 flex min-h-12 w-full cursor-pointer items-center justify-between rounded border bg-white px-4 py-2 ${isOpen && 'border-violet'}`}
      onClick={onClick}
    >
      {selected.renderItem ? <>{selected.renderItem()}</> : <span>{selected.value}</span>}
      <ArrowDropDownIcon width="28" height="28" />
    </button>
  );
}
