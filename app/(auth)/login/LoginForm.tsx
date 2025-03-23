'use client';

import FormField from '@/components/compound/form/FormField';
import Button from '@/components/common/Button';
import { useState, useEffect } from 'react';

const Email_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Password_Regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

export const validateEmail = (value: string) => {
  return Email_Regex.test(value);
};

export const validatePassword = (value: string) => {
  return Password_Regex.test(value);
};

export default function LoginForm() {
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
  }, [isEmailValid, isPasswordValid]);

  return (
    <form action="" className="flex w-full flex-col gap-4 lg:gap-6">
      <div className="flex flex-col gap-2 lg:gap-4">
        <FormField
          fieldType="input"
          label="이메일"
          id="email"
          type="email"
          errorMessage="이메일 형식으로 작성해 주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          isValid={isEmailValid}
        />
        <FormField
          fieldType="input"
          label="비밀번호"
          id="password"
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
