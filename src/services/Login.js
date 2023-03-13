import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginRequest: false,
    loginFailed: false,
  },
  reducers: {
    login(state) {
      state.loginRequest = true;
      state.loginFailed = false;
    },
    loginSuccess(state) {
      state.loginRequest = false;
    },
    loginFailed(state) {
      state.loginFailed = true;
      state.loginRequest = false;
    },
  },
});

export const { login, loginSuccess, loginFailed } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
