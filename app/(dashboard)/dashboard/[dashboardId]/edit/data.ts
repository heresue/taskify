import EXTERNAL_API from '@/constants/api/external';
import { api } from '@/lib/api';
import { UpdateDashboardPayload } from './types';
import { Dashboard } from '@/app/(dashboard)/mydashboard/types';

export async function updateDashboard(dashboardId: number, payload: UpdateDashboardPayload) {
  try {
    return await api.put(EXTERNAL_API.DASHBOARDS.getDetail(dashboardId), payload);
  } catch (err) {
    console.error('대시보드 수정 실패:', err);
    throw err;
  }
}
export async function getDashboardDetail(dashboardId: number): Promise<Dashboard> {
  try {
    return await api.get(EXTERNAL_API.DASHBOARDS.getDetail(dashboardId));
  } catch (err) {
    console.error('대시보드 정보 로드 실패:', err);
    throw err;
  }
}
