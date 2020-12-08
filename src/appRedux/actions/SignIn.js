import { HtttpPostDefult } from "../httpClient/httpClient";
import * as actionTypes from "../../constants/signInTypes";
import { alertActions } from "./AlertActions";
export const signInStart = () => {
  return {
    type: actionTypes.SIGNIN_START,
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const checkAuth = () => {
  return {
    type: actionTypes.CHECK_AUTH,
  };
};

export const signInSuccess = (token) => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    token: token,
  };
};
export const signInFail = (error) => {
  return {
    type: actionTypes.SIGNIN_FAIL,
    error: error,
  };
};

export const signIn = (userdata) => {
  return (dispach) => {
    dispach(signInStart());
    const signInData = userdata;
    HtttpPostDefult("login", signInData).then((response) => {
      if (response.message.length > 0) {
        dispach(signInFail(response.message));
        dispach(alertActions.error(response.message));
      } else {
        dispach(signInSuccess(response.data.token));
      }
    });
  };
};
