import {
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  ADD_USER_TO_BASE,
  ADD_USER_TO_BASE_FAILED,
  ADD_USER_TO_BASE_SUCCESS,
} from "../actions/Register";

const initialStateRegister = {
  registerRequest: false,
  registerFailed: false,
  data: {},
};

const initialStateAddUserToBase = {
  addUserToBaseRequest: false,
  addUserToBaseFailed: false,
};

export const addUserToBaseReducer = (state = initialStateAddUserToBase, action) => {
  switch (action.type) {
    case ADD_USER_TO_BASE: {
      return {
        ...state,
        addUserToBaseRequest: true,
        addUserToBaseFailed: false,
      };
    }
    case ADD_USER_TO_BASE_SUCCESS: {
      return {
        ...state,
        addUserToBaseRequest: false,
      };
    }
    case ADD_USER_TO_BASE_FAILED: {
      return {
        ...state,
        addUserToBaseFailed: true,
        addUserToBaseRequest: false,
      };
    }
    default: {
      return state;
    }
  }
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
