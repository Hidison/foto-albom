import {
  SET_MODAL_VISIBLE,
  SET_MODAL_IMG_VISIBLE,
  SET_SELECTED_FOTO,
  SET_IS_FILE_LOADING,
} from "../actions/App";

const initalStateApp = {
  modalVisible: false,
  modalImgVisible: false,
  selectedFoto: null,
  isFileLoading: false,
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
