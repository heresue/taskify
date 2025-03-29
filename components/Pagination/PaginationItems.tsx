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

/** 💡 PaginationItems + PaginationControls 기본 사용법
 *
 * const itemsPerPage = ; // 한 페이지에 표시할 데이터 개수
 *
 * const filteredData = useMemo(() => 필터링된 데이터, [의존성]);
 *
 * const [data, setData] = useState(filteredData);
 *
 * useEffect(() => {
 *   setData(filteredData);
 * }, [filteredData]);
 *
 * const { currentPage, totalPages, goToPrev, goToNext } = usePagination(data, itemsPerPage);
 *
 * <PaginationControls
 *   currentPage={currentPage}
 *   totalPages={totalPages}
 *   goToPrev={goToPrev}
 *   goToNext={goToNext}
 * />
 *
 * <PaginationItems
 *   data={data}
 *   itemsPerPage={itemsPerPage}
 *   currentPage={currentPage}
 *   renderItems={(items) => (
 *     <>
 *       {items.map((item) => (
 *         <div key={item.id}>{item.title}</div>
 *       ))}
 *     </>
 *   )}
 * />
 */
