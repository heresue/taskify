'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InvitedDashboardList from './InvitedDashboardList';
import InvitedDashboardEmpty from './InvitedDashboardEmpty';
import { acceptInvitation, rejectInvitation } from './data';
import { Invitation } from './types';

export default function InvitedSection({ initialData }: { initialData: Invitation[] }) {
  const [invitations, setInvitations] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAccept = async (id: number) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await acceptInvitation(id);
      setInvitations((prev) => prev.filter((inv) => inv.id !== id));
      router.refresh();
    } catch (err) {
      console.error('초대 수락 에러:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = async (id: number) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await rejectInvitation(id);
      router.refresh();
      setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    } catch (err) {
      console.error('초대 거절 에러:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white py-6">
      <div className="flex flex-col gap-8 px-10">
        <h3 className="text-bold24 text-black200">초대받은 대시보드</h3>
        {invitations.length === 0 ? (
          <InvitedDashboardEmpty />
        ) : (
          <InvitedDashboardList
            invitations={invitations}
            isLoading={isLoading}
            handleAccept={handleAccept}
            handleReject={handleReject}
          />
        )}
      </div>
    </div>
  );
}
