import Link from 'next/link';
import Logo from '@/public/icons/logo.svg';
import SignupForm from '@/components/SignupForm/SignupForm';

export default function Signup() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-black200 flex w-[520px] min-w-[351px] flex-col max-sm:mx-3">
        <div className="mb-[30px] flex flex-col items-center justify-center gap-2.5 max-sm:gap-2">
          <Logo />
          <span className="text-medium20">첫 방문을 환영합니다!</span>
        </div>
        <SignupForm />
        <div className="text-regular16 mt-6 flex items-center justify-center gap-2">
          <span className="text-black200">이미 회원이신가요?</span>
          <Link href={'/login'} className="text-violet underline">
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
