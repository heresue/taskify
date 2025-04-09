'use client';

import { useModal } from '@/hooks/useModal';
import CreateDashboardModal from '@/app/(dashboard)/mydashboard/CreateDashboardModal';
import AddBoxIcon from '@/assets/icons/AddBoxIcon';

export default function AddDashboardButton() {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <button type="button" className="m-[3px] mx-auto md:mr-0" onClick={open}>
        <AddBoxIcon width="14" height="14" />
      </button>

      <CreateDashboardModal isOpen={isOpen} onClose={close} key={isOpen ? 'opened' : 'closed'} />
    </>
  );
}
