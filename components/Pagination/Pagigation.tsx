'use client';

import { useState, useMemo } from 'react';
import PaginationControls from './PaginationControls';
import { PaginationProps } from './type';

export default function Pagination<T>({
  data,
  itemsPerPage,
  showPageInfo = true,
  renderFixedItem,
  renderItems,
  renderControls,
  wrapperClassName,
  itemsWrapperClassName,
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedItems = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (currentPage === 1) {
      const count = renderFixedItem ? itemsPerPage - 1 : itemsPerPage;
      return { totalPages, currentItems: data.slice(0, count) };
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      totalPages,
      currentItems: data.slice(start, end),
    };
  };

  const { totalPages, currentItems } = useMemo(getPaginatedItems, [
    data,
    currentPage,
    itemsPerPage,
    renderFixedItem,
  ]);

  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const controlsProps = {
    currentPage,
    totalPages,
    showPageInfo,
    goToPrev,
    goToNext,
  };

  const shouldRenderControls = totalPages > 1;

  const controls = renderControls ? (
    renderControls(controlsProps)
  ) : (
    <PaginationControls {...controlsProps} />
  );

  return (
    <div className={wrapperClassName}>
      <div className={itemsWrapperClassName}>
        {currentPage === 1 && renderFixedItem?.()}
        {renderItems(currentItems)}
      </div>
      {shouldRenderControls && controls}
    </div>
  );
}
