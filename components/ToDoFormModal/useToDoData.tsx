import { useState } from 'react';
import { api } from '@/lib/api';
import { DropdownItem } from '../common/Dropdown/types';
import { postDashboardCardImage } from './action';
import checkAllFormComplete from '@/utils/checkAllFormComplete';
import formatDateTime from '@/utils/formatDateTime';
import DEFAULT_CARD_IMAGE from '@/constants/image/defaultCardImage';

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

  const data = {
    title: toDoData.title,
    description: toDoData.description,
    dueDate: formatDateTime(toDoData.dueDate),
    dashboardId,
    assigneeUserId: assigneeUser.id,
    columnId,
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setToDoData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const isFormComplete = checkAllFormComplete(data) && tags.length !== 0;
  const handleToDoSubmit = async () => {
    if (!isFormComplete) return;

    await api.post('/cards', {
      ...data,
      tags,
      imageUrl: toDoData.imageUrl ?? DEFAULT_CARD_IMAGE,
    });
  };

  return {
    dueDate: toDoData.dueDate,
    image: toDoData.imageUrl,
    isFormComplete,
    handleFormChange,
    handleAssigneeUserChange,
    handleImageChange,
    handleDueDateChange,
    handleTagsChange,
    handleToDoSubmit,
  };
}
