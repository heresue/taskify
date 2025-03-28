import Button from '@/components/common/Button';
import BackLink from './BackLink';
import DashboardTitleSection from './DashboardTitleSection ';
import MemberListSection from './MemberListSection ';
import InvitationListSection from './InvitationListSection ';

export default async function DashboardIdEdit({
  params,
}: {
  params: Promise<{ dashboardId: string }>;
}) {
  const dashboardId = (await params).dashboardId;

  return (
    <div id="wrapper" className="m-5 mb-[57px] flex flex-col gap-[34px]">
      <BackLink id={dashboardId} />

      <div className="flex w-[620px] flex-col gap-4">
        <DashboardTitleSection />
        <MemberListSection />
        <InvitationListSection dashboardId={dashboardId} />

        <Button variant="outline" size="deleteDashboard">
          대시보드 삭제하기
        </Button>
      </div>
    </div>
  );
}
