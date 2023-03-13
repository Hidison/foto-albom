import { createSlice } from "@reduxjs/toolkit";

const delImageSlice = createSlice({
  name: "delImage",
  initialState: {
    delImageRequest: false,
    delImageFailed: false,
  },
  reducers: {
    delImage(state) {
      state.delImageRequest = true;
      state.delImageFailed = false;
    },
    delImageSuccess(state) {
      state.delImageRequest = false;
    },
    delImageFailed(state) {
      state.delImageFailed = true;
      state.delImageRequest = false;
    },
  },
});

const likeImageSlice = createSlice({
  name: "likeImage",
  initialState: {
    likeImageRequest: false,
    likeImageFailed: false,
  },
  reducers: {
    likeImage(state) {
      state.likeImageRequest = true;
      state.likeImageFailed = false;
    },
    likeImageSuccess(state) {
      state.likeImageRequest = false;
    },
    likeImageFailed(state) {
      state.likeImageFailed = true;
      state.likeImageRequest = false;
    },
  },
});

const disLikeImageSlice = createSlice({
  name: "disLikeImage",
  initialState: {
    disLikeImageRequest: false,
    disLikeImageFailed: false,
  },
  reducers: {
    disLikeImage(state) {
      state.disLikeImageRequest = true;
      state.disLikeImageFailed = false;
    },
    disLikeImageSuccess(state) {
      state.disLikeImageRequest = false;
    },
    disLikeImageFailed(state) {
      state.disLikeImageFailed = true;
      state.disLikeImageRequest = false;
    },
  },
});

const verifyImageSlice = createSlice({
  name: "verifyImage",
  initialState: {
    verifyImageRequest: false,
    verifyImageFailed: false,
  },
  reducers: {
    verifyImage(state) {
      state.verifyImageRequest = true;
      state.verifyImageFailed = false;
    },
    verifyImageSuccess(state) {
      state.verifyImageRequest = false;
    },
    verifyImageFailed(state) {
      state.verifyImageFailed = true;
      state.verifyImageRequest = false;
    },
  },
});

export const { delImage, delImageSuccess, delImageFailed } = delImageSlice.actions;
export const { likeImage, likeImageSuccess, likeImageFailed } = likeImageSlice.actions;
export const { disLikeImage, disLikeImageSuccess, disLikeImageFailed } = disLikeImageSlice.actions;
export const { verifyImage, verifyImageSuccess, verifyImageFailed } = verifyImageSlice.actions;

export const delImageReducer = delImageSlice.reducer;
export const likeImageReducer = likeImageSlice.reducer;
export const disLikeImageReducer = disLikeImageSlice.reducer;
export const verifyImageReducer = verifyImageSlice.reducer;
