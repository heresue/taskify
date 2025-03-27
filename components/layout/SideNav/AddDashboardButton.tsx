import CreateDashboardModal from '@/app/(dashboard)/mydashboard/CreateDashboardModal';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

export default function AddDashboardButton() {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <button type="button" className="m-[3px] mx-auto md:mr-0" onClick={open}>
        <Image src="/icons/addbox.svg" alt="대시보드 추가" width={14} height={14} />
      </button>

      <CreateDashboardModal isOpen={isOpen} onClose={close} />
    </>
  );
}
