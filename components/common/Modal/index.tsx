import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { borderRadiusCSS, paddingCSS, PaddingSize, RadiusSize } from './style';

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
