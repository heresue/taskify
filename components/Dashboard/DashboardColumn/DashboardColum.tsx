import Button from '@/components/common/Button';
import Card from '../DashboardCard/DashboardCard';
import Plus from '@/public/icons/plus.svg';
import Setting from '@/assets/icons/Setting';
import { ColumnsType } from '@/components/Dashboard/DashboardColumn/action';

export default function DashboardColumn({ title, id }: ColumnsType) {
  return (
    <div className="border-gray200 h-full w-full border-b border-solid px-5 py-[18px] lg:w-[354px] lg:border-r lg:border-b-0">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-violet h-2 w-2 rounded-full" />
            <h2 className="text-bold16 text-black">{title}</h2>
            <span className="bg-gray200 text-medium12 text-gray500 ml-1 flex items-center justify-center rounded-sm px-1.5 py-[3px]">
              {id}
            </span>
          </div>
          <Setting width={24} height={24} />
        </div>
        <div className="flex w-full flex-col gap-2 md:gap-4">
          <Button fullWidth size="addTodo" variant="outline">
            <Plus />
          </Button>
          <Card title="" tags={['']} dueDate="" assignee={{ profileImageUrl: '' }} />
        </div>
      </div>
    </div>
  );
}
