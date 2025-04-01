import EXTERNAL_API from '@/constants/api/external';
import { api } from '@/lib/api';
import { UpdateDashboardPayload } from './types';

export async function updateDashboard(dashboardId: number, payload: UpdateDashboardPayload) {
  try {
    const response = await api.put(EXTERNAL_API.DASHBOARDS.getDetail(dashboardId), payload);
    return response;
  } catch (err) {
    console.error('대시보드 수정 실패:', err);
    throw err;
  }
}
