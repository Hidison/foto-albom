import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SET_ERRORS } from "./Auth";
export const REGISTER = "REGISTER";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

function registerFailed(dispatch) {
  dispatch({
    type: REGISTER_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      email: "",
      password: "",
      submit: "Ошибка регистрации!",
    },
  });
}

export const register = (email, password) => {
  return function (dispatch) {
    dispatch({
      type: REGISTER,
    });
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user && user.accessToken) {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: user,
          });
        } else {
          registerFailed(dispatch);
        }
      })
      .catch((error) => {
        registerFailed(dispatch);
      });
  };
};
