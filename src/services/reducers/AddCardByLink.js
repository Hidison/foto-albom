import { SET_ADD_CARD_BY_LINK_VALUE, SET_ADD_CARD_BY_LINK_ERROR } from "../actions/AddCardByLink";

const initalStateAddCardByLink = {
  value: "",
  error: "",
};

export const AddCardByLinkReducer = (state = initalStateAddCardByLink, action) => {
  switch (action.type) {
    case SET_ADD_CARD_BY_LINK_VALUE: {
      return {
        ...state,
        value: action.payload,
      };
    }
    case SET_ADD_CARD_BY_LINK_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
