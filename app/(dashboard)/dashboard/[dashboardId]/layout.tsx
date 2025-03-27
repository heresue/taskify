import DashboardHeader from '@/components/layout/Header/DashboardHeader';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { dashboardId: string };
}) {
  const { dashboardId } = params;

  return (
    <>
      <DashboardHeader dashboardId={Number(dashboardId)} />
      <main>{children}</main>
    </>
  );
}
