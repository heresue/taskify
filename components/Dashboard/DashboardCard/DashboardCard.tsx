import Image from 'next/image';
import DateIcon from '@/public/icons/date.svg';
import UserBadge from '@/components/UserBadge/UserBadge';

interface CardProps {
  imageUrl?: string;
  title: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
  };
}

export default function Card({ imageUrl, title, dueDate, assignee }: CardProps) {
  return (
    <div className="border-gray300 flex w-full items-center justify-center rounded-md border border-solid bg-white p-3 sm:p-3 md:p-4 md:px-5 md:py-[18px]">
      <div className="flex w-full flex-col items-start justify-center gap-1 sm:gap-1 md:flex-row md:gap-5">
        {imageUrl && (
          <div className="relative h-[152px] w-[260px] sm:h-[152px] sm:w-[260px] md:h-[53px] md:w-[90px] lg:h-40 lg:w-[274px]">
            <Image fill className="rounded-sm object-cover" src={imageUrl} alt="cardImage" />
          </div>
        )}
        <div className="flex w-full flex-col items-start justify-center gap-2.5">
          <h3 className="text-medium16">{title}</h3>
          <div className="flex w-full flex-col items-start justify-center gap-2.5 md:flex-row lg:flex-col">
            {/* 추후 tags 컴포넌트로 만들고 추가하겠습니다! */}
            <div className="bg-violet h-7 w-[147px]" />
            <div className="flex w-full items-center justify-between">
              <div className="border-gray300 flex items-center justify-center gap-1.5">
                <DateIcon width={18} height={18} alt="date" />
                <p className="text-gray500 text-medium12">{dueDate}</p>
              </div>
              <UserBadge size={24} profile={assignee.profileImageUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
