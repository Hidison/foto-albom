import { unModerateUserApi } from "../../utils/utils";
import { SET_ERRORS } from "./Auth";

export const UN_MODERATE_USER = "UN_MODERATE_USER";
export const UN_MODERATE_USER_FAILED = "UN_MODERATE_USER_FAILED";
export const UN_MODERATE_USER_SUCCESS = "UN_MODERATE_USER_SUCCESS";

function unModerateUserFailed(dispatch) {
  dispatch({
    type: UN_MODERATE_USER_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      submit: "Ошибка удаления модератора!",
    },
  });
}

export const unModerateUser = (email) => {
  return function (dispatch) {
    dispatch({
      type: UN_MODERATE_USER,
    });
    unModerateUserApi(email)
      .then(() => {
        dispatch({
          type: UN_MODERATE_USER_SUCCESS,
        });
      })
      .catch((error) => {
        unModerateUserFailed(dispatch);
      });
  };
};
