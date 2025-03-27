import UserHeader from '@/components/layout/Header/UserHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserHeader />
      <main>{children}</main>
    </>
  );
}
