import CloseIcon from '@/assets/icons/CloseIcon';

interface SearchableInputProps {
  value: string;
  isOpen: boolean;
  placeholder: string;
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export function SearchableInput({
  onClick,
  value,
  isOpen,
  placeholder,
  onChange,
  onClear,
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
        placeholder={placeholder}
        className="w-full border-0 outline-0"
      />
      {value !== '' && (
        <div className="hover:bg-gray200 rounded-sm" onClick={onClear}>
          <CloseIcon width="24" height="24" />
        </div>
      )}
    </button>
  );
}
