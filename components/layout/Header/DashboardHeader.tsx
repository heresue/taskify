import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';
import AddBoxGrayIcon from '@/assets/icons/AddBoxGrayIcon';
import UserBadge from '@/components/UserBadge/UserBadge';
import MemberBadgeList from '@/components/layout/Header/MemberBadgeList';
import Setting from '@/assets/icons/Setting';
import { api } from '@/lib/api';

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

type MemberResponse = {
  members: Member[];
  totalCount: 0;
};

type DashboardDetailResponse = {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
};

export default async function DashboardHeader({ dashboardId }: { dashboardId: number }) {
  const { members, totalCount } = await api.get<MemberResponse>(
    `/members?size=4&dashboardId=${dashboardId}`
  );
  const { title, createdByMe } = await api.get<DashboardDetailResponse>(
    `/dashboards/${dashboardId}`
  );

  const cookieStore = await cookies();

  const { nickname, profileImageUrl } = JSON.parse(cookieStore.get('userInfo')?.value || '');

  return (
    <header className="border-b-gray300 sticky top-0 flex h-15 items-center justify-between border-b-1 bg-white px-3 md:h-17.5 md:px-10 lg:px-20">
      <div className="invisible lg:visible lg:flex lg:gap-2">
        <span className="text-bold20 select-none">{title}</span>
        {createdByMe && (
          <Image src="/icons/crown.svg" width={20} height={16} alt="내가 만든 대시보드" />
        )}
      </div>
      <div className="flex items-center">
        <div className="flex gap-1.5 md:gap-3">
          <Link
            href={`/dashboard/${dashboardId}/edit`}
            className="text-medium14 text-gray500 border-gray300 flex items-center gap-2 truncate rounded-md border-1 px-3 py-1.5 md:rounded-lg md:px-4 md:py-2"
          >
            <Setting width={18} height={18} className="hidden md:block" />
            관리
          </Link>
          {/* FIXME: 클릭 시 edit 페이지로 이동하는게 아니라, 초대 모달을 띄워야 함 */}
          <Link
            href={`/dashboard/${dashboardId}/edit`}
            className="text-medium14 text-gray500 border-gray300 flex items-center gap-2 truncate rounded-md border-1 px-3 py-1.5 md:rounded-lg md:px-4 md:py-2"
          >
            <AddBoxGrayIcon width={16} height={16} className="hidden md:block" />
            초대하기
          </Link>
        </div>
        <MemberBadgeList members={members} totalCount={totalCount} />
        <div className="bg-gray300 mx-3 h-8.5 w-[1px] md:mx-6 md:h-[9.5] lg:mx-8"></div>
        {/* FIXME: Badge 유저명 텍스트 색상 black200으로 수정 필요 */}
        <UserBadge
          size={38}
          gap={12}
          userName={nickname}
          profile={profileImageUrl}
          fontSize="M16"
          responsive={true}
        />
      </div>
    </header>
  );
}
