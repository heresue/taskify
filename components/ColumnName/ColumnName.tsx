export default function ColumnName({ columnName }: { columnName: string }) {
  return (
    <div className="bg-violet8 flex h-[26px] items-center justify-center gap-2.5 rounded-2xl px-2 py-1 md:px-2.5">
      <div className="bg-violet h-1.5 w-1.5 rounded-full" />
      <span className="text-violet text-regular12 md:text-regular14">{columnName}</span>
    </div>
  );
}
