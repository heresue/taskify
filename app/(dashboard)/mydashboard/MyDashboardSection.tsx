'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';
import { usePagination } from '@/components/Pagination/usePagination';
import Button from '@/components/common/Button';
import PaginationItems from '@/components/Pagination/PaginationItems';
import PaginationControls from '@/components/Pagination/PaginationControls';
import MyDashboardListItem from './MyDashboardListItem';
import CreateDashboardModal from './CreateDashboardModal';
import { Dashboard } from './types';

export default function MyDashboardSection({ initialData }: { initialData: Dashboard[] }) {
  const myDashboards = initialData;
  const pathname = usePathname();
  const { isOpen, open, close } = useModal();
  const selectedId = pathname?.split('/dashboard/')[1]?.split('/')[0];

  const itemsPerPage = 6;

  const { currentPage, totalPages, goToPrev, goToNext } = usePagination(
    myDashboards,
    itemsPerPage,
    true
  );

  return (
    <div className="mb-[40px] flex flex-col gap-3">
      <PaginationItems
        key={`${myDashboards.length}-${currentPage}`}
        data={myDashboards}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        wrapperClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-rows-2 gap-[13px]"
        renderFixedItem={() => (
          <Button variant="outline" size="dashboardCard" onClick={open}>
            <span className="text-black200 text-semi14 md:text-semi16">새로운 대시보드</span>
            <Image src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
          </Button>
        )}
        renderItems={(pageItems) => (
          <>
            {pageItems.map((dashboard) => (
              <MyDashboardListItem
                key={dashboard.id}
                id={dashboard.id}
                dashboardId={dashboard.id}
                title={dashboard.title}
                color={dashboard.color}
                createdByMe={dashboard.createdByMe}
                isSelected={String(dashboard.id) === selectedId}
              />
            ))}
          </>
        )}
      />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrev={goToPrev}
        goToNext={goToNext}
      />

      <CreateDashboardModal isOpen={isOpen} onClose={close} key={isOpen ? 'opened' : 'closed'} />
    </div>
  );
}
