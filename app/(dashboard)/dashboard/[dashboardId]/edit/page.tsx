import Button from '@/components/common/Button';
import BackLink from './BackLink';
import DashboardNameSection from './DashboardNameSection ';
import MemberListSection from './MemberListSection ';
import InvitationListSection from './InvitationListSection ';
import { mockInvitations } from '@/mocks/invitations';

export default async function DashboardIdEdit({ params }: Props) {
  const { dashboardId } = params;

  // mock 데이터
  // const res = await api.get(`/invitations`);
  // const allInvitations = res.invitations;
  const allInvitations = mockInvitations;

  const filteredInvitees = allInvitations.filter(
    (inv) => inv.dashboard.id === Number(dashboardId) && inv.inviteAccepted === null
  );

  return (
    <div id="wrapper" className="m-5 mb-[57px] flex flex-col gap-[34px]">
      <BackLink id={dashboardId} />

      <div className="flex w-[620px] flex-col gap-4">
        <DashboardNameSection />
        <MemberListSection initialMembers={allInvitations} />
        <InvitationListSection dashboardId={dashboardId} />

        <Button variant="outline" size="deleteDashboard">
          대시보드 삭제하기
        </Button>
      </div>
    </div>
  );
}
