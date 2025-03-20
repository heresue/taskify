'use client';

import { useState, useEffect, useRef } from 'react';
import { List, VariableList } from './List';
import { AutoCompleteInput } from '@/components/common/Dropdown/Input';
import { Trigger, VariableTrigger } from '@/components/common/Dropdown/Trigger';

type DropdownItemId = number | string;

type DropdownItem = {
  id: DropdownItemId;
  value: string;
  Component?: React.ElementType;
};

interface DropdownProps {
  options: DropdownItem[];
  onSelect: (option: DropdownItem) => void;
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

  const selectItem = (option: DropdownItem) => {
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
      <Trigger onClick={toggleList} isOpen={isOpen} />
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

export function VariableDropdown({ options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<DropdownItem>(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const closeList = () => {
    setIsOpen(false);
  };

  const selectItem = (option: DropdownItem) => {
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
      <VariableTrigger onClick={toggleList} selected={selected} isOpen={isOpen} />
      {isOpen && (
        <VariableList
          options={options}
          onClickItem={(option) => {
            console.log('event');
            selectItem(option);
            closeList();
          }}
          selected={selected}
        />
      )}
    </div>
  );
}

export function AutoCompleteDropdown({ options, onSelect }: DropdownProps) {
  const [query, setQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<DropdownItem[]>(options);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  const closeList = () => {
    setIsOpen(false);
  };

  const selectItem = (option: DropdownItem) => {
    setSelected(option);
    setQuery(option.value);
    onSelect(option);
  };

  const clearFilter = () => {
    setSelected(null);
    setQuery('');
    setFilteredOptions(options);
  };

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    const newFilteredOptions = options.filter(({ value }) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOptions(newFilteredOptions);
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
      {selected && !isOpen ? (
        <VariableTrigger onClick={toggleList} selected={selected} isOpen={isOpen} />
      ) : (
        <AutoCompleteInput
          value={query}
          onClick={handleInputClick}
          onChange={handleInputChange}
          onClear={clearFilter}
          isOpen={isOpen}
        />
      )}
      {isOpen && (
        <VariableList
          options={filteredOptions.length !== 0 ? filteredOptions : options}
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
