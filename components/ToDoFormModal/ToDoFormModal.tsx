import { SearchableDropdown, SelectionDropdown } from '../common/Dropdown';
import Modal from '../common/Modal';
import FormField from '../compound/form/FormField';
import UploadImage from '../compound/upload/UploadImage';
import UserBadge from '../UserBadge/UserBadge';

interface ToDoFormProps {
  open: boolean;
  onClose: () => void;
  cardId?: number;
}

export default function ToDoFormModal({ open, onClose, cardId = 1 }: ToDoFormProps) {
  const CreateOrUpdate = cardId ? '수정' : '생성';
  return (
    <Modal
      onClose={onClose}
      isOpen={open}
      padding="32/32"
      borderRadius="16"
      cancelMessage="취소"
      submitMessage={CreateOrUpdate}
    >
      <div className="flex w-full flex-col gap-8">
        <h1 className="text-bold24 text-black200">할 일 {CreateOrUpdate}</h1>
        <div className="flex gap-8">
          {cardId && (
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-black200 text-medium18">상태</label>
              <SelectionDropdown options={[]} onSelect={() => {}} />
            </div>
          )}
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-black200 text-medium18">담당자</label>
            <SearchableDropdown
              options={[
                {
                  value: '김희진',
                  id: 1,
                  renderItem: () => (
                    <UserBadge size={26} userName="김희진" gap={6} fontSize="R14" />
                  ),
                },
              ]}
              onSelect={() => {}}
              placeholder="이름을 입력해 주세요"
            />
          </div>
        </div>
        <FormField fieldType="input" label="제목" placeholder="제목을 입력해 주세요" required />
        <FormField fieldType="textarea" label="설명" placeholder="설명을 입력해 주세요" required />
        <FormField fieldType="input" label="태그" placeholder="입력 후 Enter" />
        <div className="flex flex-col gap-[5px]">
          <label className="text-black200 text-medium18">이미지</label>
          <div className="relative h-[76px] w-[76px]">
            <UploadImage image={''} id="" onChange={() => {}} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
