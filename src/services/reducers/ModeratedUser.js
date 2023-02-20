import {
  UN_MODERATE_USER,
  UN_MODERATE_USER_FAILED,
  UN_MODERATE_USER_SUCCESS,
} from "../actions/ModeratedUser";

const initialStateUnModerateUser = {
  unModerateUserRequest: false,
  unModerateUserFailed: false,
};

export const unModerateUserReducer = (state = initialStateUnModerateUser, action) => {
  switch (action.type) {
    case UN_MODERATE_USER: {
      return {
        ...state,
        unModerateUserRequest: true,
        unModerateUserFailed: false,
      };
    }
    case UN_MODERATE_USER_SUCCESS: {
      return {
        ...state,
        unModerateUserRequest: false,
      };
    }
    case UN_MODERATE_USER_FAILED: {
      return {
        ...state,
        unModerateUserFailed: true,
        unModerateUserRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
