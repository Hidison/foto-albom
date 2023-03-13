import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUserToBaseApi } from "../../utils/utils";
import { setErrors } from "../Auth";
import {
  addUserToBase,
  addUserToBaseFailed,
  addUserToBaseSuccess,
  register,
  registerFailed,
  registerSuccess,
} from "../Register";

function registerFailedAction(dispatch, errorMessage) {
  dispatch(registerFailed());
  dispatch(
    setErrors({
      submit: errorMessage,
    })
  );
}

function addUserToBaseFailedAction(dispatch) {
  dispatch(addUserToBaseFailed());
  dispatch(
    setErrors({
      submit: "Ошибка регистрации!",
    })
  );
}

const addUserToBaseAction = (email, id) => {
  return function (dispatch) {
    dispatch(addUserToBase());
    addUserToBaseApi(email, id)
      .then(() => {
        dispatch(addUserToBaseSuccess());
      })
      .catch((error) => {
        addUserToBaseFailedAction(dispatch);
      });
  };
};

export const registerAction = (email, password) => {
  return function (dispatch) {
    dispatch(register());
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user && user.accessToken) {
          dispatch(registerSuccess());
          dispatch(addUserToBaseAction(email, user.uid));
        } else {
          registerFailedAction(dispatch);
        }
      })
      .catch((error) => {
        let errorMessage;
        if (error.message.includes("email-already-in-use")) {
          errorMessage = "Ошибка! Пользователь с данной почтой уже зарегестрирован в системе.";
        } else {
          errorMessage = "Ошибка регистрации!";
        }
        registerFailedAction(dispatch, errorMessage);
      });
  };
};
