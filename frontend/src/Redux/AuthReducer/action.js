import * as types from "./actionType";
import axios from "axios";

export const registerUser = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  return axios
    .post("https://lime-strange-boa.cyclic.app/signup", payload)
    .then((res) => {
      dispatch({ type: types.REGISTER_USER_SUCCESS });
      return types.REGISTER_USER_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_USER_FAILURE });
      return types.REGISTER_USER_FAILURE;
    });
};

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });
  return axios
    .post("https://lime-strange-boa.cyclic.app/login", payload)
    .then((res) => {
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data });
      return types.LOGIN_USER_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_USER_FAILURE });
      return types.LOGIN_USER_FAILURE;
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: types.USER_LOGOUT });
  return types.USER_LOGOUT;
};
