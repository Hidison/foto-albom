import { combineReducers } from "redux";
import { AppReducer, getPhotosReducer, getUserReducer, logoutReducer } from "./App";
import { AddCardByLinkReducer } from "./AddCardByLink";
import { AddCardModalReducer, AddImageToBaseReducer } from "./AddCardModal";
import { AuthReducer } from "./Auth";
import { addUserToBaseReducer, registerReducer } from "./Register";
import { loginReducer } from "./Login";
import { getModeratedUsersReducer, moderatUserReducer } from "./Moderators";
import {
  delImageReducer,
  disLikeImageReducer,
  likeImageReducer,
  verifyImageReducer,
} from "./TablePhotos";
import { unModerateUserReducer } from "./ModeratedUser";
import { getNotVerifyPhotosReducer } from "./PhotoVerification";
import { PaginationReducer } from "./Pagination";

export const rootReducer = combineReducers({
  app: AppReducer,
  addCardByLink: AddCardByLinkReducer,
  addCardModal: AddCardModalReducer,
  auth: AuthReducer,
  addUserToBase: addUserToBaseReducer,
  register: registerReducer,
  login: loginReducer,
  user: getUserReducer,
  logout: logoutReducer,
  getModeratedUsers: getModeratedUsersReducer,
  moderateUser: moderatUserReducer,
  getPhotos: getPhotosReducer,
  getNotVerifyPhotos: getNotVerifyPhotosReducer,
  addImageToBase: AddImageToBaseReducer,
  delImage: delImageReducer,
  likeImage: likeImageReducer,
  disLikeImage: disLikeImageReducer,
  verifyImage: verifyImageReducer,
  unModerateUser: unModerateUserReducer,
  Pagination: PaginationReducer,
});
