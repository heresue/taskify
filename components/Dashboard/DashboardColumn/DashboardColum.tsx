import Button from '@/components/common/Button';
import Setting from '@/public/icons/setting.svg';
import Card from '../DashboardCard/DashboardCard';
import Plus from '@/public/icons/plus.svg';

export default function DashboardColumn() {
  return (
    <div className="border-gray200 w-full border-b border-solid px-5 py-[18px] lg:w-[354px] lg:border-r lg:border-b-0">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-violet h-2 w-2 rounded-full" />
            <h2 className="text-bold16 text-black">to do</h2>
            <span className="bg-gray200 text-medium12 text-gray500 ml-1 flex h-5 w-5 items-center justify-center rounded-sm">
              3
            </span>
          </div>
          <Setting className="cursor-pointer" />
        </div>
        <div className="flex w-full flex-col gap-2 md:gap-4">
          <Button fullWidth size="addTodo" variant="outline">
            <Plus />
          </Button>
          <Card
            title="프로젝트"
            tags={['프로젝트']}
            dueDate="2025.04.01"
            assignee={{ profileImageUrl: '' }}
          />
        </div>
      </div>
    </div>
  );
}
