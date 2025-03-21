export default function CloseIcon({
  width = '24',
  height = '24',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 7L7 17" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 7L17 17" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
