import Button from '@/components/common/Button';
import DashboardColumn from '@/components/Dashboard/DashboardColumn/DashboardColum';
import Plus from '@/public/icons/plus.svg';

export default function DashboardId() {
  return (
    <div className="flex h-full">
      <DashboardColumn />
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
