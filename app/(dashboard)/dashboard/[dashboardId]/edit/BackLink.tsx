import Link from 'next/link';
import ArrowLeft from '@/assets/icons/ArrowLeft';

export default function BackLink({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/${id}`} className="flex items-center gap-[14px]">
      <ArrowLeft width="8" />
      돌아가기
    </Link>
  );
}
