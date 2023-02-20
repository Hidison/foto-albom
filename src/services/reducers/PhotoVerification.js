import {
  GET_NOT_VERIFY_PHOTOS,
  GET_NOT_VERIFY_PHOTOS_FAILED,
  GET_NOT_VERIFY_PHOTOS_SUCCESS,
} from "../actions/PhotoVerification";

const initialStateGetNotVerifyPhotos = {
  getNotVerifyPhotosRequest: false,
  getNotVerifyPhotosFailed: false,
  notVerifyPhotos: [],
};

export const getNotVerifyPhotosReducer = (state = initialStateGetNotVerifyPhotos, action) => {
  switch (action.type) {
    case GET_NOT_VERIFY_PHOTOS: {
      return {
        ...state,
        getNotVerifyPhotosRequest: true,
        getNotVerifyPhotosFailed: false,
      };
    }
    case GET_NOT_VERIFY_PHOTOS_SUCCESS: {
      return {
        ...state,
        getNotVerifyPhotosRequest: false,
        notVerifyPhotos: action.payload,
      };
    }
    case GET_NOT_VERIFY_PHOTOS_FAILED: {
      return {
        ...state,
        getNotVerifyPhotosFailed: true,
        getNotVerifyPhotosRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
