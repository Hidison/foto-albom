import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../actions/Login";

const initialStateLogin = {
  loginRequest: false,
  loginFailed: false,
  user: {},
};

export const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        user: action.payload,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
