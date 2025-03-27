import UserBadge from '@/components/UserBadge/UserBadge';

export default function UserHeader() {
  return (
    <header className="border-b-gray300 sticky top-0 flex h-15 items-center justify-between border-b-1 bg-white px-3 md:h-17.5 md:px-10 lg:px-20">
      <span className="text-bold20 select-none">내 대시보드</span>
      <UserBadge size={38} gap={12} userName="배유철" fontSize="M16" responsive={true} />
    </header>
  );
}
