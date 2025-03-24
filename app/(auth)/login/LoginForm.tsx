'use client';

import FormField from '@/components/compound/form/FormField';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { validateEmail, validatePassword } from '@/utils/authValidate';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [hasEmailClicked, setHasEmailClicked] = useState(false);
  const [hasPasswordClicked, setHasPasswordClicked] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasEmailClicked(true);
    setIsEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasPasswordClicked(true);
    setIsPasswordValid(validatePassword(e.target.value));
  };

  useEffect(() => {
    setCanSubmit(hasEmailClicked && hasPasswordClicked && isEmailValid && isPasswordValid);
  }, [setCanSubmit, hasEmailClicked, hasPasswordClicked, isEmailValid, isPasswordValid]);

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
      setModalMessage(result.message);
      setIsModalOpen(true);
    }
  };

  return (
    <>
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
      <Modal
        isOpen={isModalOpen}
        padding="64/40"
        borderRadius="16"
        submitMessage="확인"
        onClose={() => setIsModalOpen(false)}
      >
        {modalMessage}
      </Modal>
    </>
  );
}
