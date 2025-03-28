'use client';

import Button from '@/components/common/Button';
import InviteModal from './InviteModal';
import { useMemo, useState } from 'react';
import { mockInvitations } from '@/mocks/invitations';
import AddBoxIcon from '@/assets/icons/AddBoxIcon';

interface Props {
  dashboardId: string;
}

export default function InvitationListSection({ dashboardId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const invitees = useMemo(
    () =>
      mockInvitations.filter(
        (inv) => inv.dashboard.id === Number(dashboardId) && inv.inviteAccepted === null
      ),
    [dashboardId]
  );

  const [invitations, setInvitations] = useState(invitees);

  const cancelInvitation = async (id: number) => {
    console.log(`[임시] 초대 취소 요청: 초대 ID ${id}`);
    return Promise.resolve();
  };

  const handleCancel = async (id: number) => {
    try {
      await cancelInvitation(id);
      setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    } catch (err) {
      console.error('초대 취소 실패:', err);
    }
  };

  console.log('dashboardId:', dashboardId);

  return (
    <div id="section" className="rounded-2xl bg-white py-[32px]">
      <div className="mb-[27px] flex items-center justify-between px-[28px]">
        <h3 className="text-bold24">초대 내역</h3>
        <div className="flex items-center gap-4">
          <div>페이지네이션 버튼</div>
          <Button onClick={() => setIsOpen(true)}>
            <AddBoxIcon width='14' height='14' color="white" />
            <span className="text-medium14">초대하기</span>
          </Button>
        </div>
      </div>

      <div className="w-full rounded-lg">
        <h4 className="text-gray400 text-regular16 px-[28px]">이메일</h4>
        {invitations.map((inv) => (
          <div key={inv.id} className="border-gray200 border-b">
            <div className="flex justify-between px-[28px] py-[16px]">
              <div className="flex items-center gap-[12px]">
                <span>{inv.invitee.email}</span>
              </div>
              <Button variant="ghost" size="delete" onClick={() => handleCancel(inv.id)}>
                취소
              </Button>
            </div>
          </div>
        ))}
      </div>

      <InviteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
