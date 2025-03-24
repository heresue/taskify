import Link from 'next/link';
import Image from 'next/image';
import DashboardListItem from './DashboardListItem';
import AddDashboardButton from './AddDashboardButton';

export default function SideNav() {
  return (
    <nav className="w-[300px] outline">
      <div id="sideNavWrapper" className="flex flex-col gap-14 pt-5 pr-3 pl-2">
        <h2 id="sideNavHeader">
          <Link href="/">
            <Image src="/logo-large.svg" alt="Taskify 로고" width={109} height={33} />
          </Link>
        </h2>
        <div id="sideNavItems" className="flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-semi12 text-gray500">Dash Boards</h2>
            <AddDashboardButton />
          </div>
          <ul className="flex flex-col gap-2">
            <DashboardListItem title="대시보드 이름" />
            <DashboardListItem title="대시보드 이름" createdByMe />
            <DashboardListItem title="대시보드 이름이 길다 길어 길다 길어" />
            <DashboardListItem title="대시보드 이름이 길다 길어 길다 길어" createdByMe />
          </ul>
        </div>
      </div>
    </nav>
  );
}
