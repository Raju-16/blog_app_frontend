import * as types from "./actionType";

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload,
        isLoading: false,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
