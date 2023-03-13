import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerRequest: false,
    registerFailed: false,
  },
  reducers: {
    register(state) {
      state.registerRequest = true;
      state.registerFailed = false;
    },
    registerSuccess(state, action) {
      state.registerRequest = false;
    },
    registerFailed(state) {
      state.registerFailed = true;
      state.registerRequest = false;
    },
  },
});

const addUserToBaseSlice = createSlice({
  name: "addUserToBase",
  initialState: {
    addUserToBaseRequest: false,
    addUserToBaseFailed: false,
  },
  reducers: {
    addUserToBase(state) {
      state.addUserToBaseRequest = true;
      state.addUserToBaseFailed = false;
    },
    addUserToBaseSuccess(state) {
      state.addUserToBaseRequest = false;
    },
    addUserToBaseFailed(state) {
      state.addUserToBaseFailed = true;
      state.addUserToBaseRequest = false;
    },
  },
});

export const { register, registerSuccess, registerFailed } = registerSlice.actions;
export const { addUserToBase, addUserToBaseSuccess, addUserToBaseFailed } =
  addUserToBaseSlice.actions;

export const registerReducer = registerSlice.reducer;
export const addUserToBaseReducer = addUserToBaseSlice.reducer;
