import CheckIcon from '@/assets/icons/CheckIcon';
import { DropdownItem, SearchableDropdownItem } from '@/components/common/Dropdown/types';

interface OptionProps {
  option: DropdownItem;
  onClickItem: (option: DropdownItem) => void;
}

interface SelectionOptionProps extends OptionProps {
  selected: DropdownItem | null;
}

interface SearchableOptionProps {
  option: SearchableDropdownItem;
  onClickItem: (option: SearchableDropdownItem) => void;
  selected: SearchableDropdownItem | null;
}

export function MenuOption({ option, onClickItem }: OptionProps) {
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

export function SelectionOption({ option, onClickItem, selected }: SelectionOptionProps) {
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

export function SearchableOption({ option, onClickItem, selected }: SearchableOptionProps) {
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
