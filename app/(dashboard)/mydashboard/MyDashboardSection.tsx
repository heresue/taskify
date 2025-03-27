'use client';

import Image from 'next/image';
import Button from '@/components/common/Button';
import CreateDashboardModal from './CreateDashboardModal';
import { useModal } from '@/hooks/useModal';
import DashboardListItem from '@/components/layout/SideNav/DashboardListItem';
import { sizes } from '@/components/common/Button/style';

import { MockDashboard } from '@/mocks/dashboards';

interface Props {
  mydashboards: MockDashboard[];
}

export default function MyDashboardSection({ mydashboards }: Props) {
  const { isOpen, open, close } = useModal();

  if (mydashboards.length === 0) {
    return (
      <div className="mb-[114px] flex flex-col gap-3">
        <Button variant="outline" size="dashboardCard" onClick={open}>
          <span>새로운 대시보드</span>
          <Image src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-10 flex flex-col gap-3">
        <div className="grid grid-cols-3 grid-rows-2 gap-[13px]">
          <Button variant="outline" size="dashboardCard" onClick={open}>
            <span>새로운 대시보드</span>
            <Image src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
          </Button>
          {mydashboards.map((mydashboard) => (
            <DashboardListItem
              key={mydashboard.id}
              dashboardId={mydashboard.id}
              title={mydashboard.title}
              colorKey={mydashboard.color}
              createdByMe={mydashboard.createdByMe}
              className={sizes.dashboardCard}
              // isSelected={String(mydashboard.id) === selectedId}
            ></DashboardListItem>
          ))}
        </div>
        <button className="w-[200px] self-end">페이지네이션 버튼</button>
      </div>

      <CreateDashboardModal isOpen={isOpen} onClose={close} />
    </>
  );
}
