'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import ColorPalette from '@/components/Dashboard/ColorPalette';
import { updateDashboard } from './data';

const DASHBOARD_COLORS = ['#ffa500', '#7ac555', '#76a5ea', '#e876ea', '#760dde'];

export default function DashboardTitleSection({ dashboardId }: { dashboardId: number }) {
  const [isSelected, setIsSelected] = useState(DASHBOARD_COLORS[0]);
  const [dashboardName, setDashboardName] = useState('');

  const router = useRouter();

  const handleSelectColorClick = (color: string) => {
    setIsSelected(color);
  };

  const handleUpdateDashboard = async () => {
    const payload = {
      title: dashboardName,
      color: isSelected,
    };

    try {
      await updateDashboard(dashboardId, payload);
      console.log('대시보드 수정 성공!');
      router.push(ROUTES.DASHBOARD.root(dashboardId));
      router.refresh();
    } catch (error) {
      console.error('대시보드 수정 실패:', error);
    }
  };

  return (
    <div id="section" className="rounded-2xl bg-white px-[28px] py-[32px]">
      <h3 className="text-bold24 mb-6">대시보드 이름</h3>
      <label htmlFor="dashboardName" className="mb-4 flex flex-col gap-2">
        <span className="text-medium18 text-black200">대시보드 이름</span>
        <Input
          id="dashboardName"
          name="dashboardName"
          placeholder="이름을 입력하세요"
          value={dashboardName}
          onChange={(e) => setDashboardName(e.target.value)}
        />
      </label>
      <div className="mb-6 flex gap-2">
        <ColorPalette
          isSelected={isSelected}
          colors={DASHBOARD_COLORS}
          onColorSelect={handleSelectColorClick}
        />
      </div>
      <Button fullWidth size="modal" onClick={handleUpdateDashboard}>
        변경
      </Button>
    </div>
  );
}
