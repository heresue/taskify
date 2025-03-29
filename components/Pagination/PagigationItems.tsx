'use client';

import { useMemo } from 'react';
import { PaginationItemsProps } from './type';

export default function PaginationItems<T>({
  data,
  itemsPerPage,
  renderFixedItem,
  renderItems,
  wrapperClassName,
  currentPage,
}: PaginationItemsProps<T>) {
  const currentItems = useMemo(() => {
    if (currentPage === 1) {
      const count = renderFixedItem ? itemsPerPage - 1 : itemsPerPage;
      return data.slice(0, count);
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage, renderFixedItem]);

  return (
    <div className={wrapperClassName}>
      {currentPage === 1 && renderFixedItem?.()}
      {renderItems(currentItems)}
    </div>
  );
}
