import { PaginationControlsProps } from './type';
import ArrowIcon from '@/assets/icons/ArrowIcon';

export default function PaginationControls({
  currentPage,
  totalPages,
  showPageInfo,
  goToPrev,
  goToNext,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-end gap-4">
      {showPageInfo && (
        <span className="text-black200 text-regular14">
          {totalPages} 페이지 중 {currentPage}
        </span>
      )}
      <div className="flex">
        <button
          className="border-gray300 flex h-10 w-10 items-center justify-center rounded-l-sm border bg-white"
          onClick={goToPrev}
          disabled={currentPage === 1}
        >
          <ArrowIcon width="7" height="12" color={currentPage === 1 ? '#D9D9D9' : '#787486'} />
        </button>
        <button
          className="border-gray300 flex h-10 w-10 items-center justify-center rounded-r-sm border bg-white"
          onClick={goToNext}
          disabled={currentPage === totalPages}
        >
          <ArrowIcon
            direction="right"
            width="7"
            height="12"
            color={currentPage === totalPages ? '#D9D9D9' : '#787486'}
          />
        </button>
      </div>
    </div>
  );
}
