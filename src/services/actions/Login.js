import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SET_ERRORS } from "./Auth";
export const LOGIN = "LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

function loginFailed(dispatch) {
  dispatch({
    type: LOGIN_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      email: "",
      password: "",
      submit: "Ошибка авторизации!",
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
        loginFailed(dispatch);
      });
  };
};
