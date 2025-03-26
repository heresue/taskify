import clsx from 'clsx';
import { sizes, variants } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes | string;
  fullWidth?: boolean;
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
  ...props
}: ButtonProps) {
  const selectedSize = sizes[size as keyof typeof sizes] ?? size;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex items-center justify-center overflow-hidden p-2 font-medium',
        selectedSize,
        variants[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      <div className="flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </div>
    </button>
  );
}
