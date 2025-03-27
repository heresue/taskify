import Link from 'next/link';
import Image from 'next/image';
import DashboardColorIcon, { ColorKey } from '../../DashboardColorIcon/DashboardColorIcon';
import clsx from 'clsx';

interface DashboardListItemProps {
  dashboardId: number;
  title: string;
  colorKey: ColorKey;
  createdAt?: string;
  updatedAt?: string;
  createdByMe: boolean;
  userId?: number;
  isSelected?: boolean;
  className?: string;
}

export default function DashboardListItem({
  dashboardId,
  title,
  colorKey,
  createdByMe,
  isSelected,
  className
}: DashboardListItemProps) {
  return (
    <Link
      href={`/dashboard/${dashboardId}`}
      className={clsx(
        'flex h-[50px] items-center justify-center gap-4 rounded-sm px-3 py-2 md:justify-start',
        isSelected ? 'bg-violet8' : 'hover:bg-gray100'
      )}
    >
      <DashboardColorIcon colorKey={colorKey} />
      <div className="flex hidden min-w-0 items-center gap-[6px] md:flex">
        <span
          className={clsx(
            'text-medium18 text-gray500 truncate',
            createdByMe ? 'max-w-[calc(100%-14px)]' : 'flex-1'
          )}
        >
          {title}
        </span>
        {createdByMe && (
          <Image
            src="/icons/crown.svg"
            alt="내가 만든 대시보드"
            width={14}
            height={14}
            className="shrink-0"
          />
        )}
      </div>
    </Link>
  );
}
