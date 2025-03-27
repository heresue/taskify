'use client';

import Button from '@/components/common/Button';
import CreateDashboardModal from './CreateDashboardModal';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import MyDashboardListItem from './MyDashboardListItem';
import { MockDashboard } from '@/mocks/dashboards';
import { usePathname } from 'next/navigation';

interface Props {
  mydashboards: MockDashboard[];
}

export default function MyDashboardSection({ mydashboards }: Props) {
  const pathname = usePathname();
  const selectedId = pathname?.split('/dashboard/')[1]?.split('/')[0];
  const { isOpen, open, close } = useModal();

  if (mydashboards.length === 0) {
    return (
      <div className="mb-[114px] flex flex-col gap-3">
        <Button variant="outline" size="dashboardCard" onClick={open}>
          <span className="text-black200 text-semi14 md:text-semi16">새로운 대시보드</span>
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
            <span className="text-black200 text-semi14 md:text-semi16">새로운 대시보드</span>
            <Image src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
          </Button>
          {mydashboards.map((dashboard) => (
            <MyDashboardListItem
              key={dashboard.id}
              dashboardId={dashboard.id}
              title={dashboard.title}
              colorKey={dashboard.color}
              createdByMe={dashboard.createdByMe}
              isSelected={String(dashboard.id) === selectedId}
            />
          ))}
        </div>
        <button className="w-[200px] self-end">페이지네이션 버튼</button>
      </div>

      <CreateDashboardModal isOpen={isOpen} onClose={close} />
    </>
  );
}
