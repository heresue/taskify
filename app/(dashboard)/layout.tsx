import SideNav from '@/components/layout/SideNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="bg-gray100 flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
