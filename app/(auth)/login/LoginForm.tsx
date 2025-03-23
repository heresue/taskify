'use client';

import FormField from '@/components/compound/form/FormField';
import Button from '@/components/common/Button';

export default function LoginForm() {
  return (
    <form action="" className="flex w-full flex-col gap-4 lg:gap-6">
      <div className="flex flex-col gap-2 lg:gap-4">
        <FormField fieldType="input" label="이메일" id="email" />
        <FormField fieldType="input" label="비밀번호" id="email" className="w-full" />
      </div>
      <Button size="auth" fullWidth={true} type="submit">
        로그인
      </Button>
    </form>
  );
}
