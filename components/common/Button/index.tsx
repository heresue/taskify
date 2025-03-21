import clsx from 'clsx';
import { sizes, variants } from './style';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variants;
  size?: keyof typeof sizes | string;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'solid',
  size = 'button',
  fullWidth,
  className,
  disabled = false,
}: ButtonProps) {
  const selectedSize = sizes[size as keyof typeof sizes] ?? size;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex cursor-pointer items-center justify-center overflow-hidden p-2 font-medium',
        selectedSize,
        variants[variant],
        fullWidth && 'w-full',
        disabled && 'cursor-not-allowed',
        className
      )}
    >
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">{children}</div>
    </button>
  );
}
