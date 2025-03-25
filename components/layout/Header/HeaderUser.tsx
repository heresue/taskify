import Link from 'next/link';
import AddBoxGrayIcon from '@/assets/icons/AddBoxGrayIcon';
import UserBadge from '@/components/UserBadge/UserBadge';

export default function HeaderUser() {
  const dashboardId = 1;
  return (
    <header className="border-b-gray300 sticky top-0 flex h-15 items-center justify-between border-b-1 bg-white px-3 md:h-17.5 md:px-10 lg:px-20">
      <div>비브리지</div>
      <div className="flex items-center">
        <ul className="flex gap-1.5 md:gap-3">
          <li>
            <Link // TODO: 태블릿, PC 화면 톱니바퀴 아이콘 넣기
              href={`/dashboard/${dashboardId}/edit`}
              className="text-medium14 text-gray500 border-gray300 flex items-center gap-2 rounded-md border-1 px-3 py-1.5 md:rounded-lg md:px-4 md:py-2"
            >
              관리
            </Link>
          </li>
          <li>
            <Link // FIXME: 클릭 시 edit 페이지로 이동하는게 아니라, 초대 모달이 떠야 합니다.
              href={`/dashboard/${dashboardId}/edit`}
              className="text-medium14 text-gray500 border-gray300 flex items-center gap-2 rounded-md border-1 px-3 py-1.5 md:rounded-lg md:px-4 md:py-2"
            >
              <AddBoxGrayIcon width={16} height={16} className="hidden md:block" />
              초대하기
            </Link>
          </li>
        </ul>
        {/* FIXME: Badge 유저명 텍스트 색상 black200으로 수정 필요 */}
        <div className="bg-gray300 mx-3 h-8.5 w-[1px] md:mx-6 md:h-[9.5] lg:mx-8"></div>
        <UserBadge size={38} gap={12} userName="배유철" fontSize="M16" responsive={true} />{' '}
      </div>
    </header>
  );
}
