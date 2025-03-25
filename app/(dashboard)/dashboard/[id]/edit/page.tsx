import Link from 'next/link';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import DashboardColorIcon from '@/components/DashboardColorIcon/DashboardColorIcon';
import UserIcon from '@/assets/icons/UserIcon';
import AddBoxGrayIcon from '@/assets/icons/AddBoxGrayIcon';
import ArrowLeft from '@/assets/icons/ArrowLeft';

interface Props {
  params: { id: string };
}

export default function DashboardIdEdit({ params }: Props) {
  const { id } = params;

  return (
    <div id="wrapper" className="m-5 mb-[57px] flex flex-col gap-[34px]">
      <Link href={`/dashboard/${id}`} className="flex items-center gap-[14px]">
        <ArrowLeft width="8" />
        돌아가기
      </Link>

      <div className="flex w-[620px] flex-col gap-4">
        <div id="section" className="rounded-2xl bg-white px-[28px] py-[32px]">
          <h3 className="text-bold24 mb-6">대시보드 이름</h3>
          <label htmlFor="dashboardName" className="mb-4 flex flex-col gap-2">
            <span className="text-medium18 text-bla ck200">대시보드 이름</span>
            <Input id="dashboardName" name="dashboardName" placeholder="이름을 입력하세요" />
          </label>
          <div className="mb-6 flex gap-2">
            <DashboardColorIcon size={30} color="#7ac555" />
            <DashboardColorIcon size={30} color="#760dde" />
            <DashboardColorIcon size={30} color="#ffa500" />
            <DashboardColorIcon size={30} color="#76a5ea" />
            <DashboardColorIcon size={30} color="#e876ea" />
          </div>
          <Button fullWidth size="modal">
            변경
          </Button>
        </div>

        <div id="section" className="rounded-2xl bg-white pt-[32px]">
          <div className="mb-[27px] flex items-center justify-between px-[28px]">
            <h3 className="text-bold24">구성원</h3>
            <div>페이지네이션 버튼</div>
          </div>

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

        <div id="section" className="rounded-2xl bg-white pt-[32px]">
          <div className="mb-[27px] flex items-center justify-between px-[28px]">
            <h3 className="text-bold24">초대 내역</h3>
            <div className="flex items-center gap-4">
              <div>페이지네이션 버튼</div>
              <Button size="w-[105px] h-[32px] text-medium14 rounded-sm">
                {/* <img src="/icons/addbox.svg" /> */}
                <span>초대하기</span>
              </Button>
            </div>
          </div>

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
        <Button variant="outline" size="deleteDashboard">
          대시보드 삭제하기
        </Button>
      </div>
    </div>
  );
}
