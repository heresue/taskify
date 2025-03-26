import Button from '@/components/common/Button';
import BackLink from './BackLink';
import DashboardNameSection from './DashboardNameSection ';
import MemberListSection from './MemberListSection ';
import InvitationListSection from './InvitationListSection ';

interface Props {
  params: { id: string };
}

export default function DashboardIdEdit({ params }: Props) {
  const { id } = params;

  return (
    <div id="wrapper" className="m-5 mb-[57px] flex flex-col gap-[34px]">
      <BackLink id={id} />

      <div className="flex w-[620px] flex-col gap-4">
        <DashboardNameSection />
        <MemberListSection />
        <InvitationListSection />

        <Button variant="outline" size="deleteDashboard">
          대시보드 삭제하기
        </Button>
      </div>
    </div>
  );
}
