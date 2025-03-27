import UserBadge from '@/components/UserBadge/UserBadge';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function UserHeader({ title }: { title: string }) {
  const cookieStore = await cookies();

  const { nickname, profileImageUrl } = JSON.parse(cookieStore.get('userInfo')?.value || '');

  return (
    <header className="border-b-gray300 sticky top-0 flex h-15 items-center justify-between border-b-1 bg-white px-3 md:h-17.5 md:px-10 lg:px-20">
      <span className="text-bold20 select-none">{title}</span>
      <Link href={`/mypage`}>
        <UserBadge
          size={38}
          gap={12}
          userName={nickname}
          profile={profileImageUrl}
          fontSize="M16"
          responsive={true}
        />
      </Link>
    </header>
  );
}
