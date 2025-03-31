'use client';

import Link from 'next/link';
import Image from 'next/image';
import DashboardListItem from './DashboardListItem';
import AddDashboardButton from './AddDashboardButton';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import PaginationItems from '@/components/Pagination/PaginationItems';
import { usePagination } from '@/components/Pagination/usePagination';
import PaginationControls from '@/components/Pagination/PaginationControls';
import { Dashboard, getMyDashboards } from '@/app/(dashboard)/mydashboard/actions';
import { Dashboard, getMyDashboards } from '@/app/(dashboard)/mydashboard/actions';

export default function SideNav() {
  const pathname = usePathname();
  const selectedId = pathname?.split('/dashboard/')[1]?.split('/')[0];
  const [itemsPerPage, setItemsPerPage] = useState(15);
  // const { dashboards, loading, error } = useSideNavDashboards(itemsPerPage);
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const { currentPage, totalPages, goToPrev, goToNext } = usePagination(dashboards, itemsPerPage);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      const itemHeight = 50;
      const topOffset = 150;
      const bottomOffset = 157;
      const availableHeight = window.innerHeight - (topOffset + bottomOffset);
      const possibleItems = Math.floor(availableHeight / itemHeight);
      setItemsPerPage(possibleItems > 0 ? possibleItems : 1);
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);
    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);

  useEffect(() => {
    async function getSideNavDashboards() {
      try {
        const dashboardData = await getMyDashboards(1, 100);
        setDashboards(dashboardData.dashboards);
      } catch (err) {
        console.error('sidenav 목록 불러오기 에러:', err);
      }
    }
    getSideNavDashboards();
    async function getSideNavDashboards() {
      try {
        const dashboardData = await getMyDashboards(1, 100);
        setDashboards(dashboardData.dashboards);
      } catch (err) {
        console.error('sidenav 목록 불러오기 에러:', err);
      }
    }
    getSideNavDashboards();
  }, []);

  return (
    <nav className="border-r-gray300 h-screen w-[67px] border-r md:w-[160px] lg:w-[300px]">
      <div id="sideNavWrapper" className="flex h-full flex-col gap-14 pt-5 pr-3 pb-[96px] pl-2">
        <h2 id="sideNavHeader">
          <Link href="/">
            <Image
              src="/logo-large.svg"
              alt="Taskify 로고"
              width={109}
              height={33}
              className="mx-auto hidden md:block lg:ml-0"
            />
            <Image
              src="/logo-small.svg"
              alt="Taskify 로고"
              width={24}
              height={27}
              className="mx-auto block md:hidden"
            />
          </Link>
        </h2>
        <div id="sideNavItems" className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-semi12 text-gray500 hidden md:block">Dash Boards</h2>
              <AddDashboardButton />
            </div>
            <ul className="my-4 space-y-2">
              <PaginationItems
                data={dashboards}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                renderItems={(dashboards) => (
                  <>
                    {dashboards.map((dashboard) => (
                      <DashboardListItem
                        key={dashboard.id}
                        dashboardId={dashboard.id}
                        title={dashboard.title}
                        colorKey={dashboard.color}
                        createdByMe={dashboard.createdByMe}
                        isSelected={String(dashboard.id) === selectedId}
                      />
                    ))}
                  </>
                )}
              />
            </ul>
          </div>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            showPageInfo={false}
            goToPrev={goToPrev}
            goToNext={goToNext}
            justify="start"
          />
        </div>
      </div>
    </nav>
  );
}
