import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import DashboardColorIcon, { COLOR_MAP } from '@/components/DashboardColorIcon/DashboardColorIcon';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DASHBOARD_COLOR_KEYS = Object.keys(COLOR_MAP) as (keyof typeof COLOR_MAP)[];

export default function CreateDashboardModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      submitMessage="생성"
      cancelMessage="취소"
      padding="32/32"
      borderRadius="16"
    >
      <div className="w-full">
        <h3 className="text-bold24 mb-6">대시보드 이름</h3>
        <label htmlFor="dashboardName" className="mb-4 flex flex-col gap-2">
          <span className="text-medium18 text-bla ck200">대시보드 이름</span>
          <Input id="dashboardName" name="dashboardName" placeholder="이름을 입력하세요" />
        </label>
        <div className="mb-6 flex gap-2">
          {DASHBOARD_COLOR_KEYS.map((key) => (
            <DashboardColorIcon key={key} size={30} colorKey={key} />
          ))}
        </div>
      </div>
    </Modal>
  );
}
