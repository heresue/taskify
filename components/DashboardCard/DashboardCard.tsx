import Image from 'next/image';
import DateIcon from '@/public/icons/date.svg';
import UserBadge from '../UserBadge/UserBadge';

interface CardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
  };
}

export default function Card({ imageUrl, title, dueDate, assignee }: CardProps) {
  return (
    <div className="border-gray300 max-[769px]: flex w-full items-center justify-center rounded-md border border-solid bg-white p-4 max-[769px]:px-5 max-[769px]:py-[18px] max-sm:p-3">
      <div className="flex w-full flex-col items-start justify-center gap-4 max-[769px]:flex-row max-[769px]:gap-5 max-sm:flex-col max-sm:gap-1">
        {imageUrl && (
          <div className="relative h-40 w-[274px] max-[769px]:h-[53px] max-[769px]:w-[90px] max-sm:h-[152px] max-sm:w-[260px]">
            <Image fill className="rounded-sm object-cover" src={imageUrl} alt="cardImage" />
          </div>
        )}
        <div className="flex w-full flex-col items-start justify-center gap-2.5">
          <h3 className="text-medium16">{title}</h3>
          <div className="flex w-full flex-col items-start justify-center gap-2.5 max-[769px]:flex-row max-sm:flex-col">
            {/* 추후 tags 컴포넌트로 만들고 추가하겠습니다! */}
            <div className="bg-violet h-7 w-[147px]" />
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-center gap-1.5 border-gray-300">
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
