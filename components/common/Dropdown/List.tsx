import { MenuItem, SelectionItem } from '@/components/common/Dropdown/Item';
import { DropdownItem } from '@/components/common/Dropdown/types';

interface ListProps {
  options: DropdownItem[];
  onClickItem: (option: DropdownItem) => void;
}

interface SelectionListProps extends ListProps {
  selected: DropdownItem | null;
}

export function MenuList({ options, onClickItem }: ListProps) {
  return (
    <ul className="border-gray300 absolute right-0 mt-1 flex w-full min-w-24 flex-col items-stretch justify-center gap-1 rounded-md border bg-white px-1.5 py-2 drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)] filter">
      {options.map((option) => (
        <MenuItem key={option.id} option={option} onClickItem={onClickItem} />
      ))}
    </ul>
  );
}

export function SelectionList({ options, onClickItem, selected }: SelectionListProps) {
  return (
    <ul className="border-gray300 absolute right-0 mt-1 flex w-full min-w-24 flex-col items-stretch justify-center gap-1 rounded-md border bg-white px-1.5 py-2 drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)] filter">
      {options.map((option) => (
        <SelectionItem
          key={option.id}
          option={option}
          onClickItem={onClickItem}
          selected={selected}
        />
      ))}
    </ul>
  );
}
