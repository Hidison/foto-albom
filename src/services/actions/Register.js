import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SET_ERRORS } from "./Auth";
import { addUserToBaseApi } from "../../utils/utils";

export const REGISTER = "REGISTER";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const ADD_USER_TO_BASE = "ADD_USER_TO_BASE";
export const ADD_USER_TO_BASE_FAILED = "ADD_USER_TO_BASE_FAILED";
export const ADD_USER_TO_BASE_SUCCESS = "ADD_USER_TO_BASE_SUCCESS";

function registerFailed(dispatch, errorMessage) {
  dispatch({
    type: REGISTER_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      submit: errorMessage,
    },
  });
}

function addUserToBaseFailed(dispatch) {
  dispatch({
    type: ADD_USER_TO_BASE_FAILED,
  });
  dispatch({
    type: SET_ERRORS,
    payload: {
      submit: "Ошибка регистрации!",
    },
  });
}

const addUserToBase = (email, id) => {
  return function (dispatch) {
    dispatch({
      type: ADD_USER_TO_BASE,
    });
    addUserToBaseApi(email, id)
      .then(() => {
        dispatch({
          type: ADD_USER_TO_BASE_SUCCESS,
        });
      })
      .catch((error) => {
        addUserToBaseFailed(dispatch);
      });
  };
};

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
          dispatch(addUserToBase(email, user.uid));
        } else {
          registerFailed(dispatch);
        }
      })
      .catch((error) => {
        let errorMessage;
        if (error.message.includes("email-already-in-use")) {
          errorMessage = "Ошибка! Пользователь с данной почтой уже зарегестрирован в системе.";
        } else {
          errorMessage = "Ошибка регистрации!";
        }
        registerFailed(dispatch, errorMessage);
      });
  };
};
