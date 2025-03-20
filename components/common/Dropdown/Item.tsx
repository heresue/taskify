'use client';

import Image from 'next/image';
import check from '@/public/check.svg';
import { DropdownItem } from '@/components/common/Dropdown/types';

interface ItemProps {
  option: DropdownItem;
  onClickItem: (option: DropdownItem) => void;
}

interface SelectionItemProps extends ItemProps {
  selected: DropdownItem | null;
}

export function MenuItem({ option, onClickItem }: ItemProps) {
  return (
    <li
      className="hover:bg-violet8 hover:text-violet w-full cursor-pointer rounded-sm px-4 py-1"
      onClick={() => onClickItem(option)}
    >
      <button className="text-regular14 cursor-pointer rounded-sm">
        {option.renderItem ? <>{option.renderItem()}</> : <span>{option.value}</span>}
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
      <Image
        src={check}
        width={22}
        height={22}
        alt="선택됨"
        className={`${option.id !== selected?.id && 'invisible'}`}
      />
      <button className="text-regular14 cursor-pointer">
        {option.renderItem ? <>{option.renderItem()}</> : <span>{option.value}</span>}
      </button>
    </li>
  );
}
