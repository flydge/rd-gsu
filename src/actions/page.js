import { CURRENT_PAGINATION, CURRENT_PATHNAME } from "../constants/const";

export const setCurrentPathname = currentPathname => ({
  type: CURRENT_PATHNAME,
  payload: currentPathname,
});

export const setCurrentRatingPagination = currentPagination => ({
  type: CURRENT_PAGINATION,
  payload: currentPagination,
});
