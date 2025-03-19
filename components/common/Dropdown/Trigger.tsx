'use client';

import Image from 'next/image';
import arrow_drop_down from '@/public/arrow_drop_down.svg';
import kebab_more_vert from '@/public/kebab_more_vert.svg';

interface TriggerProps {
  onClick: () => void;
  isOpen: boolean;
}

export function Trigger({ onClick }: TriggerProps) {
  return (
    <button className="cursor-pointer rounded-sm hover:bg-[#eeeeee]" onClick={onClick}>
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

interface VariableTriggerProps extends TriggerProps {
  selected: string;
  ItemComponent: React.ElementType;
}

export function VariableTrigger({
  onClick,
  selected,
  ItemComponent,
  isOpen,
}: VariableTriggerProps) {
  return (
    <button
      className={`flex min-h-12 w-full cursor-pointer items-center justify-between rounded border border-[#d9d9d9] bg-white px-4 py-2 hover:bg-[#eeeeee] ${isOpen && 'border-violet'}`}
      onClick={onClick}
    >
      <ItemComponent value={selected} />
      <Image className="size-6.5" src={arrow_drop_down} width={26} height={26} alt="메뉴 열기" />
    </button>
  );
}

export function AutoCompleteTrigger({
  onClick,
  selected,
  ItemComponent,
  isOpen,
}: VariableTriggerProps) {
  return (
    <button
      className={`flex min-h-12 w-full cursor-pointer items-center justify-between rounded border border-[#d9d9d9] bg-white px-4 py-2 hover:bg-[#eeeeee] ${isOpen && 'border-violet'}`}
      onClick={onClick}
    >
      <ItemComponent value={selected} />
      <Image className="size-6.5" src={arrow_drop_down} width={26} height={26} alt="메뉴 열기" />
    </button>
  );
}
