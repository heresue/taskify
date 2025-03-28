import Button from '@/components/common/Button';
import BackLink from './BackLink';
import DashboardNameSection from './DashboardNameSection ';
import MemberListSection from './MemberListSection ';
import InvitationListSection from './InvitationListSection ';

interface Props {
  params: {
    dashboardId: string;
  };
}

export default async function DashboardIdEdit({ params }: Props) {
  const { dashboardId } = params;

  return (
    <div id="wrapper" className="m-5 mb-[57px] flex flex-col gap-[34px]">
      <BackLink id={dashboardId} />

      <div className="flex w-[620px] flex-col gap-4">
        <DashboardNameSection />
        <MemberListSection />
        <InvitationListSection dashboardId={dashboardId} />

        <Button variant="outline" size="deleteDashboard">
          대시보드 삭제하기
        </Button>
      </div>
    </div>
  );
}
