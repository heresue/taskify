'use client';

import Image from 'next/image';
import check from '@/public/check.svg';

interface ItemProps {
  option: string;
  onClick: () => void;
}

interface VariableItemProps extends ItemProps {
  selected: string;
  ItemComponent: React.ElementType;
}

export function Item({ option, onClick }: ItemProps) {
  return (
    <li className="hover:bg-violet8 hover:text-violet w-full cursor-pointer rounded-sm px-4 py-1">
      <button className="text-regular14 cursor-pointer rounded-sm" onClick={onClick}>
        {option}
      </button>
    </li>
  );
}

export function VariableItem({ option, onClick, selected, ItemComponent }: VariableItemProps) {
  return (
    <li className="hover:bg-violet8 hover:text-violet flex w-full cursor-pointer flex-row items-center justify-start gap-2 rounded-sm px-4 py-1">
      <Image
        src={check}
        width={22}
        height={22}
        alt="선택됨"
        className={`${option !== selected && 'invisible'}`}
      />
      <button className="text-regular14 cursor-pointer" onClick={onClick}>
        <ItemComponent value={option} />
      </button>
    </li>
  );
}
