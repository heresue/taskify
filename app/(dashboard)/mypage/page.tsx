/*
'+' 버튼을 클릭하면 이미지를 업로드할 수 있도록 하세요.
이메일은 수정할 수 없도록 하세요.
닉네임 또는 이미지를 바꾸고 '저장' 버튼을 클릭하면 정보가 수정되도록 하세요.
새 비밀번호 확인 input에서 focus out 시, 새 비밀번호 input 값과 다를 경우 빨간색 테두리와 아래에 “비밀번호가 일치하지 않습니다.”라는 빨간색 에러 메시지를 보이게 하세요.
모든 input이 채워지면 '변경' 버튼이 활성화되도록 하세요.
'변경' 버튼을 클릭했을 때 현재 비밀번호 값이 틀리면 “현재 비밀번호가 틀립니다”라는 경고창이 나타나도록 하세요.
정확한 현재 비밀번호 값을 입력하고 '변경' 버튼을 클릭하면 비밀번호가 변경되도록 하세요
*/

import Link from 'next/link';
import ChangePasswordForm from '@/app/(dashboard)/mypage/ProfileEditForm';
import ProfileEditForm from '@/app/(dashboard)/mypage/ChangePasswordForm';

export default function Page() {
  return (
    <div className="mx-3 my-4 w-full max-w-[680px] md:m-4 lg:m-5">
      <Link href="/mydashboard" className="flex gap-2">
        {/* TODO: 뒤로가기 아이콘 추가 */}
        <span className="text-medium14 text-black200 md:text-medium16">돌아가기</span>
      </Link>
      <div className="flex flex-col gap-4 md:gap-6">
        <ProfileEditForm />
        <ChangePasswordForm />
      </div>
    </div>
  );
}
