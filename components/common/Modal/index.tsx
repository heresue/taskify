import clsx from 'clsx';
import { createPortal } from 'react-dom';

type PaddingSize = '64/40' | '24/24' | '32/32' | '32/24';
type RadiusSize = '16' | '8';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  confirmFunction?: () => void;
  confirmMessage?: string;
  cancelMessage?: string;
  padding: PaddingSize;
  borderRadius: RadiusSize;
}

export default function Modal({
  isOpen,
  children,
  onClose,
  confirmFunction,
  confirmMessage,
  cancelMessage,
  padding,
  borderRadius,
}: ModalProps) {
  if (!isOpen) return null;

  const paddingCSS: Record<PaddingSize, string> = {
    '64/40': 'px-16 py-10 max-sm:px-10 max-sm:py-8',
    '32/32': 'p-8 max-sm:px-4 max-sm:py-6',
    '32/24': 'px-8 py-6 max-sm:p-4',
    '24/24': 'p-6 max-sm:px-4 max-sm:py-6',
  };

  const borderRadiusCSS: Record<RadiusSize, string> = {
    '16': 'rounded-2xl',
    '8': 'rounded-lg',
  };

  const handleConfirmClick = () => {
    if (confirmFunction) {
      confirmFunction();
    }
    onClose();
  };

  return createPortal(
    <>
      <div className="fixed top-0 left-0 z-[999] h-full w-full bg-black opacity-70" />
      <div
        className={clsx(
          'fixed top-1/2 left-1/2 z-[999] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 bg-white',
          paddingCSS[padding],
          borderRadiusCSS[borderRadius]
        )}
      >
        {children}
        <div
          className={`flex gap-[7px] ${
            cancelMessage && confirmMessage
              ? 'w-[520px] min-w-[295px] max-sm:w-[83.9vw]'
              : 'w-60 min-w-48 max-sm:w-[45.1vw]'
          }`}
        >
          {cancelMessage && (
            <button
              onClick={onClose}
              className="border-gray300 flex-1 rounded-lg border border-solid px-[46px] py-[14px]"
            >
              {cancelMessage}
            </button>
          )}
          {confirmMessage && (
            <button
              onClick={handleConfirmClick}
              className="bg-violet flex-1 rounded-lg px-[46px] py-[14px] text-white"
            >
              {confirmMessage}
            </button>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}
