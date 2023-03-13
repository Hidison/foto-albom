import { createSlice } from "@reduxjs/toolkit";

const unModerateUserSlice = createSlice({
  name: "unModerateUser",
  initialState: {
    unModerateUserRequest: false,
    unModerateUserFailed: false,
  },
  reducers: {
    unModerateUser(state) {
      state.unModerateUserRequest = true;
      state.unModerateUserFailed = false;
    },
    unModerateUserSuccess(state) {
      state.unModerateUserRequest = false;
    },
    unModerateUserFailed(state) {
      state.unModerateUserFailed = true;
      state.unModerateUserRequest = false;
    },
  },
});

export const { unModerateUser, unModerateUserSuccess, unModerateUserFailed } =
  unModerateUserSlice.actions;

export const unModerateUserReducer = unModerateUserSlice.reducer;
