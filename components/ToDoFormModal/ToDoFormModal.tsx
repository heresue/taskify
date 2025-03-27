import { SearchableDropdown, SelectionDropdown } from '../common/Dropdown';
import Modal from '../common/Modal';
import FormField from '../compound/form/FormField';
import UploadImage from '../compound/upload/UploadImage';
import ColumnName from '../ColumnName/ColumnName';
import TagInput from './TagInput';
import useToDoData from './useToDoData';
import { DropdownItem } from '../common/Dropdown/types';
import { useEffect, useMemo, useState } from 'react';
import UserBadge from '../UserBadge/UserBadge';
import { useParams } from 'next/navigation';
import { getMembers, Member } from './action';

interface ToDoFormProps {
  open: boolean;
  onClose: () => void;
  cardId?: number;
  columnId: number;
}

const INITIAL_MEMBER_VALUE = {
  id: 0,
  nickname: '',
  profileImageUrl: '',
  userId: 0,
};

export default function ToDoFormModal({ open, onClose, cardId, columnId }: ToDoFormProps) {
  const [dashboardMembers, setDashboardMembers] = useState<Member[]>([INITIAL_MEMBER_VALUE]);

  const params = useParams<{ dashboardId: string }>();
  const dashboardId = Number(params.dashboardId);

  const { handleFormChange, handleAssigneeUserChange, handleTagsChange, handleToDoSubmit } =
    useToDoData(columnId, dashboardId);

  const createOrUpdate = cardId ? '수정' : '생성';

  useEffect(() => {
    if (!dashboardId) return;

    const getMembersData = () => {
      getMembers(dashboardId)
        .then((result) => {
          if (!result) return;
          setDashboardMembers(result.members);
        })
        .catch((err) => console.error(err));
    };
    getMembersData();
  }, [dashboardId]);

  const memberList = useMemo(() => {
    return dashboardMembers.map((member) => ({
      value: member.nickname,
      id: member.id,
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

  return (
    <Modal
      onClose={onClose}
      isOpen={open}
      padding="32/32"
      borderRadius="16"
      cancelMessage="취소"
      submitMessage={createOrUpdate}
      onSubmit={() => handleToDoSubmit}
    >
      <div className="flex w-full flex-col gap-8">
        <h1 className="text-bold24 text-black200">할 일 {createOrUpdate}</h1>
        <div className="flex flex-col gap-8 md:flex-row">
          {cardId && (
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-black200 text-medium18">상태</label>
              <SelectionDropdown
                options={[
                  { value: 'to do', id: 1, renderItem: () => <ColumnName columnName="todo" /> },
                ]}
                onSelect={() => {}}
              />
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
        <TagInput onChange={(tags: string[]) => handleTagsChange(tags)} />
        <div className="flex flex-col gap-[5px]">
          <label className="text-black200 text-medium18">이미지</label>
          <div className="relative h-[58px] w-[58px] md:h-[76px] md:w-[76px]">
            <UploadImage image={''} id="" onChange={() => {}} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
