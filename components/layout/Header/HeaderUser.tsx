import Link from 'next/link';
import AddBoxGrayIcon from '@/assets/icons/AddBoxGrayIcon';
import UserBadge from '@/components/UserBadge/UserBadge';
import MemberBadgeList from './MemberBadgeList';

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

const members0: Member[] = [];

const members1: Member[] = [
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
];

const members3: Member[] = [
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
];

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

/* 
  요청 /{teamId}/members/size=4
  /members 대시보드 멤버 목록 조회 응답 결과 예시
  {
  "members": [
    {
      "id": 0,
      "userId": 0,
      "email": "string",
      "nickname": "string",
      "profileImageUrl": "string",
      "createdAt": "2025-03-25T14:14:20.740Z",
      "updatedAt": "2025-03-25T14:14:20.740Z",
      "isOwner": true
    }
  ],
  "totalCount": 0
  }
 */
export default function HeaderUser() {
  const dashboardId = 1;
  return (
    <header className="border-b-gray300 sticky top-0 flex h-15 items-center justify-between border-b-1 bg-white px-3 md:h-17.5 md:px-10 lg:px-20">
      <div className="invisible lg:visible lg:block">비브리지</div>
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
        <MemberBadgeList members={members7} totalCount={members7.length} />
        {/* FIXME: Badge 유저명 텍스트 색상 black200으로 수정 필요 */}
        <div className="bg-gray300 mx-3 h-8.5 w-[1px] md:mx-6 md:h-[9.5] lg:mx-8"></div>
        <UserBadge size={38} gap={12} userName="배유철" fontSize="M16" responsive={true} />
      </div>
    </header>
  );
}
