import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    pageNumber: 1,
  },
  reducers: {
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPageNumber } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
