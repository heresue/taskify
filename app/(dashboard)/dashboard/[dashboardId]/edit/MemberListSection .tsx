'use client';

import Button from '@/components/common/Button';
import UserIcon from '@/assets/icons/UserIcon';
import { useState } from 'react';

interface Member {
  id: number;
  nickname: string;
}

interface Props {
  initialMembers?: Member[];
}

const mockMembers = [
  { id: 1, nickname: '홍길동' },
  { id: 2, nickname: '김개발자' },
  { id: 3, nickname: '이테스트' },
];

export default function MemberListSection({ initialMembers = mockMembers }: Props) {
  const [members, setMembers] = useState<Member[]>(initialMembers || []);

  // 데이터 연동 후 수정
  const deleteMember = async (memberId: number) => {
    console.log(`[임시] 삭제 요청: 구성원 ID ${memberId}`);
    return Promise.resolve();
  };

  const handleDeleteMember = async (memberId: number) => {
    try {
      await deleteMember(memberId);
      setMembers((prev) => prev.filter((m) => m.id !== memberId));
    } catch (error) {
      console.error('구성원 삭제 실패:', error);
    }
  };

  return (
    <div id="section" className="rounded-2xl bg-white pt-[32px]">
      <div className="mb-[27px] flex items-center justify-between px-[28px]">
        <h3 className="text-bold24">구성원</h3>
        <div>페이지네이션 버튼</div>
      </div>

      <div className="w-full rounded-lg">
        <h4 className="text-gray400 text-regular16 px-[28px]">이름</h4>
        {members.map((member) => (
          <div key={member.id} className="border-gray200 border-b">
            <div className="flex justify-between px-[28px] py-[16px]">
              <div className="flex items-center gap-[12px]">
                <UserIcon width={38} height={38} />
                <span>{member.nickname}</span>
              </div>
              <Button variant="ghost" size="delete" onClick={() => handleDeleteMember(member.id)}>
                삭제
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
