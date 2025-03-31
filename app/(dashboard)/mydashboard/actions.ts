'use server';

import EXTERNAL_API from '@/constants/api/external';
import { api } from '@/lib/api';

export type Dashboard = {
  id: number;
  title: string;
  color: string;
  createdAt?: string;
  updatedAt?: string;
  createdByMe: boolean;
  userId?: number;
};

export type DashboardListResponse = {
  dashboards: Dashboard[];
  totalCount: number;
};

export type Invitation = {
  id: number;
  inviteAccepted: boolean | null;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  createdAt: string;
  updatedAt: string;
};

export type InvitationListResponse = {
  invitations: Invitation[];
  totalCount: number;
};

export async function getMyDashboards(
  page: number = 1,
  size: number = 6
): Promise<DashboardListResponse> {
  const query = `?navigationMethod=pagination&page=${page}&size=${size}`;
  try {
    return await api.get<DashboardListResponse>(`${EXTERNAL_API.DASHBOARDS.ROOT}${query}`);
  } catch (err) {
    console.error(err);
    return { dashboards: [], totalCount: 0 };
  }
}

export async function getInvitations(): Promise<InvitationListResponse> {
  try {
    return await api.get<InvitationListResponse>(EXTERNAL_API.INVITATIONS.ROOT);
  } catch (err) {
    console.error(err);
    return { invitations: [], totalCount: 0 };
  }
}
