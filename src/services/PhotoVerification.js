import { createSlice } from "@reduxjs/toolkit";

const getNotVerifyPhotosSlice = createSlice({
  name: "getNotVerifyPhotos",
  initialState: {
    getNotVerifyPhotosRequest: false,
    getNotVerifyPhotosFailed: false,
    notVerifyPhotos: [],
  },
  reducers: {
    getNotVerifyPhotos(state) {
      state.getNotVerifyPhotosRequest = true;
      state.getNotVerifyPhotosFailed = false;
    },
    getNotVerifyPhotosSuccess(state, action) {
      state.getNotVerifyPhotosRequest = false;
      state.notVerifyPhotos = action.payload;
    },
    getNotVerifyPhotosFailed(state) {
      state.getNotVerifyPhotosFailed = true;
      state.getNotVerifyPhotosRequest = false;
    },
  },
});

export const { getNotVerifyPhotos, getNotVerifyPhotosSuccess, getNotVerifyPhotosFailed } =
  getNotVerifyPhotosSlice.actions;

export const getNotVerifyPhotosReducer = getNotVerifyPhotosSlice.reducer;
