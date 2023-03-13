import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { login, loginFailed, loginSuccess } from "../Login";
import { setErrors } from "../Auth";

function loginFailedAction(dispatch, errorMessage) {
  dispatch(loginFailed());
  dispatch(
    setErrors({
      email: "",
      password: "",
      submit: errorMessage,
    })
  );
}

export const loginAction = (email, password) => {
  return function (dispatch) {
    dispatch(login());
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user && user.accessToken) {
          dispatch(loginSuccess());
        } else {
          loginFailedAction(dispatch);
        }
      })
      .catch((error) => {
        let errorMessage;
        if (error.message.includes("wrong-password")) {
          errorMessage = "Ошибка! Неправильный пароль.";
        } else if (error.message.includes("user-not-found")) {
          errorMessage = "Ошибка! Такой пользователь не зарегестрирован в системе.";
        } else if (error.message.includes("too-many-requests")) {
          errorMessage = "Ошибка! Слишком много неудачных попыток входа, повторите попытку позже.";
        } else {
          errorMessage = "Ошибка авторизации!";
        }
        loginFailedAction(dispatch, errorMessage);
      });
  };
};
