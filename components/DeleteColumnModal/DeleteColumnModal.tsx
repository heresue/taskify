import { ModalProps } from '@/types/modalProps';
import EXTERNAL_API from '@/constants/api/external';
import { api } from '@/lib/api';
import Modal from '../common/Modal';

interface DeleteColumnProps extends ModalProps {
  columnId: number;
}

export default function DeleteColumnModal({ isOpen, onClose, columnId }: DeleteColumnProps) {
  const handelColumnDelete = async () => {
    await api.delete(`${EXTERNAL_API.COLUMNS.ROOT}/${columnId}`).then(() => onClose());
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        padding="24/24"
        borderRadius="16"
        submitMessage="삭제"
        cancelMessage="취소"
        onSubmit={handelColumnDelete}
      >
        <div className="text-medium20 text-black200 flex w-full items-center justify-center">
          컬럼의 모든 카드가 삭제됩니다.
        </div>
      </Modal>
    </>
  );
}
