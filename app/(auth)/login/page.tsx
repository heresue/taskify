import Link from 'next/link';
import LoginForm from '@/app/(auth)/login/LoginForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken');

  if (accessToken) {
    redirect('/mydashboard');
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-medium18 text-black200 mb-9">오늘도 만나서 반가워요!</h2>
      <LoginForm />
      <div className="mt-6">
        <span className="text-black200 mr-2">회원이 아니신가요?</span>
        <Link href={`/signup`} className="text-violet underline">
          회원가입하기
        </Link>
      </div>
    </div>
  );
}
