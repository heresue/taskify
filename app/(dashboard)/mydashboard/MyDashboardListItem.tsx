import Link from 'next/link';
import Image from 'next/image';
import DashboardColorIcon from '@/components/DashboardColorIcon/DashboardColorIcon';
import clsx from 'clsx';
import { Dashboard } from './actions';

interface DashboardListItemProps extends Dashboard {
  dashboardId: number;
  isSelected?: boolean;
}

export default function MyDashboardListItem({
  dashboardId,
  title,
  color,
  createdByMe,
}: DashboardListItemProps) {
  return (
    <Link
      href={`/dashboard/${dashboardId}`}
      className="border-gray300 h-[58px] rounded-lg border bg-white md:h-[68px] md:w-[247px] lg:h-[70px] lg:w-[332px]"
    >
      <div className="flex items-center gap-4 p-5">
        <DashboardColorIcon color={color} />

        <div className="flex hidden min-w-0 flex-1 items-center gap-[6px] md:flex">
          <span
            className={clsx(
              'text-black200 text-semi14 md:text-semi16 truncate',
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

        <Image src="/icons/arrowRight.svg" alt="대시보드로 이동" width={7} height={14} />
      </div>
    </Link>
  );
}
