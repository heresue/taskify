import { mockInvitations } from '@/mocks/invitations';
import MyDashboardSection from './MyDashboardSection';
import InvitedSection from './InvitedSection';
import { mockDashboards } from '@/mocks/dashboards';

export default async function MyDashboard() {
  // mock data 임시 적용
  // const acceptedDashboards = mockInvitations.filter(
  //   (mockInvitation) => mockInvitation.inviteAccepted === true
  // );
  const acceptedDashboards = mockDashboards
  const pendingInvitations = mockInvitations.filter(
    (mockInvitation) => mockInvitation.inviteAccepted === null
  );

  return (
    <div id="dashboardWrapper" className="m-10 max-w-[1022px]">
      <MyDashboardSection mydashboards={acceptedDashboards} />
      <InvitedSection invitations={pendingInvitations} />
    </div>
  );
}
