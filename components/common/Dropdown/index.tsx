'use client';

import { useState, useEffect, useRef } from 'react';
import kebab_more_vert from '@/public/kebab_more_vert.svg';
import Image from 'next/image';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  showSelected: boolean;
}

export default function Dropdown({ options, onSelect, showSelected }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const closeList = () => {
    setIsOpen(false);
  };

  const selectItem = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeList();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Trigger onClick={toggleList} showSelected={showSelected} selected={selected} />

      {isOpen && (
        <List
          options={options}
          onClickItem={(option) => {
            selectItem(option);
            closeList();
          }}
        />
      )}
    </div>
  );
}

interface TriggerProps {
  onClick: () => void;
  showSelected: boolean;
  selected: string | null;
}

function Trigger({ onClick, showSelected, selected }: TriggerProps) {
  return showSelected ? (
    <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white" onClick={onClick}>
      {selected || '옵션 선택'}
    </button>
  ) : (
    <button onClick={onClick}>
      <Image src={kebab_more_vert} alt="메뉴 열기" />
    </button>
  );
}

interface ListProps {
  options: string[];
  onClickItem: (option: string) => void;
}

function List({ options, onClickItem }: ListProps) {
  return (
    <ul className="absolute mt-2 w-full rounded border bg-white shadow-lg">
      {options.map((option) => (
        <Item key={option} option={option} onClick={() => onClickItem(option)} />
      ))}
    </ul>
  );
}

interface ItemProps {
  option: string;
  onClick: () => void;
}

function Item({ option, onClick }: ItemProps) {
  return (
    <li className="cursor-pointer p-2 hover:bg-gray-200" onClick={onClick}>
      {option}
    </li>
  );
}
