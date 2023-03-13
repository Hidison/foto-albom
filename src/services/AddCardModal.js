import { createSlice } from "@reduxjs/toolkit";

const AddCardModalSlice = createSlice({
  name: "addCardModal",
  initialState: {
    fileUploadError: null,
    isUploadFile: false,
  },
  reducers: {
    setFileUploadError(state, action) {
      state.fileUploadError = action.payload;
    },
    setIsUploadFile(state, action) {
      state.isUploadFile = action.payload;
    },
  },
});

const AddImageToBaseSlice = createSlice({
  name: "addImageToBase",
  initialState: {
    addImageToBaseRequest: false,
    addImageToBaseFailed: false,
    addImageToBaseSuccess: false,
  },
  reducers: {
    addImage(state) {
      state.addImageToBaseRequest = true;
      state.addImageToBaseFailed = false;
      state.addImageToBaseSuccess = false;
    },
    addImageSuccess(state) {
      state.addImageToBaseRequest = false;
      state.addImageToBaseSuccess = true;
    },
    addImageFailed(state) {
      state.addImageToBaseFailed = true;
      state.addImageToBaseRequest = false;
      state.addImageToBaseSuccess = false;
    },
    setImageSuccess(state, action) {
      state.addImageToBaseSuccess = action.payload;
    },
  },
});

export const { setFileUploadError, setIsUploadFile } = AddCardModalSlice.actions;
export const { addImage, addImageSuccess, addImageFailed, setImageSuccess } =
  AddImageToBaseSlice.actions;

export const addCardModalReducer = AddCardModalSlice.reducer;
export const addImageToBaseReducer = AddImageToBaseSlice.reducer;
