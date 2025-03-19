'use client';

import Image from 'next/image';
import arrow_drop_down from '@/public/arrow_drop_down.svg';
import kebab_more_vert from '@/public/kebab_more_vert.svg';
import { Text } from './Item';
import close from '@/public/close_small.svg';

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

interface AutoCompleteInput {
  value: string;
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  isOpen: boolean;
}

export function AutoCompleteInput({
  onClick,
  value,
  onChange,
  onClear,
  isOpen,
}: AutoCompleteInput) {
  return (
    <button
      className={`flex min-h-12 w-full items-center justify-between rounded border border-[#d9d9d9] bg-white px-4 py-2 ${isOpen && 'border-violet'}`}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder="이름을 입력해 주세요"
        className="w-full border-0 outline-0"
      />
      {value !== '' && (
        <Image
          className="rounded-sm hover:bg-[#eeeeee]"
          src={close}
          width={24}
          height={24}
          alt="메뉴 열기"
          onClick={onClear}
        />
      )}
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
