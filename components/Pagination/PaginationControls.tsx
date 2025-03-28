import { PaginationControlsProps } from "./type";

export default function PaginationControls({
  currentPage,
  totalPages,
  showPageInfo,
  goToPrev,
  goToNext,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-4 flex items-center justify-end gap-2">
      {showPageInfo && (
        <span className="text-gray400 text-sm">
          {currentPage} 페이지 중 {totalPages}
        </span>
      )}
      <button onClick={goToPrev} disabled={currentPage === 1}>
        &lt;
      </button>
      <button onClick={goToNext} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
}
