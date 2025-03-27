'use client';

import Input from '@/components/common/Input';
import Image from 'next/image';
import InvitedDashboardList from './InvitedDashboardList';
import { Invitation } from './invitations';
import { useEffect, useState } from 'react';

interface Props {
  invitations: Invitation[];
}

// mock 데이터 기반으로 단순 기능만 구현함에 따라
// 주석처리 된 코드가 있습니다.

export default function InvitedSection({ invitations: initialInvitations }: Props) {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  // const [myDashboards, setMyDashboards] = useState<Invitation[]>([]);

  useEffect(() => {
    setInvitations(initialInvitations);
  }, [initialInvitations]);

  const handleAccept = (id: number) => {
    const accepted = invitations.find((inv) => inv.id === id);
    if (!accepted) return;

    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    // setMyDashboards((prev) => [...prev, accepted]);
    console.log('수락된 대시보드:', accepted.dashboard.title);
  };

  const handleDecline = (id: number) => {
    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    console.log('거절된 초대 ID:', id);
  };

  if (invitations.length === 0) {
    return (
      <div className="relative h-[390px] rounded-2xl bg-white px-10 py-6">
        <h3 className="text-bold24 text-black200">초대받은 대시보드</h3>
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[30px]">
          <div className="relative h-[75px] w-[87px]">
            <Image src="/invite.svg" fill alt="초대받은 대시보드" />
          </div>
          <p className="text-gray400 text-regular18">아직 초대받은 대시보드가 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white py-6">
      <div className="flex flex-col gap-8 px-10">
        <h3 className="text-bold24 text-black200">초대받은 대시보드</h3>
        <Input
          placeholder="검색"
          size={16}
          customInputClass="h-6"
          customBorderClass="py-[7px]"
          leftIcon={
            <Image
              src="/icons/search.svg"
              alt="검색 아이콘"
              width={17}
              height={17}
              className="ml-1"
            />
          }
        />
      </div>
      <InvitedDashboardList
        invitations={invitations}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </div>
  );
}
