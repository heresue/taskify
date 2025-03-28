import { useState } from 'react';
import { api } from '@/lib/api';
import { DropdownItem } from '../common/Dropdown/types';
import { postDashboardCardImage } from './action';

interface ToDoData {
  title: string;
  description: string;
  dueDate: Date | null;
  imageUrl: string | null;
}

const INITIAL_TO_DO_VALUE = {
  title: '',
  description: '',
  dueDate: null,
  imageUrl: null,
};

export default function useToDoData(columnId: number, dashboardId: number) {
  const [toDoData, setToDoData] = useState<ToDoData>(INITIAL_TO_DO_VALUE);
  const [assigneeUser, setAssigneeUser] = useState<DropdownItem>({
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

  const formatterDate = (dateValue: Date | null): string => {
    if (!dateValue) return '';

    const date = new Date(dateValue);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const handleDueDateChange = (date: Date | null) => {
    setToDoData((prev) => ({
      ...prev,
      dueDate: date,
    }));
  };

  const handleAssigneeUserChange = (userId: number | string) =>
    setAssigneeUser({ ...assigneeUser, id: userId });

  const handleTagsChange = (tags: string[]) => setTags(tags);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    try {
      const data = await postDashboardCardImage(columnId, file);

      setToDoData((prev) => ({
        ...prev,
        imageUrl: data.imageUrl,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleToDoSubmit = async () => {
    await api.post('/cards', {
      title: toDoData.title,
      description: toDoData.description,
      imageUrl: toDoData.imageUrl,
      dueDate: formatterDate(toDoData.dueDate),
      tags,
      dashboardId,
      assigneeUserId: assigneeUser.id,
      columnId,
    });
  };

  return {
    dueDate: toDoData.dueDate,
    image: toDoData.imageUrl,
    handleFormChange,
    handleAssigneeUserChange,
    handleImageChange,
    handleDueDateChange,
    handleTagsChange,
    handleToDoSubmit,
  };
}
