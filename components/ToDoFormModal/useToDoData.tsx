import { useState } from 'react';
import { api } from '@/lib/api';
import { DropdownItem } from '../common/Dropdown/types';

interface ToDoData {
  title: string;
  description: string;
  dueDate: string;
  imageUrl: string | null;
}

const INITIAL_TO_DO_VALUE = {
  title: '',
  description: '',
  dueDate: '',
  imageUrl: null,
};

export default function useToDoData(columnId: number, dashboardId: number) {
  const [toDoData, setToDoData] = useState<ToDoData>(INITIAL_TO_DO_VALUE);
  const [assigneeUser, setAssingeeUser] = useState<DropdownItem>({
    id: 0,
    value: '',
  });
  const [tags, setTags] = useState<string[]>([]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setToDoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAssigneeUserChange = (userId: number | string) =>
    setAssingeeUser({ ...assigneeUser, id: userId });

  const handleTagsChange = (tags: string[]) => {
    setTags(tags);
  };

  const handleToDoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post('/card', {
      ...toDoData,
      tags,
      dashboardId,
      assigneeUser,
      columnId,
    });
  };

  return {
    handleFormChange,
    handleAssigneeUserChange,
    handleTagsChange,
    handleToDoSubmit,
  };
}
