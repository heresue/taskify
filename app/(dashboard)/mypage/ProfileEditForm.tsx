'use client';

import Button from '@/components/common/Button';
import FormField from '@/components/compound/form/FormField';
import UploadImage from '@/components/compound/upload/UploadImage';
import { validateLimitLengthNickname } from '@/utils/authValidate';
import { useRef, useState } from 'react';

const initialNickname = '홍길동';
const initialImage = null;

export default function ProfileEditForm() {
  const [nickname, setNickname] = useState(initialNickname);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const hasNicknameClickedRef = useRef<boolean>(false);

  const canSubmit =
    hasNicknameClickedRef.current && isNicknameValid && nickname !== initialNickname;

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    return;
  };

  const handleNicknameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    hasNicknameClickedRef.current = true;
    setIsNicknameValid(validateLimitLengthNickname(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 md:p-6">
      <h2 className="text-bold20 text-black200 md:text-bold24">프로필</h2>
      <div className="my-6 flex flex-col md:flex-row">
        <div className="mb-10 size-25 md:mr-10 md:mb-0 md:size-[180px] md:basis-[180px]">
          <UploadImage id="profileImageUrl" image={initialImage} onChange={handleChangeImage} />
        </div>
        <div className="w-full md:flex-1">
          <div className="mb-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className={`text-black200 text-regular14 md:text-regular16`}>이메일</label>
              <div className="text-gray400 text-regular16 border-gray300 hover:border-violet focus-within:border-violet truncate rounded-lg border-1 px-4 py-3 transition-colors">
                {'johndoe@gmail.com'}
              </div>
            </div>
            <FormField
              id="nickname"
              name="nickname"
              type="text"
              label="닉네임"
              placeholder="닉네임"
              fieldType="input"
              errorMessage="닉네임을 입력해 주세요."
              customLabelClass="text-regular14 md:text-regular16"
              onChange={(e) => setNickname(e.target.value)}
              onBlur={handleNicknameBlur}
              isValid={isNicknameValid}
              value={nickname}
            />
          </div>
          <Button type="submit" size="auth" disabled={!canSubmit} fullWidth={true}>
            변경
          </Button>
        </div>
      </div>
    </form>
  );
}
