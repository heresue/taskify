'use client';

import FormField from '@/components/compound/form/FormField';
import Button from '@/components/common/Button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Email_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Password_Regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

export const validateEmail = (value: string) => {
  return Email_Regex.test(value);
};

export const validatePassword = (value: string) => {
  return Password_Regex.test(value);
};

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleEmailBlur = (e) => {
    setIsEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordBlur = (e) => {
    setIsPasswordValid(validatePassword(e.target.value));
  };

  useEffect(() => {
    setCanSubmit(isEmailValid && isPasswordValid);
  }, [setCanSubmit, isEmailValid, isPasswordValid]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();

    if (result.success) {
      router.push('/mydashboard');
    } else {
      alert(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 lg:gap-6">
      <div className="flex flex-col gap-2 lg:gap-4">
        <FormField
          id="email"
          name="email"
          fieldType="input"
          label="이메일"
          type="email"
          errorMessage="이메일 형식으로 작성해 주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          isValid={isEmailValid}
        />
        <FormField
          id="password"
          name="password"
          fieldType="input"
          label="비밀번호"
          type="password"
          errorMessage="8자 이상 작성해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
          isValid={isPasswordValid}
        />
      </div>
      <Button size="auth" fullWidth={true} type="submit" disabled={!canSubmit}>
        로그인
      </Button>
    </form>
  );
}
