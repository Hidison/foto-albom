import { combineReducers } from "redux";

import { addCardByLinkReducer } from "./AddCardByLink";
import { addCardModalReducer, addImageToBaseReducer } from "./AddCardModal";
import { appReducer, getPhotosReducer, getUserReducer, logoutReducer } from "./App";
import { authReducer } from "./Auth";
import { loginReducer } from "./Login";
import { unModerateUserReducer } from "./ModeratedUser";
import { getModeratedUsersReducer, moderateUserReducer } from "./Moderators";
import { paginationReducer } from "./Pagination";
import { getNotVerifyPhotosReducer } from "./PhotoVerification";
import { addUserToBaseReducer, registerReducer } from "./Register";
import {
  delImageReducer,
  disLikeImageReducer,
  likeImageReducer,
  verifyImageReducer,
} from "./TablePhotos";

export const rootReducer = combineReducers({
  addCardByLink: addCardByLinkReducer,
  addCardModal: addCardModalReducer,
  addImageToBase: addImageToBaseReducer,
  app: appReducer,
  user: getUserReducer,
  logout: logoutReducer,
  getPhotos: getPhotosReducer,
  auth: authReducer,
  login: loginReducer,
  unModerateUser: unModerateUserReducer,
  getModeratedUsers: getModeratedUsersReducer,
  moderateUser: moderateUserReducer,
  pagination: paginationReducer,
  getNotVerifyPhotos: getNotVerifyPhotosReducer,
  register: registerReducer,
  addUserToBase: addUserToBaseReducer,
  delImage: delImageReducer,
  likeImage: likeImageReducer,
  disLikeImage: disLikeImageReducer,
  verifyImage: verifyImageReducer,
});
