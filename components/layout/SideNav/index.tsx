import Link from 'next/link';
import IndexIcon from './IndexIcon';
import Image from 'next/image';

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
            <button type="button" className="m-[3px]">
              <Image src="/icons/addbox.svg" alt="대시보드 추가" width={14} height={14} />
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="rounded-sm">
              <Link href="/" className="flex h-[42px] items-center gap-4 px-3 py-2">
                <IndexIcon />
                <div className="flex min-w-0 items-center gap-[6px]">
                  <span className="text-medium18 text-gray500 max-w-[calc(100%-14px)] overflow-hidden text-ellipsis whitespace-nowrap">
                    대시보드 이름름
                  </span>
                  <Image
                    src="/icons/crown.svg"
                    alt="내가 만든 대시보드"
                    width={14}
                    height={14}
                    className="shrink-0"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
