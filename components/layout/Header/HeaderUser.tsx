import Link from 'next/link';
import AddBoxGrayIcon from '@/assets/icons/AddBoxGrayIcon';

export default function HeaderUser() {
  const dashboardId = 1;
  return (
    <header className="border-b-gray300 sticky top-0 flex h-15 items-center justify-between border-b-1 bg-white px-3 md:h-17.5 md:px-10 lg:px-20">
      <div>비브리지</div>
      <div>
        <ul className="flex gap-1.5 md:gap-3">
          <li>
            <Link // TODO: 태블릿, PC 화면 톱니바퀴 아이콘 넣기
              href={`/dashboard/${dashboardId}/edit`}
              className="text-medium14 text-gray500 border-gray300 flex items-center gap-2 rounded-md border-1 px-3 py-1.5 md:px-4 md:py-2.5"
            >
              관리
            </Link>
          </li>
          <li>
            <Link // FIXME: 클릭 시 edit 페이지로 이동하는게 아니라, 초대 모달이 떠야 합니다.
              href={`/dashboard/${dashboardId}/edit`}
              className="text-medium14 text-gray500 border-gray300 flex items-center gap-2 rounded-md border-1 px-3 py-1.5 md:px-4 md:py-2.5"
            >
              <AddBoxGrayIcon width={16} height={16} className="hidden md:block" />
              초대하기
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
