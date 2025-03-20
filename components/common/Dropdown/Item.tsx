'use client';

import Image from 'next/image';
import check from '@/public/check.svg';

type DropdownItemId = number | string;

type DropdownItem = {
  id: DropdownItemId;
  value: string;
  Component?: React.ElementType;
};

interface ItemProps {
  option: DropdownItem;
  onClickItem: (option: DropdownItem) => void;
}

interface VariableItemProps extends ItemProps {
  selected: DropdownItem | null;
}

export function Item({ option, onClickItem }: ItemProps) {
  return (
    <li
      className="hover:bg-violet8 hover:text-violet w-full cursor-pointer rounded-sm px-4 py-1"
      onClick={() => onClickItem(option)}
    >
      <button className="text-regular14 cursor-pointer rounded-sm">{option.value}</button>
    </li>
  );
}
function Text({ value }: { value: string }) {
  return <span>{value}</span>;
}

export function VariableItem({ option, onClickItem, selected }: VariableItemProps) {
  return (
    <li
      className="hover:bg-violet8 hover:text-violet flex w-full cursor-pointer flex-row items-center justify-start gap-2 rounded-sm px-4 py-1"
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
        {option.Component ? <option.Component /> : <Text value={option.value} />}
      </button>
    </li>
  );
}
