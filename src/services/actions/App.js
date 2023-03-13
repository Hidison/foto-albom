import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { appFirestore } from "../../firebase";
import {
  getUser,
  getUserFailed,
  getUserSuccess,
  logout,
  logoutFailed,
  logoutSuccess,
  setModalImgVisible,
  setModalVisible,
} from "../App";
import { setAuth } from "../Auth";

export const closeModal = () => {
  return function (dispatch) {
    dispatch(setModalVisible());
    dispatch(setModalImgVisible());
  };
};

function setAuthFalse(dispatch) {
  dispatch(setAuth(false));
}

function getUserFailedAction(dispatch) {
  dispatch(getUserFailed());
  setAuthFalse(dispatch);
}

export const getUserAction = () => {
  return function (dispatch) {
    dispatch(getUser());
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const currentUserRef = doc(appFirestore, "users", user.email);
        const docSnap = await getDoc(currentUserRef);
        if (docSnap.exists()) {
          dispatch(getUserSuccess(docSnap.data()));
        } else {
          getUserFailedAction(dispatch);
          setAuthFalse(dispatch);
        }
      } else {
        getUserFailedAction(dispatch);
        setAuthFalse(dispatch);
      }
    });
  };
};

function logoutFailedAction(dispatch) {
  dispatch(logoutFailed());
}

export const logoutAction = () => {
  return function (dispatch) {
    dispatch(logout());
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logoutSuccess());
        setAuthFalse(dispatch);
        dispatch(getUserSuccess(null));
      })
      .catch((error) => {
        logoutFailedAction(dispatch);
      });
  };
};
