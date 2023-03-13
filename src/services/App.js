import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    modalVisible: false,
    modalImgVisible: false,
    selectedFoto: null,
    isFileLoading: false,
  },
  reducers: {
    setModalVisible(state, action) {
      state.modalVisible = action.payload;
    },
    setModalImgVisible(state, action) {
      state.modalImgVisible = action.payload;
    },
    setSelectedFoto(state, action) {
      state.selectedFoto = action.payload;
    },
    setIsFileLoading(state, action) {
      state.isFileLoading = action.payload;
    },
  },
});

const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    getUserRequest: false,
    getUserFailed: false,
    user: null,
  },
  reducers: {
    getUser(state) {
      state.getUserRequest = true;
      state.getUserFailed = false;
    },
    getUserSuccess(state, action) {
      state.getUserRequest = false;
      state.user = action.payload;
    },
    getUserFailed(state) {
      state.getUserFailed = true;
      state.getUserRequest = false;
    },
  },
});

const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    logoutRequest: false,
    logoutFailed: false,
  },
  reducers: {
    logout(state) {
      state.logoutRequest = true;
      state.logoutFailed = false;
    },
    logoutSuccess(state) {
      state.logoutRequest = false;
    },
    logoutFailed(state) {
      state.logoutFailed = true;
      state.logoutRequest = false;
    },
  },
});

const getPhotosSlice = createSlice({
  name: "getPhotos",
  initialState: {
    getPhotosRequest: false,
    getPhotosFailed: false,
    photos: [],
    errorMessage: "",
  },
  reducers: {
    getPhotos(state) {
      state.getPhotosRequest = true;
      state.getPhotosFailed = false;
    },
    getPhotosSuccess(state, action) {
      state.getPhotosRequest = false;
      state.photos = action.payload;
    },
    getPhotosFailed(state, action) {
      state.getPhotosFailed = true;
      state.getPhotosRequest = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { setModalVisible, setModalImgVisible, setSelectedFoto, setIsFileLoading } =
  appSlice.actions;
export const { getUser, getUserSuccess, getUserFailed } = getUserSlice.actions;
export const { logout, logoutSuccess, logoutFailed } = logoutSlice.actions;
export const { getPhotos, getPhotosSuccess, getPhotosFailed } = getPhotosSlice.actions;

export const appReducer = appSlice.reducer;
export const getUserReducer = getUserSlice.reducer;
export const logoutReducer = logoutSlice.reducer;
export const getPhotosReducer = getPhotosSlice.reducer;
