'use client';

import { useState, useMemo } from 'react';
import PaginationControls from './PaginationControls';
import { PaginationProps } from './type';

export default function Pagination<T>({
  data,
  itemsPerPage,
  showPageInfo = true,
  renderItems,
  renderControls,
  wrapperClassName,
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const { totalPages, currentItems } = useMemo(() => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      totalPages,
      currentItems: data.slice(start, end),
    };
  }, [data, currentPage, itemsPerPage]);

  const shouldRenderControls = totalPages > 1;

  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const controlsProps = {
    currentPage,
    totalPages,
    showPageInfo,
    goToPrev,
    goToNext,
  };

  const controls = renderControls ? (
    renderControls(controlsProps)
  ) : (
    <PaginationControls {...controlsProps} />
  );

  return (
    <div className={wrapperClassName}>
      <div>{renderItems(currentItems)}</div>
      {shouldRenderControls && controls}
    </div>
  );
}
