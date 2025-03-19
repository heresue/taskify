'use client';

import Image from 'next/image';
import arrow_drop_down from '@/public/arrow_drop_down.svg';
import kebab_more_vert from '@/public/kebab_more_vert.svg';
import { Text } from './Item';

interface TriggerProps {
  onClick: () => void;
}

export function Trigger({ onClick }: TriggerProps) {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      <Image
        className="size-5 lg:size-7"
        src={kebab_more_vert}
        width={28}
        height={28}
        alt="메뉴 열기"
      />
    </button>
  );
}

type ItemProps = {
  text: string;
};

interface VariableTriggerProps extends TriggerProps {
  selected: string | null;
  ItemComponent: React.ComponentType<ItemProps>; // 사용자가 전달한 컴포넌트를 받는 Prop
}

export function VariableTrigger({ onClick, selected, ItemComponent }: VariableTriggerProps) {
  return (
    <button
      className="align-center flex w-full cursor-pointer justify-between rounded border border-[#d9d9d9] bg-white px-4 py-2"
      onClick={onClick}
    >
      <ItemComponent text={selected || '선택된 값'} />
      <Image className="size-6.5" src={arrow_drop_down} width={26} height={26} alt="메뉴 열기" />
    </button>
  );
}
