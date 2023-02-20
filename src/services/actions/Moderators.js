import { moderateUserApi } from "../../utils/utils";
import { SET_ERRORS } from "./Auth";

export const GET_MODERATED_USERS = "GET_MODERATED_USERS";
export const GET_MODERATED_USERS_FAILED = "GET_MODERATED_USERS_FAILED";
export const GET_MODERATED_USERS_SUCCESS = "GET_MODERATED_USERS_SUCCESS";

export const MODERATE_USER = "MODERATE_USER";
export const MODERATE_USER_FAILED = "MODERATE_USER_FAILED";
export const MODERATE_USER_SUCCESS = "MODERATE_USER_SUCCESS";

function moderateUserFailed(dispatch, errorMessage) {
  dispatch({
    type: MODERATE_USER_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      email: "",
      password: "",
      submit: errorMessage,
    },
  });
}

export const moderateUser = (email) => {
  return function (dispatch) {
    dispatch({
      type: MODERATE_USER,
    });
    moderateUserApi(email)
      .then(() => {
        dispatch({
          type: MODERATE_USER_SUCCESS,
        });
      })
      .catch((error) => {
        let errorMessage;
        if (error.message.includes("No document to update")) {
          errorMessage = "Ошибка! Такого пользователья нет в системе.";
        } else {
          errorMessage = "Ошибка добавления модератора!";
        }
        moderateUserFailed(dispatch, errorMessage);
      });
  };
};
