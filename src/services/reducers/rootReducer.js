import { combineReducers } from "redux";
import { AppReducer } from "./App";
import { AddCardByLinkReducer } from "./AddCardByLink";
import { AddCardModalReducer } from "./AddCardModal";

export const rootReducer = combineReducers({
  app: AppReducer,
  addCardByLink: AddCardByLinkReducer,
  addCardModal: AddCardModalReducer,
});
