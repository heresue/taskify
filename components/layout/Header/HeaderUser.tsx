import Link from 'next/link';
import Image from 'next/image';
import AddBoxGrayIcon from '@/assets/icons/AddBoxGrayIcon';
import UserBadge from '@/components/UserBadge/UserBadge';
import MemberBadgeList from '@/components/layout/Header/MemberBadgeList';
import Setting from '@/assets/icons/Setting';

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

// membersN 은 mockData입니다.
// const members3: Member[] = [
//   {
//     id: 0,
//     userId: 0,
//     email: 'a@gmail.com',
//     nickname: 'seokjun',
//     profileImageUrl: 'string',
//     createdAt: '2025-03-25T09:49:49.827Z',
//     updatedAt: '2025-03-25T09:49:49.827Z',
//     isOwner: true,
//   },
//   {
//     id: 1,
//     userId: 1,
//     email: 'b@gmail.com',
//     nickname: 'john',
//     profileImageUrl: 'string',
//     createdAt: '2025-03-25T09:49:49.827Z',
//     updatedAt: '2025-03-25T09:49:49.827Z',
//     isOwner: false,
//   },
//   {
//     id: 2,
//     userId: 2,
//     email: 'c@gmail.com',
//     nickname: '홍길동',
//     profileImageUrl: 'string',
//     createdAt: '2025-03-25T09:49:49.827Z',
//     updatedAt: '2025-03-25T09:49:49.827Z',
//     isOwner: false,
//   },
// ];

const members7: Member[] = [
  {
    id: 0,
    userId: 0,
    email: 'a@gmail.com',
    nickname: 'seokjun',
    profileImageUrl: 'string',
    createdAt: '2025-03-25T09:49:49.827Z',
    updatedAt: '2025-03-25T09:49:49.827Z',
    isOwner: true,
  },
  {
    id: 1,
    userId: 1,
    email: 'b@gmail.com',
    nickname: 'john',
    profileImageUrl: 'string',
    createdAt: '2025-03-25T09:49:49.827Z',
    updatedAt: '2025-03-25T09:49:49.827Z',
    isOwner: false,
  },
  {
    id: 2,
    userId: 2,
    email: 'c@gmail.com',
    nickname: '홍길동',
    profileImageUrl: 'string',
    createdAt: '2025-03-25T09:49:49.827Z',
    updatedAt: '2025-03-25T09:49:49.827Z',
    isOwner: false,
  },
  {
    id: 3,
    userId: 3,
    email: 'd@gmail.com',
    nickname: 'alice',
    profileImageUrl: 'string',
    createdAt: '2025-03-25T09:49:49.827Z',
    updatedAt: '2025-03-25T09:49:49.827Z',
    isOwner: false,
  },
  {
    id: 4,
    userId: 4,
    email: 'e@gmail.com',
    nickname: 'bob',
    profileImageUrl: 'string',
    createdAt: '2025-03-25T09:49:49.827Z',
    updatedAt: '2025-03-25T09:49:49.827Z',
    isOwner: false,
  },
  {
    id: 5,
    userId: 5,
    email: 'f@gmail.com',
    nickname: 'emma',
    profileImageUrl: 'string',
    createdAt: '2025-03-25T09:49:49.827Z',
    updatedAt: '2025-03-25T09:49:49.827Z',
    isOwner: false,
  },
  {
    id: 6,
    userId: 6,
    email: 'g@gmail.com',
    nickname: 'lee',
    profileImageUrl: 'string',
    createdAt: '2025-03-25T09:49:49.827Z',
    updatedAt: '2025-03-25T09:49:49.827Z',
    isOwner: false,
  },
];

export default function HeaderUser() {
  // TODO: dashboardId 불러오기 : useParams() 활용
  // TODO: 대시보드 정보 불러오기 : fetch()  /dashboards/{dashboardId}
  // TODO: MemberBadgeList에 전달할 대시보드 멤버 목록 불러오기. : fetch() /members?page=1&size=4&dashboardId=123 -> members 배열, totalCount
  const dashboardId = 1;
  const title = '비브리지';
  const createdByMe = true;

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
        <MemberBadgeList members={members7} totalCount={members7.length} />
        <div className="bg-gray300 mx-3 h-8.5 w-[1px] md:mx-6 md:h-[9.5] lg:mx-8"></div>
        {/* TODO: 사용자명 불러오기. 배유철씨 아님 : 로그인 시 유저 이름도 브라우저 저장소에 저장해야함! */}
        {/* FIXME: Badge 유저명 텍스트 색상 black200으로 수정 필요 */}
        <UserBadge size={38} gap={12} userName="배유철" fontSize="M16" responsive={true} />
      </div>
    </header>
  );
}
