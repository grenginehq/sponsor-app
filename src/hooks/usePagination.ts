import { useMemo } from "react";

// Domain constants
const DEFAULT_BOUNDARY_COUNT = 1;
const ACTIVE_PAGE_COUNT = 1;
const ELLIPSIS_SLOT_COUNT = 1;
export const ELLIPSIS = "..." as const;

export type PaginationItem = number | typeof ELLIPSIS;

export interface PaginationHookProps {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  boundaryCount?: number;
}

export function usePagination({
  totalPages,
  currentPage,
  siblingCount = 1,
  boundaryCount = DEFAULT_BOUNDARY_COUNT,
}: PaginationHookProps): PaginationItem[] {
  return useMemo(() => {
    const FIRST_PAGE = 1;
    const LAST_PAGE = totalPages;

    const doubleEllipsisSlots =
      boundaryCount * 2 +
      ELLIPSIS_SLOT_COUNT * 2 +
      ACTIVE_PAGE_COUNT +
      siblingCount * 2;

    if (totalPages <= doubleEllipsisSlots) {
      return Array.from({ length: totalPages }, (_, i) => FIRST_PAGE + i);
    }

    const leftSiblingIndex = Math.max(
      currentPage - siblingCount,
      FIRST_PAGE + boundaryCount,
    );
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      LAST_PAGE - boundaryCount,
    );

    const shouldShowLeftDots =
      leftSiblingIndex > FIRST_PAGE + boundaryCount + ELLIPSIS_SLOT_COUNT - 1;
    const shouldShowRightDots =
      rightSiblingIndex < LAST_PAGE - boundaryCount - ELLIPSIS_SLOT_COUNT + 1;

    const dockedPageCount =
      boundaryCount +
      ELLIPSIS_SLOT_COUNT +
      ACTIVE_PAGE_COUNT +
      siblingCount * 2;

    const createLeftBoundary = () =>
      Array.from({ length: boundaryCount }, (_, i) => FIRST_PAGE + i);

    const createRightBoundary = () =>
      Array.from(
        { length: boundaryCount },
        (_, i) => LAST_PAGE - boundaryCount + 1 + i,
      );

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = Array.from(
        { length: dockedPageCount },
        (_, i) => FIRST_PAGE + i,
      );
      return [...leftRange, ELLIPSIS, ...createRightBoundary()];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = Array.from(
        { length: dockedPageCount },
        (_, i) => LAST_PAGE - dockedPageCount + 1 + i,
      );
      return [...createLeftBoundary(), ELLIPSIS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i,
      );

      return [
        ...createLeftBoundary(),
        ELLIPSIS,
        ...middleRange,
        ELLIPSIS,
        ...createRightBoundary(),
      ];
    }

    return [];
  }, [totalPages, currentPage, siblingCount, boundaryCount]);
}
