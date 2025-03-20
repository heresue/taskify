import { MenuItem, SelectionItem } from '@/components/common/Dropdown/Item';
import { DropdownOption } from '@/components/common/Dropdown/types';

interface ListProps {
  options: DropdownOption[];
  onClickItem: (option: DropdownOption) => void;
}

interface SelectionListProps extends ListProps {
  selected: DropdownOption | null;
}

export function MenuList({ options, onClickItem }: ListProps) {
  return (
    <ul className="border-gray300 absolute right-0 mt-1 flex max-h-40 w-fit min-w-24 flex-col items-stretch justify-start gap-1 overflow-y-auto rounded-md border bg-white px-1.5 py-2 drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)] filter">
      {options.map((option) => (
        <MenuItem key={option.id} option={option} onClickItem={onClickItem} />
      ))}
    </ul>
  );
}

export function SelectionList({ options, onClickItem, selected }: SelectionListProps) {
  return (
    <ul className="border-gray300 absolute right-0 mt-1 flex max-h-68 w-full min-w-24 flex-col items-stretch justify-start gap-1 overflow-y-auto rounded-md border bg-white px-1.5 py-2 drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)] filter">
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
