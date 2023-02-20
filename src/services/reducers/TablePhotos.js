import {
  DEL_IMAGE,
  DEL_IMAGE_FAILED,
  DEL_IMAGE_SUCCESS,
  LIKE_IMAGE,
  LIKE_IMAGE_FAILED,
  LIKE_IMAGE_SUCCESS,
  DIS_LIKE_IMAGE,
  DIS_LIKE_IMAGE_FAILED,
  DIS_LIKE_IMAGE_SUCCESS,
  VERIFY_IMAGE,
  VERIFY_IMAGE_FAILED,
  VERIFY_IMAGE_SUCCESS,
} from "../actions/TablePhotos";

const initialStateDelImage = {
  delImageRequest: false,
  delImageFailed: false,
};

const initialStateLikeImage = {
  likeImageRequest: false,
  likeImageFailed: false,
};

const initialStateDisLikeImage = {
  disLikeImageRequest: false,
  disLikeImageFailed: false,
};

const initialStateVerifyImage = {
  verifyImageRequest: false,
  verifyImageFailed: false,
};

export const delImageReducer = (state = initialStateDelImage, action) => {
  switch (action.type) {
    case DEL_IMAGE: {
      return {
        ...state,
        delImageRequest: true,
        delImageFailed: false,
      };
    }
    case DEL_IMAGE_SUCCESS: {
      return {
        ...state,
        delImageRequest: false,
      };
    }
    case DEL_IMAGE_FAILED: {
      return {
        ...state,
        delImageFailed: true,
        delImageRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const likeImageReducer = (state = initialStateLikeImage, action) => {
  switch (action.type) {
    case LIKE_IMAGE: {
      return {
        ...state,
        likeImageRequest: true,
        likeImageFailed: false,
      };
    }
    case LIKE_IMAGE_SUCCESS: {
      return {
        ...state,
        likeImageRequest: false,
      };
    }
    case LIKE_IMAGE_FAILED: {
      return {
        ...state,
        likeImageFailed: true,
        likeImageRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const disLikeImageReducer = (state = initialStateDisLikeImage, action) => {
  switch (action.type) {
    case DIS_LIKE_IMAGE: {
      return {
        ...state,
        disLikeImageRequest: true,
        disLikeImageFailed: false,
      };
    }
    case DIS_LIKE_IMAGE_SUCCESS: {
      return {
        ...state,
        disLikeImageRequest: false,
      };
    }
    case DIS_LIKE_IMAGE_FAILED: {
      return {
        ...state,
        disLikeImageFailed: true,
        disLikeImageRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const verifyImageReducer = (state = initialStateVerifyImage, action) => {
  switch (action.type) {
    case VERIFY_IMAGE: {
      return {
        ...state,
        verifyImageRequest: true,
        verifyImageFailed: false,
      };
    }
    case VERIFY_IMAGE_SUCCESS: {
      return {
        ...state,
        verifyImageRequest: false,
      };
    }
    case VERIFY_IMAGE_FAILED: {
      return {
        ...state,
        verifyImageFailed: true,
        verifyImageRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
