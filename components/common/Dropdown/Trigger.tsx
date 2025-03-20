'use client';

import Image from 'next/image';
import arrow_drop_down from '@/public/arrow_drop_down.svg';
import kebab_more_vert from '@/public/kebab_more_vert.svg';

type DropdownItemId = number | string;

type DropdownItem = {
  id: DropdownItemId;
  value: string;
  Component?: React.ElementType;
};

interface TriggerProps {
  onClick: () => void;
  isOpen: boolean;
}

interface VariableTriggerProps extends TriggerProps {
  selected: DropdownItem;
}

export function Trigger({ onClick }: TriggerProps) {
  return (
    <button
      className="hover:bg-gray200 size-5 cursor-pointer rounded-sm lg:size-7"
      onClick={onClick}
    >
      <Image src={kebab_more_vert} width={28} height={28} alt="메뉴 열기" />
    </button>
  );
}

function Text({ value }: { value: string }) {
  return <span>{value}</span>;
}

export function VariableTrigger({ onClick, selected, isOpen }: VariableTriggerProps) {
  return (
    <button
      className={`hover:bg-gray200 border-gray300 flex min-h-12 w-full cursor-pointer items-center justify-between rounded border bg-white px-4 py-2 ${isOpen && 'border-violet'}`}
      onClick={onClick}
    >
      {selected.Component ? <selected.Component /> : <Text value={selected.value} />}
      <Image className="size-6.5" src={arrow_drop_down} width={26} height={26} alt="메뉴 열기" />
    </button>
  );
}
