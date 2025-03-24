import FormField from '@/components/compound/form/FormField';
import Button from '@/components/common/Button';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-medium18 text-black200 mb-9">오늘도 만나서 반가워요!</h2>
      <form action="" className="flex w-full flex-col gap-4 lg:gap-6">
        <div className="flex flex-col gap-2 lg:gap-4">
          <FormField fieldType="input" label="이메일" id="email" />
          <FormField fieldType="input" label="비밀번호" id="email" className="w-full" />
        </div>
        <Button size="auth" fullWidth={true} type="submit">
          로그인
        </Button>
      </form>
      <div className="mt-6">
        <span className="text-black200 mr-2">회원이 아니신가요?</span>
        <Link href={`/signup`} className="text-violet underline">
          회원가입하기
        </Link>
      </div>
    </div>
  );
}
