import Image from 'next/image';
import Logo from '@/public/logo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="w-full max-w-130 px-3">
        <Image className="m-auto mb-2.5" src={Logo} width={200} height={280} alt="Taskify" />
        {children}
      </div>
    </main>
  );
}
