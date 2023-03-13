import { unModerateUserApi } from "../../utils/utils";
import { setErrors } from "../Auth";
import { unModerateUser, unModerateUserFailed, unModerateUserSuccess } from "../ModeratedUser";

function unModerateUserFailedAction(dispatch) {
  dispatch(unModerateUserFailed());
  dispatch(
    setErrors({
      submit: "Ошибка удаления модератора!",
    })
  );
}

export const unModerateUserAction = (email) => {
  return function (dispatch) {
    dispatch(unModerateUser());
    unModerateUserApi(email)
      .then(() => {
        dispatch(unModerateUserSuccess());
      })
      .catch((error) => {
        unModerateUserFailedAction(dispatch);
      });
  };
};
