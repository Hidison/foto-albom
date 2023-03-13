import { createSlice } from "@reduxjs/toolkit";

const addCardByLinkSlice = createSlice({
  name: "addCardByLink",
  initialState: {
    value: "",
    error: "",
  },
  reducers: {
    addCardByLinkValue(state, action) {
      state.value = action.payload;
    },
    addCardByLinkError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addCardByLinkValue, addCardByLinkError } = addCardByLinkSlice.actions;

export const addCardByLinkReducer = addCardByLinkSlice.reducer;
