import Image from 'next/image';
import user from '@/public/icons/user.svg';
import clsx from 'clsx';

type FontSize = 'M16' | 'R14' | 'R16';

interface BadgeProps {
  size: number;
  gap?: number;
  profile?: string;
  userName?: string;
  fontSize?: FontSize;
  responsive?: boolean;
}

export default function UserBadge({
  size,
  gap,
  profile,
  userName,
  fontSize,
  responsive,
}: BadgeProps) {
  const fontSizeCSS: Record<FontSize, string> = {
    M16: 'text-medium16',
    R14: 'text-regular14',
    R16: 'text-regular16',
  };

  return (
    <div className="flex items-center justify-center" style={{ gap: `${gap}px` }}>
      <Image
        src={profile && profile.trim() !== '' ? profile : user}
        width={size}
        height={size}
        alt="user"
      />
      {userName && (
        <span className={clsx(fontSize && fontSizeCSS[fontSize], responsive && 'max-sm:hidden')}>
          {userName}
        </span>
      )}
    </div>
  );
}
