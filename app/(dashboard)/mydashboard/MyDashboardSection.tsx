'use client';

import Button from '@/components/common/Button';
import { Invitation } from './invitations';
import CreateDashboardModal from './CreateDashboardModal';
import { useState } from 'react';

interface Props {
  mydashboards: Invitation[];
}

export default function MyDashboardSection({ mydashboards }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {mydashboards.length > 0 ? (
        <div className="mb-10 flex flex-col gap-3">
          <div className="grid grid-cols-3 grid-rows-2 gap-[13px]">
            <Button variant="outline" size="dashboardCard" onClick={() => setIsOpen(true)}>
              <span>새로운 대시보드</span>
              <img src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
            </Button>

            {mydashboards.map((mydashboards) => (
              <Button key={mydashboards.id} variant="outline" size="dashboardCard">
                {mydashboards.dashboard.title}
              </Button>
            ))}
          </div>
          <button className="w-[200px] self-end">페이지네이션 버튼</button>
        </div>
      ) : (
        <div className="mb-[114px] flex flex-col gap-3">
          <Button variant="outline" size="dashboardCard" onClick={() => setIsOpen(true)}>
            <span>새로운 대시보드</span>
            <img src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
          </Button>
        </div>
      )}

      <CreateDashboardModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
