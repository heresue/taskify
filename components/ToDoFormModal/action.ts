import { api } from '@/lib/api';

export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  userId: number;
}

interface MembersPromise {
  members: Member[];
  totalCount: number;
}

export async function getMembers(dashboardId: number) {
  const response = await api.get<MembersPromise>(`/members?dashboardId=${dashboardId}`);
  return response;
}
