'use client';

import { redirect } from 'next/navigation';
import CheckBox from './CheckBox';
import FormField from '../compound/form/FormField';
import Button from '../common/Button';
import Modal from '../common/Modal';
import useSignupForm from './useSignupForm';
import PasswordToggleBtn from './PasswordToggleBtn';

const INPUT_FIELD_LIST = [
  {
    label: '이메일',
    name: 'email',
    placeholder: '이메일을 입력해 주세요',
  },
  {
    label: '닉네임',
    name: 'nickname',
    placeholder: '닉네임을 입력해 주세요',
  },
  {
    label: '비밀번호',
    name: 'password',
    placeholder: '8자 이상 입력해 주세요',
  },
  {
    label: '비밀번호 확인',
    name: 'checkPassword',
    placeholder: '비밀번호를 한번 더 입력해 주세요',
  },
] as const;

export default function SignupForm() {
  const {
    formData,
    handleFormChange,
    handleIsChecked,
    handlePreventSpace,
    isPasswordVisible,
    toggleVisiblePassword,
    isFormIncomplete,
    handleFormSubmit,
    state,
    isPending,
  } = useSignupForm();

  return (
    <form onSubmit={handleFormSubmit} className="flex w-full flex-col gap-6">
      <Modal
        isOpen={(state && state.status) || false}
        padding="64/40"
        borderRadius="16"
        submitMessage="확인"
        onClose={() => redirect('/login')}
      >
        가입이 완료되었습니다!
      </Modal>
      <div className="flex flex-col gap-4">
        {INPUT_FIELD_LIST.map((input) => {
          const { label, name, placeholder } = input;
          const isPasswordInput = ['password', 'checkPassword'].includes(name);
          const isPasswordValueVisible = isPasswordVisible[name];
          const isInputFieldValid = state?.field === name;

          return (
            <div key={label} className="relative">
              <FormField
                name={name}
                type={isPasswordInput && isPasswordValueVisible ? 'text' : 'password'}
                value={formData[name]}
                label={label}
                placeholder={placeholder}
                onChange={handleFormChange}
                onKeyDown={handlePreventSpace}
                isValid={!isInputFieldValid}
                errorMessage={isInputFieldValid ? state.err : ''}
                fieldType="input"
                rightIcon={
                  isPasswordInput && (
                    <PasswordToggleBtn
                      isVisible={isPasswordValueVisible}
                      onClick={() => toggleVisiblePassword(name)}
                    />
                  )
                }
              />
            </div>
          );
        })}
        <CheckBox isChecked={formData.isChecked} handleIsChecked={handleIsChecked} />
      </div>
      <Button disabled={isPending || isFormIncomplete} type="submit" fullWidth size="auth">
        {isPending ? '...' : '가입하기'}
      </Button>
    </form>
  );
}
