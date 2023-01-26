import { SET_FILE, SET_FILE_UPLOAD_ERROR, SET_IS_UPLOAD_FILE } from "../actions/AddCardModal";

const initalStateAddCardModal = {
  file: null,
  fileUploadError: null,
  isUploadFile: false,
};

export const AddCardModalReducer = (state = initalStateAddCardModal, action) => {
  switch (action.type) {
    case SET_FILE: {
      return {
        ...state,
        file: action.payload,
      };
    }
    case SET_FILE_UPLOAD_ERROR: {
      return {
        ...state,
        fileUploadError: action.payload,
      };
    }
    case SET_IS_UPLOAD_FILE: {
      return {
        ...state,
        isUploadFile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
