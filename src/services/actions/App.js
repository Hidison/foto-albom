import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SET_AUTH } from "./Auth";

export const SET_MODAL_VISIBLE = "SET_MODAL_VISIBLE";
export const SET_MODAL_IMG_VISIBLE = "SET_MODAL_IMG_VISIBLE";

export const SET_SELECTED_FOTO = "SET_SELECTED_FOTO";
export const SET_IS_FILE_LOADING = "SET_IS_FILE_LOADING";

export const GET_USER = "GET_USER";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const LOGOUT = "LOGOUT";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const closeModal = () => {
  return function (dispatch) {
    dispatch({
      type: SET_MODAL_VISIBLE,
      payload: false,
    });
    dispatch({
      type: SET_MODAL_IMG_VISIBLE,
      payload: false,
    });
  };
};

function getUserFailed(dispatch) {
  dispatch({
    type: GET_USER_FAILED,
  });
}

export const getUser = () => {
  return function (dispatch) {
    dispatch({
      type: GET_USER,
    });
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: user,
        });
      } else {
        getUserFailed(dispatch);
      }
    });
  };
};

function logoutFailed(dispatch) {
  dispatch({
    type: LOGOUT_FAILED,
  });
}

export const logout = () => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT,
    });
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        dispatch({
          type: SET_AUTH,
          payload: false,
        });
        dispatch({
          type: GET_USER_SUCCESS,
          payload: null,
        });
      })
      .catch((error) => {
        logoutFailed(dispatch);
      });
  };
};
