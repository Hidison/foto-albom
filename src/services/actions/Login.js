import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SET_ERRORS } from "./Auth";
export const LOGIN = "LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

function loginFailed(dispatch, errorMessage) {
  dispatch({
    type: LOGIN_FAILED,
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

export const login = (email, password) => {
  return function (dispatch) {
    dispatch({
      type: LOGIN,
    });
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user && user.accessToken) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
          });
        } else {
          loginFailed(dispatch);
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
        loginFailed(dispatch, errorMessage);
      });
  };
};
