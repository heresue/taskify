'use client';

import { useState, useEffect, useRef } from 'react';
import {
  AutoCompleteTrigger,
  Trigger,
  VariableTrigger,
} from '@/components/common/Dropdown/Trigger';
import { AutoCompleteInput } from '@/components/common/Dropdown/Input';
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

interface VariableDropdownProps extends DropdownProps {
  ItemComponent: React.ElementType;
}

export function VariableDropdown({ options, onSelect, ItemComponent }: VariableDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(options[0] || '');
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
      <VariableTrigger
        onClick={toggleList}
        selected={selected}
        ItemComponent={ItemComponent}
        isOpen={isOpen}
      />
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

export function AutoCompleteDropdown({ options, onSelect, ItemComponent }: VariableDropdownProps) {
  const [query, setQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  const closeList = () => {
    setIsOpen(false);
  };

  const selectItem = (option: string) => {
    setSelected(option);
    setQuery(option);
    onSelect(option);
  };

  const clearFilter = () => {
    setSelected('');
    setQuery('');
    setFilteredOptions(options);
  };

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    const newFilteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
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
      {selected !== '' && !isOpen ? (
        <AutoCompleteTrigger
          onClick={toggleList}
          selected={selected}
          ItemComponent={ItemComponent}
          isOpen={isOpen}
        />
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
          ItemComponent={ItemComponent}
        />
      )}
    </div>
  );
}
