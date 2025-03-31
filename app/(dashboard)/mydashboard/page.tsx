import MyDashboardSection from './MyDashboardSection';
import InvitedSection from './InvitedSection';
import { getInvitations, getMyDashboards } from './actions';

export default async function MyDashboard() {
  const { dashboards } = await getMyDashboards();
  const { invitations } = await getInvitations();

  const pendingInvitations = invitations.filter((invitation) => invitation.inviteAccepted === null);

  return (
    <div id="dashboardWrapper" className="m-10 max-w-[1022px]">
      <MyDashboardSection mydashboards={dashboards} />
      <InvitedSection invitations={pendingInvitations} />
    </div>
  );
}
