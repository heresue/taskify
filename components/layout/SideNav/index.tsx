'use client';

import Link from 'next/link';
import Image from 'next/image';
import DashboardListItem from './DashboardListItem';
import AddDashboardButton from './AddDashboardButton';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Dashboard, getMyDashboards } from '@/app/(dashboard)/mydashboard/actions';

export default function SideNav() {
  const pathname = usePathname();
  const selectedId = pathname?.split('/dashboard/')[1]?.split('/')[0];

  // const { dashboards, loading, error } = useSideNavDashboards(itemsPerPage);
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);

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
  }, []);

  return (
    <nav className="h-screen w-[67px] md:w-[160px] lg:w-[300px]">
      <div id="sideNavWrapper" className="flex flex-col gap-14 pt-5 pr-3 pl-2">
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
        <div id="sideNavItems" className="flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-semi12 text-gray500 hidden md:block">Dash Boards</h2>
            <AddDashboardButton />
          </div>
          <ul className="space-y-2">
            {dashboards.map((dashboard) => (
              <DashboardListItem
                key={dashboard.id}
                id={dashboard.id}
                dashboardId={dashboard.id}
                title={dashboard.title}
                color={dashboard.color}
                createdByMe={dashboard.createdByMe}
                isSelected={String(dashboard.id) === selectedId}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
