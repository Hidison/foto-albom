import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: null,
    values: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      password: "",
      submit: "",
    },
    valid: {
      email: false,
      password: false,
    },
  },
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload;
    },
    setValues(state, action) {
      state.values = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    setValid(state, action) {
      state.valid = action.payload;
    },
  },
});

export const { setAuth, setValues, setErrors, setValid } = authSlice.actions;

export const authReducer = authSlice.reducer;
