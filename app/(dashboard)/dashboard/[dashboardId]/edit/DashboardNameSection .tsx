'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import ColorPalette from '@/components/Dashboard/ColorPalette';
import { useState } from 'react';

const DASHBOARD_COLORS = ['#ffa500', '#7ac555', '#76a5ea', '#e876ea', '#760dde'];

export default function DashboardNameSection() {
  const [isSelected, setIsSelected] = useState(DASHBOARD_COLORS[0]);

  const handleSelectColorClick = (color: string) => {
    setIsSelected(color);
  };

  return (
    <div id="section" className="rounded-2xl bg-white px-[28px] py-[32px]">
      <h3 className="text-bold24 mb-6">대시보드 이름</h3>
      <label htmlFor="dashboardName" className="mb-4 flex flex-col gap-2">
        <span className="text-medium18 text-black200">대시보드 이름</span>
        <Input id="dashboardName" name="dashboardName" placeholder="이름을 입력하세요" />
      </label>
      <div className="mb-6 flex gap-2">
        <ColorPalette
          isSelected={isSelected}
          colors={DASHBOARD_COLORS}
          onColorSelect={handleSelectColorClick}
        />
      </div>
      <Button fullWidth size="modal">
        변경
      </Button>
    </div>
  );
}
