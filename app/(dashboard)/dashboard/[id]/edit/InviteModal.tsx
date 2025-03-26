import CloseIcon from '@/assets/icons/CloseIcon';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function InviteModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      submitMessage="생성"
      cancelMessage="취소"
      padding="24/24"
      borderRadius="8"
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-bold24">초대하기</h3>
          <CloseIcon width="36" height="36" />
        </div>
        <label htmlFor="dashboardName" className="mt-6 mb-1 flex flex-col gap-2">
          <span className="text-medium18 text-black200 mb-2">이메일</span>
          <Input id="dashboardName" name="dashboardName" placeholder="이메일을 입력하세요" />
        </label>
      </div>
    </Modal>
  );
}
