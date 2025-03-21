'use client';

import { useState, useEffect, useRef } from 'react';
import { MenuTrigger, SelectionTrigger } from '@/components/common/Dropdown/Trigger';
import { MenuList, SelectionList, SearchableList } from '@/components/common/Dropdown/List';
import { DropdownItem, SearchableDropdownItem } from '@/components/common/Dropdown/types';
import { SearchableInput } from '@/components/common/Dropdown/Input';

export interface DropdownProps {
  options: DropdownItem[];
  onSelect: (option: DropdownItem) => void;
}

export interface SearchableDropdownProps {
  options: SearchableDropdownItem[];
  onSelect: (option: SearchableDropdownItem) => void;
  placeholder?: string;
}

export function MenuDropdown({ options, onSelect }: DropdownProps) {
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
    <div className="relative w-fit" ref={dropdownRef}>
      <MenuTrigger onClick={toggleList} isOpen={isOpen} />
      {isOpen && (
        <MenuList
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

export function SelectionDropdown({ options, onSelect }: DropdownProps) {
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
      <SelectionTrigger onClick={toggleList} selected={selected} isOpen={isOpen} />
      {isOpen && (
        <SelectionList
          options={options}
          selected={selected}
          onClickItem={(option) => {
            selectItem(option);
            closeList();
          }}
        />
      )}
    </div>
  );
}

export function SearchableDropdown({ options, onSelect, placeholder }: SearchableDropdownProps) {
  const [query, setQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<SearchableDropdownItem[]>(options);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<SearchableDropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  const closeList = () => {
    setIsOpen(false);
  };

  const selectItem = (option: SearchableDropdownItem) => {
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
        <SelectionTrigger onClick={toggleList} selected={selected} isOpen={isOpen} />
      ) : (
        <SearchableInput
          value={query}
          isOpen={isOpen}
          placeholder={placeholder ?? ''}
          onClick={handleInputClick}
          onChange={handleInputChange}
          onClear={clearFilter}
        />
      )}
      {isOpen && (
        <SearchableList
          options={filteredOptions}
          selected={selected}
          onClickItem={(option) => {
            selectItem(option);
            closeList();
          }}
        />
      )}
    </div>
  );
}
