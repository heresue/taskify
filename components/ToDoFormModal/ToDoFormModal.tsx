import { useEffect, useMemo, useState } from 'react';
import { SearchableDropdown, SelectionDropdown } from '../common/Dropdown';
import Modal from '../common/Modal';
import FormField from '../compound/form/FormField';
import UploadImage from '../compound/upload/UploadImage';
import ColumnName from '../ColumnName/ColumnName';
import TagInput from './TagInput';
import useToDoData from './useToDoData';
import { DropdownItem } from '../common/Dropdown/types';
import UserBadge from '../UserBadge/UserBadge';
import { getMembers, Member } from './action';
import DueDate from './DueDate';
import useDashboardParamsId from '../Dashboard/useDashboardParamsId';
import Pencil from '@/public/icons/pencil.svg';
import { ModalProps } from '@/types/modalProps';
import getDashboardColumn, { ColumnsType } from '../Dashboard/DashboardColumn/action';

interface ToDoFormProps extends ModalProps {
  columnId: number;
  cardId?: number;
}

const INITIAL_MEMBER_VALUE = {
  id: 0,
  nickname: '',
  profileImageUrl: '',
  userId: 0,
};

export default function ToDoFormModal({ isOpen, onClose, columnId, cardId }: ToDoFormProps) {
  const [dashboardMembers, setDashboardMembers] = useState<Member[]>([INITIAL_MEMBER_VALUE]);
  const [columnsName, setColumnsName] = useState<ColumnsType[]>([{ id: 0, title: '' }]);

  const { dashboardId } = useDashboardParamsId();

  const {
    dueDate,
    image,
    isFormComplete,
    handleFormChange,
    handleAssigneeUserChange,
    handleDueDateChange,
    handleImageChange,
    handleTagsChange,
    handleToDoSubmit,
  } = useToDoData(columnId, dashboardId);

  const createOrUpdate = cardId ? '수정' : '생성';

  useEffect(() => {
    if (!dashboardId) return;

    const fetchDashboardData = async () => {
      try {
        const [columns, membersData] = await Promise.all([
          getDashboardColumn(dashboardId),
          getMembers(dashboardId),
        ]);

        if (columns) setColumnsName(columns);
        if (membersData) setDashboardMembers(membersData.members);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
      }
    };

    fetchDashboardData();
  }, [dashboardId]);

  const memberList = useMemo(() => {
    return dashboardMembers.map((member) => ({
      value: member.nickname,
      id: member.userId,
      renderItem: () => (
        <UserBadge
          size={26}
          profile={member.profileImageUrl}
          userName={member.nickname}
          gap={6}
          fontSize="R14"
        />
      ),
    }));
  }, [dashboardMembers]);

  const columnList = useMemo(() => {
    return columnsName.map((column) => ({
      value: column.title,
      id: column.id,
      renderItem: () => <ColumnName columnName={column.title} />,
    }));
  }, [columnsName]);

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      padding="32/32"
      borderRadius="16"
      cancelMessage="취소"
      submitMessage={createOrUpdate}
      onSubmit={handleToDoSubmit}
      disabled={!isFormComplete}
    >
      <div className="flex w-full flex-col gap-8">
        <h1 className="text-bold24 text-black200">할 일 {createOrUpdate}</h1>
        <div className="flex flex-col gap-8 md:flex-row">
          {cardId && (
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-black200 text-medium18">상태</label>
              <SelectionDropdown options={columnList} onSelect={() => {}} />
            </div>
          )}
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-black200 text-medium18">담당자</label>
            <SearchableDropdown
              options={memberList}
              onSelect={(option: DropdownItem) => {
                handleAssigneeUserChange(option.id);
              }}
              placeholder="이름을 입력해 주세요"
            />
          </div>
        </div>
        <FormField
          fieldType="input"
          label="제목"
          name="title"
          placeholder="제목을 입력해 주세요"
          onChange={handleFormChange}
          required
        />
        <FormField
          fieldType="textarea"
          label="설명"
          name="description"
          placeholder="설명을 입력해 주세요"
          onChange={handleFormChange}
          required
        />
        <DueDate
          dueDate={dueDate}
          onDueDateChange={(date: Date | null) => handleDueDateChange(date)}
        />
        <TagInput onChange={(tags: string[]) => handleTagsChange(tags)} />
        <div className="flex flex-col gap-[5px]">
          <label className="text-black200 text-medium18">이미지</label>
          <div className="relative h-[58px] w-[58px] rounded-lg md:h-[76px] md:w-[76px]">
            <UploadImage image={image} id="image" onChange={handleImageChange} />
            {image && (
              <div
                className="absolute top-0 left-0 flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-lg bg-black opacity-40 md:h-[76px] md:w-[76px]"
                onClick={() => document.getElementById('image')?.click()}
              >
                <Pencil />
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
