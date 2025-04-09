import { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/common/Input';
import InvitedDashboardListTable from './InvitedDashboardListTable';
import { Invitation } from './types';

export default function InvitedDashboardList({
  invitations = [],
  isLoading,
  handleAccept,
  handleReject,
}: {
  invitations: Invitation[];
  isLoading: boolean;
  handleAccept: (id: number) => void;
  handleReject: (id: number) => void;
}) {
  const [keyword, setKeyword] = useState('');

  const filtered = invitations.filter((inv) =>
    inv.dashboard.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <div>
        <Input
          placeholder="검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
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
      <div>
        <InvitedDashboardListTable
          invitations={filtered}
          isLoading={isLoading}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </div>
    </>
  );
}
