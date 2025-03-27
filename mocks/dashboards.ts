// mocks/mockDashboards.ts

import { ColorKey } from '@/components/DashboardColorIcon/DashboardColorIcon';

export interface MockDashboard {
  id: number;
  title: string;
  color: ColorKey;
  createdAt?: string;
  updatedAt?: string;
  createdByMe: boolean;
  userId?: number;
}

export const mockDashboards: MockDashboard[] = [
  {
    id: 1,
    title: '나의 첫 번째 대시보드',
    color: 'green',
    createdAt: '2025-03-01T10:00:00.000Z',
    updatedAt: '2025-03-01T10:00:00.000Z',
    createdByMe: true,
    userId: 101,
  },
  {
    id: 2,
    title: '협업용 대시보드',
    color: 'orange',
    createdAt: '2025-03-02T09:00:00.000Z',
    updatedAt: '2025-03-02T09:00:00.000Z',
    createdByMe: false,
    userId: 102,
  },
  {
    id: 3,
    title: '길고 긴 대시보드 이름을 테스트하는 항목입니다',
    color: 'blue',
    createdAt: '2025-03-03T08:30:00.000Z',
    updatedAt: '2025-03-03T08:30:00.000Z',
    createdByMe: true,
    userId: 101,
  },
  {
    id: 4,
    title: '디자인 팀 대시보드',
    color: 'pink',
    createdAt: '2025-03-04T14:20:00.000Z',
    updatedAt: '2025-03-04T14:20:00.000Z',
    createdByMe: false,
    userId: 103,
  },
  {
    id: 5,
    title: '개발 회의용 보드',
    color: 'orange',
    createdAt: '2025-03-05T11:15:00.000Z',
    updatedAt: '2025-03-05T11:15:00.000Z',
    createdByMe: true,
    userId: 101,
  },
  {
    id: 6,
    title: '이번 분기 목표 정리',
    color: 'blue',
    createdAt: '2025-03-06T16:45:00.000Z',
    updatedAt: '2025-03-06T16:45:00.000Z',
    createdByMe: false,
    userId: 104,
  },
];
