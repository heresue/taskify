import Image from 'next/image';
import image from '@/public/icons/image.svg';
import b from '@/public/icons/b.svg';
import date from '@/public/icons/date.svg';

export default function Card() {
  return (
    <div className="border-gray300 flex w-full items-center justify-center rounded-md border border-solid bg-white px-5 py-4">
      <div className="flex w-full flex-col items-start justify-center max-md:flex-row max-md:gap-5 max-sm:flex-col">
        <div className="relative h-40 w-[274px] pb-4 max-md:h-[53px] max-md:w-[90px] max-md:pb-0 max-sm:h-[152px] max-sm:w-[260px]">
          <Image fill className="rounded-sm object-cover" src={image} alt="cardImage" />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2.5">
          <h3 className="text-medium16">새로운 일정 관리</h3>
          <div className="flex w-full flex-col items-start justify-center gap-2.5 max-md:flex-row max-sm:flex-col">
            <div className="bg-violet h-7 w-[147px]" />
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-center gap-1.5">
                <Image src={date} width={18} height={18} alt="date" />
                <p className="text-gray500 text-medium12">2025.01.01</p>
              </div>
              <Image src={b} width={24} height={24} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
