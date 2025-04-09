import MyDashboardSection from './MyDashboardSection';
import InvitedSection from './InvitedSection';
import { getInvitations, getMyDashboards } from './data';

export default async function MyDashboard() {
  const initialMyDashboard = await getMyDashboards();
  const initialinvitations = await getInvitations();

  return (
    <div id="dashboardWrapper" className="m-10 max-w-[1022px]">
      <MyDashboardSection initialData={initialMyDashboard.dashboards} />
      <InvitedSection initialData={initialinvitations.invitations} />
    </div>
  );
}
