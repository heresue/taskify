'use client';

import check from '@/public/check.svg';
import Image from 'next/image';

interface ItemWrapperProps {
  option: string;
  onClick: () => void;
}

export function Item({ option, onClick }: ItemWrapperProps) {
  return (
    <li className="hover:bg-violet8 hover:text-violet w-full cursor-pointer rounded-sm px-4 py-1">
      <button className="text-regular14 cursor-pointer rounded-sm" onClick={onClick}>
        {option}
      </button>
    </li>
  );
}

type ItemProps = {
  text: string;
};

interface VariableItemWrapperProps extends ItemWrapperProps {
  selected: string | null;
  ItemComponent: React.ComponentType<ItemProps>; // 사용자가 전달한 컴포넌트를 받는 Prop
}

export function VariableItem({
  option,
  onClick,
  selected,
  ItemComponent,
}: VariableItemWrapperProps) {
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
        <ItemComponent text={option} />
      </button>
    </li>
  );
}

interface TextProps {
  option: string;
}

export function Text({ option }: TextProps) {
  return <div>{option}</div>;
}
