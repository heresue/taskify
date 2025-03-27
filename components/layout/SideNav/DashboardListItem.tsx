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
}

export default function DashboardListItem({
  dashboardId,
  title,
  colorKey,
  createdByMe,
  isSelected,
}: DashboardListItemProps) {
  return (
    <li className={clsx('rounded-sm', isSelected && 'bg-violet8')}>
      <Link
        href={`/dashboard/${dashboardId}`}
        className="flex h-[42px] items-center gap-4 px-3 py-2"
      >
        <DashboardColorIcon colorKey={colorKey} />
        <div className="flex min-w-0 items-center gap-[6px]">
          <span
            className={clsx(
              'text-medium18 text-gray500 overflow-hidden text-ellipsis whitespace-nowrap',
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
    </li>
  );
}
