import Image from 'next/image';

export default function InvitedDashboardEmpty() {
  return (
    <div className="flex flex-col items-center gap-[30px] pt-[64px] pb-[120px]">
      <div className="relative h-[75px] w-[87px]">
        <Image src="/invite.svg" fill alt="초대받은 대시보드" />
      </div>
      <p className="text-gray400 text-regular18">아직 초대받은 대시보드가 없습니다.</p>
    </div>
  );
}
