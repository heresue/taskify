import { api } from '@/lib/api';
import Modal from '../common/Modal';
import FormField from '../compound/form/FormField';
import useDashboardParamsId from '../Dashboard/useDashboardParamsId';
import EXTERNAL_API from '@/constants/api/external';
import { useState } from 'react';

interface AddColumnProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ColumnManagementModal({ isOpen, onClose }: AddColumnProps) {
  const [columnName, setColumnName] = useState('');
  const { dashboardId } = useDashboardParamsId();

  const handleColumnSubmit = async () => {
    try {
      await api.post(`${EXTERNAL_API.COLUMNS.ROOT}`, {
        title: columnName,
        dashboardId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      submitMessage="생성"
      cancelMessage="취소"
      padding="24/24"
      borderRadius="8"
      onSubmit={handleColumnSubmit}
    >
      <div className="flex w-full flex-col gap-6">
        <h1 className="text-bold24 text-black200">새 컬럼 생성</h1>
        <FormField
          fieldType="input"
          label="이름"
          placeholder="컬럼 이름을 입력해 주세요"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
        />
      </div>
    </Modal>
  );
}
