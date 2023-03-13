import { createSlice } from "@reduxjs/toolkit";

const getModeratedUsersSlice = createSlice({
  name: "getModeratedUsers",
  initialState: {
    getModeratedUsersRequest: false,
    getModeratedUsersFail: false,
    moderatedUsers: [],
    errorMessage: "",
  },
  reducers: {
    getModeratedUsers(state) { 
      state.getModeratedUsersRequest = true;
      state.getModeratedUsersFail = false;
    },
    getModeratedUsersSuccess(state, action) {
      state.getModeratedUsersRequest = false;
      state.moderatedUsers = action.payload;
    },
    getModeratedUsersFailed(state, action) {
      state.getModeratedUsersFail = true;
      state.getModeratedUsersRequest = false;
      state.errorMessage = action.payload;
    },
  },
});

const moderatUserSlice = createSlice({
  name: "moderatUser",
  initialState: {
    moderateUserRequest: false,
    moderateUserSuccess: false,
    moderateUserFailed: false,
  },
  reducers: {
    moderatUser(state) {
      state.moderateUserRequest = true;
      state.moderateUserSuccess = false;
      state.moderateUserFailed = false;
    },
    moderatUserSuccess(state) {
      state.moderateUserRequest = false;
      state.moderateUserSuccess = true;
    },
    moderatUserFailed(state) {
      state.moderateUserFailed = true;
      state.moderateUserSuccess = false;
      state.moderateUserRequest = false;
    },
  },
});

export const { getModeratedUsers, getModeratedUsersSuccess, getModeratedUsersFailed } =
  getModeratedUsersSlice.actions;
export const { moderatUser, moderatUserSuccess, moderatUserFailed } = moderatUserSlice.actions;

export const getModeratedUsersReducer = getModeratedUsersSlice.reducer;
export const moderateUserReducer = moderatUserSlice.reducer;
