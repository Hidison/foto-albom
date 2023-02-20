import {
  GET_MODERATED_USERS,
  GET_MODERATED_USERS_FAILED,
  GET_MODERATED_USERS_SUCCESS,
  MODERATE_USER,
  MODERATE_USER_FAILED,
  MODERATE_USER_SUCCESS,
} from "../actions/Moderators";

const initialStateGetModeratedUsers = {
  getModeratedUsersRequest: false,
  getModeratedUsersFailed: false,
  moderatedUsers: [],
  errorMessage: "",
};

const initialStateModerateUser = {
  moderateUserRequest: false,
  moderateUserSuccess: false,
  moderateUserFailed: false,
};

export const getModeratedUsersReducer = (state = initialStateGetModeratedUsers, action) => {
  switch (action.type) {
    case GET_MODERATED_USERS: {
      return {
        ...state,
        getModeratedUsersRequest: true,
        getModeratedUsersFailed: false,
      };
    }
    case GET_MODERATED_USERS_SUCCESS: {
      return {
        ...state,
        getModeratedUsersRequest: false,
        moderatedUsers: action.payload,
      };
    }
    case GET_MODERATED_USERS_FAILED: {
      return {
        ...state,
        getModeratedUsersFailed: true,
        getModeratedUsersRequest: false,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const moderatUserReducer = (state = initialStateModerateUser, action) => {
  switch (action.type) {
    case MODERATE_USER: {
      return {
        ...state,
        moderateUserRequest: true,
        moderateUserSuccess: false,
        moderateUserFailed: false,
      };
    }
    case MODERATE_USER_SUCCESS: {
      return {
        ...state,
        moderateUserRequest: false,
        moderateUserSuccess: true,
      };
    }
    case MODERATE_USER_FAILED: {
      return {
        ...state,
        moderateUserFailed: true,
        moderateUserSuccess: false,
        moderateUserRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
