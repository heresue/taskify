'use client';

import { useState, useEffect, useRef } from 'react';
import { Trigger, VariableTrigger } from '@/components/common/Dropdown/Trigger';
import { List, VariableList } from './List';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function Dropdown({ options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const closeList = () => {
    setIsOpen(false);
  };

  const selectItem = (option: string) => {
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
    <div className="relative" ref={dropdownRef}>
      <Trigger onClick={toggleList} />
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

type ItemProps = {
  text: string;
};

interface VariableDropdownProps extends DropdownProps {
  ItemComponent: React.ComponentType<ItemProps>;
}

export function VariableDropdown({ options, onSelect, ItemComponent }: VariableDropdownProps) {
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
    <div className="relative w-full" ref={dropdownRef}>
      <VariableTrigger onClick={toggleList} selected={selected} ItemComponent={ItemComponent} />
      {isOpen && (
        <VariableList
          options={options}
          onClickItem={(option) => {
            selectItem(option);
            closeList();
          }}
          selected={selected}
          ItemComponent={ItemComponent}
        />
      )}
    </div>
  );
}
