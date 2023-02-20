import {
  SET_MODAL_VISIBLE,
  SET_MODAL_IMG_VISIBLE,
  SET_SELECTED_FOTO,
  SET_IS_FILE_LOADING,
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  LOGOUT,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  GET_PHOTOS,
  GET_PHOTOS_FAILED,
  GET_PHOTOS_SUCCESS,
} from "../actions/App";

const initalStateApp = {
  modalVisible: false,
  modalImgVisible: false,
  selectedFoto: null,
  isFileLoading: false,
};

const initalStateGetUser = {
  getUserRequest: false,
  getUserFailed: false,
  user: null,
};

const initalStateLogout = {
  logoutRequest: false,
  logoutFailed: false,
};

const initialStateGetPhotos = {
  getPhotosRequest: false,
  getPhotosFailed: false,
  photos: [],
  errorMessage: "",
};

export const AppReducer = (state = initalStateApp, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBLE: {
      return {
        ...state,
        modalVisible: action.payload,
      };
    }
    case SET_MODAL_IMG_VISIBLE: {
      return {
        ...state,
        modalImgVisible: action.payload,
      };
    }
    case SET_SELECTED_FOTO: {
      return {
        ...state,
        selectedFoto: action.payload,
      };
    }
    case SET_IS_FILE_LOADING: {
      return {
        ...state,
        isFileLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const getUserReducer = (state = initalStateGetUser, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        user: action.payload,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserFailed: true,
        getUserRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const logoutReducer = (state = initalStateLogout, action) => {
  switch (action.type) {
    case LOGOUT: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
        logoutRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const getPhotosReducer = (state = initialStateGetPhotos, action) => {
  switch (action.type) {
    case GET_PHOTOS: {
      return {
        ...state,
        getPhotosRequest: true,
        getPhotosFailed: false,
      };
    }
    case GET_PHOTOS_SUCCESS: {
      return {
        ...state,
        getPhotosRequest: false,
        photos: action.payload,
        lastVisible: action.lastVisible,
      };
    }
    case GET_PHOTOS_FAILED: {
      return {
        ...state,
        getPhotosFailed: true,
        getPhotosRequest: false,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};