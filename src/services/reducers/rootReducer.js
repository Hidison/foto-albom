import { combineReducers } from "redux";
import { AppReducer, getUserReducer, logoutReducer } from "./App";
import { AddCardByLinkReducer } from "./AddCardByLink";
import { AddCardModalReducer } from "./AddCardModal";
import { AuthReducer } from "./Auth";
import { registerReducer } from "./Register";
import { loginReducer } from "./Login";

export const rootReducer = combineReducers({
  app: AppReducer,
  addCardByLink: AddCardByLinkReducer,
  addCardModal: AddCardModalReducer,
  auth: AuthReducer,
  register: registerReducer,
  login: loginReducer,
  user: getUserReducer,
  logout: logoutReducer,
});
