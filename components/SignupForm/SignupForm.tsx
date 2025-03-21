import {
  validateEmail,
  validateEqualPassword,
  validateLimitLengthNickname,
  validatePassword,
} from '@/utils/signupValidate';
import InputField from '../compound/input/InputField';
import CheckBox from './CheckBox';

export default function SignupForm() {
  const INPUT = [
    {
      label: '이메일',
      placeholder: '이메일을 입력해 주세요',
      isValid: !validateEmail,
      errorMessage: '이메일 형식으로 작성해 주세요.',
    },
    {
      label: '닉네임',
      placeholder: '닉네임을 입력해 주세요',
      isValid: !validateLimitLengthNickname,
      errorMessage: '열 자 이하로 작성해주세요.',
    },
    {
      label: '비밀번호',
      placeholder: '8자 이상 입력해 주세요',
      isValid: !validatePassword,
      errorMessage: '8자 이상 입력해주세요.',
    },
    {
      label: '비밀번호 확인',
      placeholder: '비밀번호를 한번 더 입력해 주세요',
      isValid: !validateEqualPassword,
      errorMessage: '비밀번호가 일치하지 않습니다.',
    },
  ];

  return (
    <form className="flex flex-col gap-3">
      {INPUT.map((input) => (
        <InputField key={input.label} label={input.label} placeholder={input.placeholder} />
      ))}
      <CheckBox />
    </form>
  );
}
