import { SET_PAGE_NUMBER } from "../actions/Pagination";

const initalStatePagination = {
  pageNumber: 1,
};

export const PaginationReducer = (state = initalStatePagination, action) => {
  switch (action.type) {
    case SET_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
