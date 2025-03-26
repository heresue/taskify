import Modal from '../common/Modal';
import ToDoForm from './ToDoForm';

interface ToDoFormProps {
  open: boolean;
  onClose: () => void;
  cardId?: number;
}

export default function ToDoFormModal({ open, onClose, cardId }: ToDoFormProps) {
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
        <ToDoForm cardId={cardId} />
      </div>
    </Modal>
  );
}
