'use client';
import { useState, useRef } from 'react';
import Button from '@/components/common/Button';
import FormField from '@/components/compound/form/FormField';
import { validatePassword, validateEqualPassword } from '@/utils/authValidate';

export default function ChangePasswordForm() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const hasPasswordClickedRef = useRef<boolean>(false);
  const hasNewPasswordClickedRef = useRef<boolean>(false);
  const hasConfirmPasswordClickedRef = useRef<boolean>(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalMessage, setModalMessage] = useState('');

  const canSubmit =
    hasPasswordClickedRef.current &&
    hasNewPasswordClickedRef.current &&
    hasConfirmPasswordClickedRef.current &&
    isPasswordValid &&
    isNewPasswordValid &&
    isConfirmPasswordValid;

  const handlePasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    hasPasswordClickedRef.current = true;
    setIsPasswordValid(validatePassword(e.target.value));
  };

  const handleNewPasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    hasNewPasswordClickedRef.current = true;
    setIsNewPasswordValid(validatePassword(e.target.value));
    setIsConfirmPasswordValid(validateEqualPassword(e.target.value, confirmPassword));
  };

  const handleConfirmPasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    hasConfirmPasswordClickedRef.current = true;
    setIsConfirmPasswordValid(validateEqualPassword(newPassword, e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-bold20 text-black200 md:text-bold24">비밀번호 변경</h2>
      <div className="my-6 flex flex-col gap-4">
        <FormField
          id="password"
          name="password"
          type="password"
          label="현재 비밀번호"
          placeholder="현재 비밀번호 입력"
          fieldType="input"
          errorMessage="8자 이상 입력해 주세요."
          customLabelClass="text-regular14"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
          isValid={isPasswordValid}
          value={password}
        />
        <FormField
          id="newPassword"
          name="newPassword"
          type="password"
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
          fieldType="input"
          errorMessage="8자 이상 입력해 주세요."
          customLabelClass="text-regular14"
          onChange={(e) => setNewPassword(e.target.value)}
          onBlur={handleNewPasswordBlur}
          isValid={isNewPasswordValid}
          value={newPassword}
        />
        <FormField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="새 비밀번호 확인"
          placeholder="새 비밀번호 입력"
          fieldType="input"
          errorMessage="비밀번호가 일치하지 않습니다."
          customLabelClass="text-regular14"
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={handleConfirmPasswordBlur}
          isValid={isConfirmPasswordValid}
          value={confirmPassword}
        />
      </div>
      <Button type="submit" size="auth" disabled={!canSubmit} fullWidth={true}>
        변경
      </Button>
    </form>
  );
}
