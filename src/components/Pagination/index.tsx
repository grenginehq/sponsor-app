import {
  usePagination,
  ELLIPSIS,
  PaginationHookProps,
} from "@/hooks/usePagination";
import styles from "./pagination.module.css";

export interface PaginationProps extends Omit<
  PaginationHookProps,
  "totalPages"
> {
  totalCount: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const DEFAULT_PAGE_SIZE = 6;

export function Pagination({
  currentPage,
  totalCount,
  pageSize = DEFAULT_PAGE_SIZE,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  className = "",
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount,
  });

  return (
    <nav className={styles.pagination_container}>
      <ul className={styles.pagination}>
        {paginationRange.map((pageItem, index) => {
          if (pageItem === ELLIPSIS) {
            return (
              <li
                key={`ellipsis-${index}`}
                className={styles.ellipsis}
                aria-hidden="true"
              >
                &#8230;
              </li>
            );
          }

          const pageNumber = pageItem as number;
          const isCurrent = pageNumber === currentPage;

          return (
            <li key={pageNumber}>
              <button
                type="button"
                style={{
                  backgroundColor: isCurrent
                    ? "rgba(205, 205, 205, 0.40)"
                    : "transparent",
                }}
                className={styles.pagination_item}
                onClick={() => onPageChange(pageNumber)}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Go to page ${pageNumber}`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
