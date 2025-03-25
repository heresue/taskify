import Image from 'next/image';

export default function AddDashboardButton() {
  return (
    <button type="button" className="m-[3px]">
      <Image src="/icons/addbox.svg" alt="대시보드 추가" width={14} height={14} />
    </button>
  );
}
