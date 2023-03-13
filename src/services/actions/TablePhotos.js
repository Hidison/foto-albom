import { delImageApi, disLikeImageApi, likeImageApi, verifyImageApi } from "../../utils/utils";
import { setErrors } from "../Auth";
import {
  delImage,
  delImageFailed,
  delImageSuccess,
  disLikeImage,
  disLikeImageFailed,
  disLikeImageSuccess,
  likeImage,
  likeImageFailed,
  likeImageSuccess,
  verifyImage,
  verifyImageFailed,
  verifyImageSuccess,
} from "../TablePhotos";

function delImageFailedAction(dispatch) {
  dispatch(delImageFailed());
  dispatch(
    setErrors({
      submit: "Ошибка удаления картинки",
    })
  );
}

function likeImageFailedAction(dispatch) {
  dispatch(likeImageFailed());
  dispatch(
    setErrors({
      submit: "Ошибка!",
    })
  );
}

function disLikeImageFailedAction(dispatch) {
  dispatch(disLikeImageFailed());
  dispatch(
    setErrors({
      submit: "Ошибка!",
    })
  );
}

function verifyImageFailedAction(dispatch) {
  dispatch(verifyImageFailed());
  dispatch(
    setErrors({
      submit: "Ошибка верификации картинки!",
    })
  );
}

export const delImageAction = (id) => {
  return function (dispatch) {
    dispatch(delImage());
    delImageApi(id)
      .then(() => {
        dispatch(delImageSuccess());
      })
      .catch((error) => {
        delImageFailedAction(dispatch);
      });
  };
};

export const likeImageAction = (id, owner) => {
  return function (dispatch) {
    dispatch(likeImage());
    likeImageApi(id, owner)
      .then(() => {
        dispatch(likeImageSuccess());
      })
      .catch((error) => {
        likeImageFailedAction(dispatch);
      });
  };
};

export const disLikeImageAction = (id, owner) => {
  return function (dispatch) {
    dispatch(disLikeImage());
    disLikeImageApi(id, owner)
      .then(() => {
        dispatch(disLikeImageSuccess());
      })
      .catch((error) => {
        disLikeImageFailedAction(dispatch);
      });
  };
};

export const verifyImageAction = (id) => {
  return function (dispatch) {
    dispatch(verifyImage());
    verifyImageApi(id)
      .then(() => {
        dispatch(verifyImageSuccess());
      })
      .catch((error) => {
        verifyImageFailedAction(dispatch);
      });
  };
};
