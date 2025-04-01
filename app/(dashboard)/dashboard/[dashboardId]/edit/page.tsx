import Button from '@/components/common/Button';
import BackLink from './BackLink';
import DashboardTitleSection from './DashboardTitleSection ';
import MemberListSection from './MemberListSection ';
import InvitationListSection from './InvitationListSection ';

export default function DashboardIdEdit({ params }: { params: { dashboardId: string } }) {
  const dashboardId = Number(params.dashboardId);
  console.log('✅ dashboardId:', dashboardId);
  return (
    <div id="wrapper" className="m-5 mb-[57px] flex flex-col gap-[34px]">
      <BackLink dashboardId={dashboardId} />

      <div className="flex w-[620px] flex-col gap-4">
        <DashboardTitleSection dashboardId={dashboardId} />
        <MemberListSection dashboardId={dashboardId} />
        <InvitationListSection dashboardId={dashboardId} />

        <Button variant="outline" size="deleteDashboard">
          대시보드 삭제하기
        </Button>
      </div>
    </div>
  );
}
