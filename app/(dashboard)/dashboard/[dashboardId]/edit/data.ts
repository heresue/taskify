import EXTERNAL_API from '@/constants/api/external';
import { api } from '@/lib/api';
import { DashboardWithMembers, UpdateDashboardPayload } from './types';
import { Dashboard } from '@/app/(dashboard)/mydashboard/types';

export async function updateDashboard(dashboardId: number, payload: UpdateDashboardPayload) {
  try {
    return await api.put(EXTERNAL_API.DASHBOARDS.getDetail(dashboardId), payload);
  } catch (err) {
    throw err;
  }
}

export async function getDashboardDetail(dashboardId: number): Promise<Dashboard> {
  try {
    return await api.get(EXTERNAL_API.DASHBOARDS.getDetail(dashboardId));
  } catch (err) {
    throw err;
  }
}

export async function getMembers(dashboardId: number): Promise<DashboardWithMembers> {
  try {
    return await api.get(`${EXTERNAL_API.MEMBERS.ROOT}?dashboardId=${dashboardId}`);
  } catch (err) {
    throw err;
  }
}

export async function deleteMembers(memberId: number): Promise<DashboardWithMembers> {
  try {
    return await api.delete(EXTERNAL_API.MEMBERS.getDetail(memberId));
  } catch (err) {
    throw err;
  }
}
