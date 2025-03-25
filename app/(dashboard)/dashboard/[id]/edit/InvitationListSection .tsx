import Button from '@/components/common/Button';

export default function InvitationListSection() {
  return (
    <div id="section" className="rounded-2xl bg-white pt-[32px]">
      <div className="mb-[27px] flex items-center justify-between px-[28px]">
        <h3 className="text-bold24">초대 내역</h3>
        <div className="flex items-center gap-4">
          <div>페이지네이션 버튼</div>
          <Button>
            {/* 아이콘 삽입 시 버튼 크기 재설정
            <img src="/icons/addbox.svg" /> */}
            <span className="text-medium14">초대하기</span>
          </Button>
        </div>
      </div>

      {/* API 연동 후 매핑 예정 */}
      <div className="w-full rounded-lg">
        <h4 className="text-gray400 text-regular16 px-[28px]">이메일</h4>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <span>codeitA@codeit.com</span>
            </div>
            <Button variant="ghost" size="delete">
              취소
            </Button>
          </div>
        </div>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <span>codeitA@codeit.com</span>
            </div>
            <Button variant="ghost" size="delete">
              취소
            </Button>
          </div>
        </div>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <span>codeitA@codeit.com</span>
            </div>
            <Button variant="ghost" size="delete">
              취소
            </Button>
          </div>
        </div>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <span>codeitA@codeit.com</span>
            </div>
            <Button variant="ghost" size="delete">
              취소
            </Button>
          </div>
        </div>
        <div className="border-gray200 border-b">
          <div className="flex justify-between px-[28px] py-[16px]">
            <div className="flex items-center gap-[12px]">
              <span>codeitA@codeit.com</span>
            </div>
            <Button variant="ghost" size="delete">
              취소
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
