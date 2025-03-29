'use client';

import Setting from '@/assets/icons/Setting';
import { MenuOption } from '@/components/common/Dropdown/Item';
import { DropdownItem } from '@/components/common/Dropdown/types';
import DeleteColumnModal from '@/components/DeleteColumnModal/DeleteColumnModal';
import { useModal } from '@/hooks/useModal';
import { useState } from 'react';

const COLUMN_DROPDOWN_LIST = [
  { id: 'edit', value: '수정하기' },
  { id: 'delete', value: '삭제하기' },
];

export default function ColumnSettingList({ columnId }: { columnId: number }) {
  const [modalId, setModalId] = useState('');
  const [openColumnId, setOpenColumnId] = useState<number | null>(null);
  const { isOpen, open, close } = useModal();

  const handleSelectOpenModal = (option: DropdownItem) => {
    setModalId(String(option.id));
    open();
  };

  const toggleDropdown = () => {
    setOpenColumnId((prev) => (prev === columnId ? null : columnId));
  };

  return (
    <div className="relative">
      <DeleteColumnModal
        isOpen={modalId === 'delete' && isOpen}
        onClose={close}
        columnId={openColumnId ?? 0}
      />
      <Setting width={24} height={24} onClick={toggleDropdown} />
      {openColumnId === columnId && (
        <ul className="border-gray300 absolute right-[-5px] z-1 mt-1 flex max-h-40 min-w-24 flex-col items-stretch justify-start gap-1 overflow-y-auto rounded-md border bg-white">
          {COLUMN_DROPDOWN_LIST.map((option) => (
            <MenuOption key={option.id} option={option} onClickItem={handleSelectOpenModal} />
          ))}
        </ul>
      )}
    </div>
  );
}
