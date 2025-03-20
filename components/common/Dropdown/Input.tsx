import Image from 'next/image';
import close from '@/public/close_small.svg';

interface SearchableInputProps {
  value: string;
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  isOpen: boolean;
}

export function SearchableInput({
  onClick,
  value,
  onChange,
  onClear,
  isOpen,
}: SearchableInputProps) {
  return (
    <button
      className={`border-gray300 flex min-h-12 w-full items-center justify-between rounded border bg-white px-4 py-2 ${isOpen && 'border-violet'}`}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder="이름을 입력해 주세요"
        className="w-full border-0 outline-0"
      />
      {value !== '' && (
        <Image
          className="hover:bg-gray200 rounded-sm"
          src={close}
          width={24}
          height={24}
          alt="메뉴 열기"
          onClick={onClear}
        />
      )}
    </button>
  );
}
