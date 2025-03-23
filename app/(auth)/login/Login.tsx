/* 역할
Login 요청 실행
성공/실패 상태 반환
*/

import { api } from '@/lib/api';

export async function Login(previousState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const data = {
    email,
    password,
  };

  // @TODO: 응답 예외 처리
  const res = await api.post('/auth/login', data);

  return res;
}
