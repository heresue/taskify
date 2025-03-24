// mocks/mockDashboards.ts

export interface MockDashboard {
    id: number;
    title: string;
    color: string;
    createdAt: string;
    updatedAt: string;
    createdByMe: boolean;
    userId: number;
  }
  
  export const mockDashboards: MockDashboard[] = [
    {
      id: 1,
      title: '나의 첫 번째 대시보드',
      color: '#7AC555',
      createdAt: '2025-03-01T10:00:00.000Z',
      updatedAt: '2025-03-01T10:00:00.000Z',
      createdByMe: true,
      userId: 101,
    },
    {
      id: 2,
      title: '협업용 대시보드',
      color: '#FFA500',
      createdAt: '2025-03-02T09:00:00.000Z',
      updatedAt: '2025-03-02T09:00:00.000Z',
      createdByMe: false,
      userId: 102,
    },
    {
      id: 3,
      title: '길고 긴 대시보드 이름을 테스트하는 항목입니다',
      color: '#76A5EA',
      createdAt: '2025-03-03T08:30:00.000Z',
      updatedAt: '2025-03-03T08:30:00.000Z',
      createdByMe: true,
      userId: 101,
    },
  ];
  