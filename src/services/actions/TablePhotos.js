import { delImageApi, disLikeImageApi, likeImageApi, verifyImageApi } from "../../utils/utils";
import { SET_ERRORS } from "./Auth";

export const DEL_IMAGE = "DEL_IMAGE";
export const DEL_IMAGE_FAILED = "DEL_IMAGE_FAILED";
export const DEL_IMAGE_SUCCESS = "DEL_IMAGE_SUCCESS";

export const LIKE_IMAGE = "LIKE_IMAGE";
export const LIKE_IMAGE_FAILED = "LIKE_IMAGE_FAILED";
export const LIKE_IMAGE_SUCCESS = "LIKE_IMAGE_SUCCESS";

export const DIS_LIKE_IMAGE = "DIS_LIKE_IMAGE";
export const DIS_LIKE_IMAGE_FAILED = "DIS_LIKE_IMAGE_FAILED";
export const DIS_LIKE_IMAGE_SUCCESS = "DIS_LIKE_IMAGE_SUCCESS";

export const VERIFY_IMAGE = "VERIFY_IMAGE";
export const VERIFY_IMAGE_FAILED = "VERIFY_IMAGE_FAILED";
export const VERIFY_IMAGE_SUCCESS = "VERIFY_IMAGE_SUCCESS";

function delImageFailed(dispatch) {
  dispatch({
    type: DEL_IMAGE_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      submit: "Ошибка удаления картинки",
    },
  });
}

function likeImageFailed(dispatch) {
  dispatch({
    type: LIKE_IMAGE_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      submit: "Ошибка!",
    },
  });
}

function disLikeImageFailed(dispatch) {
  dispatch({
    type: DIS_LIKE_IMAGE_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      submit: "Ошибка!",
    },
  });
}

function verifyImageFailed(dispatch) {
  dispatch({
    type: VERIFY_IMAGE_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      submit: "Ошибка верификации картинки!",
    },
  });
}

export const delImage = (id) => {
  return function (dispatch) {
    dispatch({
      type: DEL_IMAGE,
    });
    delImageApi(id)
      .then(() => {
        dispatch({
          type: DEL_IMAGE_SUCCESS,
        });
      })
      .catch((error) => {
        delImageFailed(dispatch);
      });
  };
};

export const likeImage = (id, owner) => {
  return function (dispatch) {
    dispatch({
      type: LIKE_IMAGE,
    });
    likeImageApi(id, owner)
      .then(() => {
        dispatch({
          type: LIKE_IMAGE_SUCCESS,
        });
      })
      .catch((error) => {
        likeImageFailed(dispatch);
      });
  };
};

export const disLikeImage = (id, owner) => {
  return function (dispatch) {
    dispatch({
      type: DIS_LIKE_IMAGE,
    });
    disLikeImageApi(id, owner)
      .then(() => {
        dispatch({
          type: DIS_LIKE_IMAGE_SUCCESS,
        });
      })
      .catch((error) => {
        disLikeImageFailed(dispatch);
      });
  };
};

export const verifyImage = (id) => {
  return function (dispatch) {
    dispatch({
      type: VERIFY_IMAGE,
    });
    verifyImageApi(id)
      .then(() => {
        dispatch({
          type: VERIFY_IMAGE_SUCCESS,
        });
      })
      .catch((error) => {
        verifyImageFailed(dispatch);
      });
  };
};
