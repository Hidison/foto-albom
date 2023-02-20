import {
  SET_FILE,
  SET_FILE_UPLOAD_ERROR,
  SET_IS_UPLOAD_FILE,
  ADD_IMAGE_TO_BASE,
  ADD_IMAGE_TO_BASE_FAILED,
  ADD_IMAGE_TO_BASE_SUCCESS,
  SET_IMAGE_SUCCESS,
} from "../actions/AddCardModal";

const initalStateAddCardModal = {
  file: null,
  fileUploadError: null,
  isUploadFile: false,
};

const initalStateAddImageToBase = {
  addImageToBaseRequest: false,
  addImageToBaseFailed: false,
  addImageToBaseSuccess: false,
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

export const AddImageToBaseReducer = (state = initalStateAddImageToBase, action) => {
  switch (action.type) {
    case ADD_IMAGE_TO_BASE: {
      return {
        ...state,
        addImageToBaseRequest: true,
        addImageToBaseFailed: false,
        addImageToBaseSuccess: false,
      };
    }
    case ADD_IMAGE_TO_BASE_SUCCESS: {
      return {
        ...state,
        addImageToBaseRequest: false,
        addImageToBaseSuccess: true,
      };
    }
    case ADD_IMAGE_TO_BASE_FAILED: {
      return {
        ...state,
        addImageToBaseFailed: true,
        addImageToBaseRequest: false,
        addImageToBaseSuccess: false,
      };
    }
    case SET_IMAGE_SUCCESS: {
      return {
        ...state,
        addImageToBaseSuccess: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
