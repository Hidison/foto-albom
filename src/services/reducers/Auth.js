import { SET_VALUES, SET_ERRORS, SET_VALID, SET_AUTH } from "../actions/Auth";

const initalStateAuth = {
  auth: false,
  values: {
    email: "",
    password: "",
  },
  errors: {
    email: "",
    password: "",
    submit: "",
  },
  valid: {
    email: false,
    password: false,
  },
};

export const AuthReducer = (state = initalStateAuth, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        auth: action.payload,
      };
    }
    case SET_VALUES: {
      return {
        ...state,
        values: action.payload,
      };
    }
    case SET_ERRORS: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    case SET_VALID: {
      return {
        ...state,
        valid: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
