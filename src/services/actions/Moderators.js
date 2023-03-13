import { moderateUserApi } from "../../utils/utils";
import { setErrors } from "../Auth";
import { moderatUser, moderatUserFailed, moderatUserSuccess } from "../Moderators";

function moderateUserFailedAction(dispatch, errorMessage) {
  dispatch(moderatUserFailed());
  dispatch(
    setErrors({
      email: "",
      password: "",
      submit: errorMessage,
    })
  );
}

export const moderateUserAction = (email) => {
  return function (dispatch) {
    dispatch(moderatUser());
    moderateUserApi(email)
      .then(() => {
        dispatch(moderatUserSuccess());
      })
      .catch((error) => {
        let errorMessage;
        if (error.message.includes("No document to update")) {
          errorMessage = "Ошибка! Такого пользователья нет в системе.";
        } else {
          errorMessage = "Ошибка добавления модератора!";
        }
        moderateUserFailedAction(dispatch, errorMessage);
      });
  };
};
