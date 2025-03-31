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
  inviteAccepted: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type InvitationListResponse = {
  invitations: Invitation[];
  cursorId: number;
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
    throw err;
  }
}

export async function getInvitations(): Promise<InvitationListResponse> {
  try {
    return await api.get<InvitationListResponse>(EXTERNAL_API.INVITATIONS.ROOT);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function acceptInvitation(id: number): Promise<Invitation> {
  try {
    return await api.put<Invitation>(EXTERNAL_API.INVITATIONS.acceptInvitation(id), {
      inviteAccepted: true,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function rejectInvitation(id: number): Promise<Invitation> {
  try {
    return await api.put<Invitation>(EXTERNAL_API.INVITATIONS.acceptInvitation(id), {
      inviteAccepted: false,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
