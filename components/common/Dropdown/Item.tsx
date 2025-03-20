import { DropdownOption } from '@/components/common/Dropdown/types';
import CheckIcon from '@/assets/icons/CheckIcon';

interface ItemProps {
  option: DropdownOption;
  onClickItem: (option: DropdownOption) => void;
}

interface SelectionItemProps extends ItemProps {
  selected: DropdownOption | null;
}

export function MenuItem({ option, onClickItem }: ItemProps) {
  return (
    <li
      className="hover:bg-violet8 hover:text-violet flex min-h-8 cursor-pointer flex-row items-center justify-start gap-2 rounded-sm px-4 py-1"
      onClick={() => onClickItem(option)}
    >
      <button className="text-regular14 w-full cursor-pointer rounded-sm">
        {option.renderItem ? (
          <>{option.renderItem()}</>
        ) : (
          <span className="truncate">{option.value}</span>
        )}
      </button>
    </li>
  );
}

export function SelectionItem({ option, onClickItem, selected }: SelectionItemProps) {
  return (
    <li
      className="hover:bg-violet8 hover:text-violet flex min-h-12 w-full cursor-pointer flex-row items-center justify-start gap-2 rounded-sm px-4 py-1"
      onClick={() => onClickItem(option)}
    >
      <div className={`${option.id !== selected?.id && 'invisible'}`}>
        <CheckIcon width="22" height="22" />
      </div>

      <button className="text-regular14 cursor-pointer">
        {option.renderItem ? (
          <>{option.renderItem()}</>
        ) : (
          <span className="truncate">{option.value}</span>
        )}
      </button>
    </li>
  );
}
