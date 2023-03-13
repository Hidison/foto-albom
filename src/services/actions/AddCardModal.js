import { addImageToBaseApi } from "../../utils/utils";
import { addImage, addImageFailed, addImageSuccess } from "../AddCardModal";

function addImageToBaseFailed(dispatch) {
  dispatch(addImageFailed());
}

export const addImageToBase = (url, id, email) => {
  return function (dispatch) {
    dispatch(addImage());
    addImageToBaseApi(url, id, email)
      .then(() => {
        dispatch(addImageSuccess());
      })
      .catch((error) => {
        addImageToBaseFailed(dispatch);
      });
  };
};
