'use client';

import { useState, useEffect, useRef } from 'react';

import { Trigger, VariableTrigger } from '@/components/common/Dropdown/Trigger';
import { Item, VariableItem } from '@/components/common/Dropdown/Item';

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
    <div className={`relative ${showSelected && 'w-full'}`} ref={dropdownRef}>
      {showSelected ? (
        <VariableTrigger onClick={toggleList} selected={selected} />
      ) : (
        <Trigger onClick={toggleList} />
      )}

      {isOpen && (
        <List
          options={options}
          onClickItem={(option) => {
            selectItem(option);
            closeList();
          }}
          selected={selected}
        />
      )}
    </div>
  );
}

interface ListProps {
  options: string[];
  onClickItem: (option: string) => void;
  selected: string | null;
}

function List({ options, onClickItem, selected }: ListProps) {
  return (
    <ul className="absolute right-0 mt-1 flex w-full min-w-24 flex-col items-stretch justify-center gap-1 rounded-md border border-[#d9d9d9] bg-white px-1.5 py-2 drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)] filter">
      {options.map((option) => (
        <VariableItem
          key={option}
          option={option}
          onClick={() => onClickItem(option)}
          selected={selected}
        />
      ))}
    </ul>
  );
}
