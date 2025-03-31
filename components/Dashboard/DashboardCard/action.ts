'use server';

import { api } from '@/lib/api';

interface CardsType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    id: number;
    nickname: string;
    profileImageUrl: string | null;
  };
  imageUrl: string;
}

interface CardsPromise {
  cards: CardsType[];
  totalCount: number;
}

export default async function getDashboardCard(id: number) {
  const response = await api.get<CardsPromise>(`/cards?columnId=${id}`);
  return response;
}
