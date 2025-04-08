import Link from 'next/link';
import ArrowIcon from '@/assets/icons/ArrowIcon';

export default function BackLink({ fallbackHref }: { fallbackHref: string }) {
  return (
    <>
      <Link href={fallbackHref} className="flex w-fit items-center gap-2">
        <ArrowIcon width="18" height="18" className="hidden md:block" />
        <ArrowIcon width="16" height="16" className="block md:hidden" />
        <span className="text-medium14 md:text-medium16 text-black200">돌아가기</span>
      </Link>
    </>
  );
}
