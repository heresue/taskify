"use client"

import { useMemo } from 'react';
import { PaginationItemsProps } from './type';

export default function PaginationItems<T>({
  data = [],
  itemsPerPage,
  renderFixedItem,
  renderItems,
  wrapperClassName,
  currentPage,
}: PaginationItemsProps<T>) {
  const currentItems = useMemo(() => {
    const isFirstPage = currentPage === 1;
    const pageSize = isFirstPage && renderFixedItem ? itemsPerPage - 1 : itemsPerPage;
    const baseStartIndex = (currentPage - 1) * itemsPerPage;
    const secondPageBaseIndex = renderFixedItem ? baseStartIndex - 1 : baseStartIndex;

    const startIndex = isFirstPage ? 0 : secondPageBaseIndex;
    const endIndex = startIndex + pageSize;

    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage, renderFixedItem]);

  return (
    <div className={wrapperClassName}>
      {currentPage === 1 && renderFixedItem?.()}
      {renderItems(currentItems)}
    </div>
  );
}

/** 💡 PaginationItems + PaginationControls 기본 사용법 */

// const itemsPerPage = ; // 페이지에 렌더할 아이템 수

// const { currentPage, totalPages, goToPrev, goToNext } = usePagination(paginatedData, itemsPerPage, true); // 마지막 인자: 첫 번째 요소가 있을 경우 true, 없으면 false

// return (
//   <>
//     <PaginationControls
//       currentPage={currentPage}
//       totalPages={totalPages}
//       goToPrev={goToPrev}
//       goToNext={goToNext}
//       // optional: showPageInfo, justify 등
//     />

//     <PaginationItems
//       data={paginatedData}
//       itemsPerPage={itemsPerPage}
//       currentPage={currentPage}
//       // optional: renderFixedItem, wrapperClassName 등
//       renderItems={(items) => (
//         <>
//           {items.map((item) => (
//             <div key={item.id}>{item.title}</div>
//           ))}
//         </>
//       )}
//     />
//   </>
// );
