'use server';

import { api } from '@/lib/api';

export interface ColumnsType {
  id: number;
  title: string;
}

interface DashboardIdType {
  data: ColumnsType[];
}

export default async function GetDashboardColumn(dashboardId: number) {
  try {
    const response = await api.get<DashboardIdType>(`/columns?dashboardId=${dashboardId}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
