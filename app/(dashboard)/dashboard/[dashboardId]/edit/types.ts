import { Dashboard } from '@/app/(dashboard)/mydashboard/types';

export type UpdateDashboardPayload = {
  title: string;
  color: string;
};

export type Member = {
  id: number;
  nickname: string;
};

export type DashboardWithMembers = Dashboard & {
  members: Member[];
};
