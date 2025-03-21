import clsx from 'clsx';
import { sizes, variants } from './style';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes | string;
  className?: string;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = 'solid',
  size = 'button',
  className,
}: ButtonProps) {
  const selectedSize = sizes[size as keyof typeof sizes] ?? size;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex cursor-pointer items-center justify-center overflow-hidden p-2 font-medium',
        selectedSize,
        variants[variant],
        disabled && 'cursor-not-allowed',
        className
      )}
    >
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">{children}
      </div>
    </button>
  );
}