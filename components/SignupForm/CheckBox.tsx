import Image from 'next/image';
import check from '@/public/icons/check.svg';

export default function CheckBox() {
  return (
    <label className="relative flex w-[180px] cursor-pointer items-center justify-start gap-2">
      <input type="checkbox" className="peer absolute h-5 w-5 opacity-0" />
      <div className="border-gray300 h-5 w-5 cursor-pointer rounded-sm border border-solid" />
      <Image src={check} alt="check" className="absolute hidden h-5 w-5 peer-checked:block" />
      <span className="text-regular16 text-black200">이용약관에 동의합니다.</span>
    </label>
  );
}
