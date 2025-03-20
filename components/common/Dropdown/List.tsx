import { Item, VariableItem } from '@/components/common/Dropdown/Item';

type DropdownItemId = number | string;

type DropdownItem = {
  id: DropdownItemId;
  value: string;
  Component?: React.ElementType;
};

interface ListProps {
  options: DropdownItem[];
  onClickItem: (option: DropdownItem) => void;
}

interface VariableListProps extends ListProps {
  selected: DropdownItem | null;
}

export function List({ options, onClickItem }: ListProps) {
  return (
    <ul className="border-gray300 absolute right-0 mt-1 flex w-full min-w-24 flex-col items-stretch justify-center gap-1 rounded-md border bg-white px-1.5 py-2 drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)] filter">
      {options.map((option) => (
        <Item key={option.id} option={option} onClickItem={onClickItem} />
      ))}
    </ul>
  );
}

export function VariableList({ options, onClickItem, selected }: VariableListProps) {
  return (
    <ul className="border-gray300 absolute right-0 mt-1 flex w-full min-w-24 flex-col items-stretch justify-center gap-1 rounded-md border bg-white px-1.5 py-2 drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)] filter">
      {options.map((option) => (
        <VariableItem
          key={option.id}
          option={option}
          onClickItem={onClickItem}
          selected={selected}
        />
      ))}
    </ul>
  );
}
