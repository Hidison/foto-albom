import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { SET_AUTH } from "./Auth";
import { appFirestore } from "../../firebase";

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

export const GET_PHOTOS = "GET_PHOTOS";
export const GET_PHOTOS_FAILED = "GET_PHOTOS_FAILED";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";

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

function setAuthFalse(dispatch) {
  dispatch({
    type: SET_AUTH,
    payload: false,
  });
}

function getUserFailed(dispatch) {
  dispatch({
    type: GET_USER_FAILED,
  });
  setAuthFalse(dispatch);
}

export const getUser = () => {
  return function (dispatch) {
    dispatch({
      type: GET_USER,
    });
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const currentUserRef = doc(appFirestore, "users", user.email);
        const docSnap = await getDoc(currentUserRef);
        if (docSnap.exists()) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: docSnap.data(),
          });
        } else {
          getUserFailed(dispatch);
          setAuthFalse(dispatch);
        }
      } else {
        getUserFailed(dispatch);
        setAuthFalse(dispatch);
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
