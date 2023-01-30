import { REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from "../actions/Register";

const initialStateRegister = {
  registerRequest: false,
  registerFailed: false,
  data: {},
};

export const registerReducer = (state = initialStateRegister, action) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        data: action.payload,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
