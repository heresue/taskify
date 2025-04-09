'use server';

import { revalidatePath } from 'next/cache';
import { acceptInvitation, rejectInvitation } from './data';

export async function acceptInvitationAction(invitationId: number) {
  await acceptInvitation(invitationId);
  revalidatePath('/mydashboard');
}

export async function rejectInvitationAction(id: number) {
    await rejectInvitation(id);
    revalidatePath('/mydashboard');
  }