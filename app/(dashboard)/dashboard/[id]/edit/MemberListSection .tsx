import Button from '@/components/common/Button';
import UserIcon from '@/assets/icons/UserIcon';

export default function MemberListSection() {
  return (
    <div id="section" className="rounded-2xl bg-white pt-[32px]">
      <div className="mb-[27px] flex items-center justify-between px-[28px]">
        <h3 className="text-bold24">구성원</h3>
        <div>페이지네이션 버튼</div>
      </div>

      {/* API 연동 후 매핑 예정 */}
      <div className="w-full rounded-lg">
        <h4 className="text-gray400 text-regular16 px-[28px]">이름</h4>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <UserIcon width={38} height={38} />
              <span>이름</span>
            </div>
            <Button variant="ghost" size="delete">
              삭제
            </Button>
          </div>
        </div>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <UserIcon width={38} height={38} />
              <span>이름</span>
            </div>
            <Button variant="ghost" size="delete">
              삭제
            </Button>
          </div>
        </div>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <UserIcon width={38} height={38} />
              <span>이름</span>
            </div>
            <Button variant="ghost" size="delete">
              삭제
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
