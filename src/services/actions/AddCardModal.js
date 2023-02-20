import { addImageToBaseApi } from "../../utils/utils";

export const SET_FILE = "SET_FILE";
export const SET_FILE_UPLOAD_ERROR = "SET_FILE_UPLOAD_ERROR";
export const SET_IS_UPLOAD_FILE = "SET_IS_UPLOAD_FILE";

export const SET_IMAGE_SUCCESS = "SET_IMAGE_SUCCESS";
export const ADD_IMAGE_TO_BASE = "ADD_IMAGE_TO_BASE";
export const ADD_IMAGE_TO_BASE_FAILED = "ADD_IMAGE_TO_BASE_FAILED";
export const ADD_IMAGE_TO_BASE_SUCCESS = "ADD_IMAGE_TO_BASE_SUCCESS";

function addImageToBaseFailed(dispatch) {
  dispatch({
    type: ADD_IMAGE_TO_BASE_FAILED,
  });
}

export const addImageToBase = (url, id, email) => {
  return function (dispatch) {
    dispatch({
      type: ADD_IMAGE_TO_BASE,
    });
    addImageToBaseApi(url, id, email)
      .then(() => {
        dispatch({
          type: ADD_IMAGE_TO_BASE_SUCCESS,
        });
      })
      .catch((error) => {
        addImageToBaseFailed(dispatch);
      });
  };
};
