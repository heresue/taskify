'use client';

import Button from '@/components/common/Button';
import ToDoFormModal from '@/components/ToDoFormModal/ToDoFormModal';
import Plus from '@/public/icons/plus.svg';
import { useState } from 'react';

export default function AddCardBtn({ columnId }: { columnId: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ToDoFormModal open={isOpen} onClose={() => setIsOpen(false)} columnId={columnId} />
      <Button onClick={() => setIsOpen(true)} fullWidth size="addTodo" variant="outline">
        <Plus />
      </Button>
    </>
  );
}
