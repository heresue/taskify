import Button from '@/components/common/Button';
import DashboardColumn from '@/components/Dashboard/DashboardColumn/DashboardColum';
import Plus from '@/public/icons/plus.svg';
import GetDashboardColumn from '@/components/Dashboard/DashboardColumn/action';

export default async function DashboardId({ params }: { params: { dashboardId: string } }) {
  const dashboardId = Number(params.dashboardId);

  const columns = await GetDashboardColumn(dashboardId);
  if (!columns) return;

  return (
    <div className="flex flex-col lg:flex-row">
      {columns.map((column) => (
        <DashboardColumn key={column.id} title={column.title} id={column.id} />
      ))}
      <div className="fixed inset-x-3 bottom-7 lg:static lg:mx-5 lg:mt-[68px]">
        <Button size="addColumn" variant="outline">
          <div className="text-bold18 text-black200 flex gap-3">
            새로운 칼럼 추가하기
            <Plus />
          </div>
        </Button>
      </div>
    </div>
  );
}
