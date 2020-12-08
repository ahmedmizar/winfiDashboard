import { HtttpPostDefult } from "../httpClient/httpClient";
import * as actionTypes from "../../constants/personalDataTypes";
import { alertActions } from "./AlertActions";
export const personalDataStart = () => {
  return {
    type: actionTypes.PERSONALDATA_START,
  };
};

export const personalDataSuccess = (userData) => {
  return {
    type: actionTypes.PERSONALDATA_SUCCESS,
    userData: userData,
  };
};
export const personalDataFail = (error) => {
  return {
    type: actionTypes.PERSONALDATA_FAIL,
    error: error,
  };
};

export const questionair = (userData) => {
  return (dispach) => {
    dispach(personalDataStart());
    const data = userData;

    HtttpPostDefult("personalData", data).then((response) => {
      if (response.message.length > 0) {
        dispach(personalDataFail(response.message));
        dispach(alertActions.error(response.message));
      } else {
        dispach(personalDataSuccess(response.data));
      }
    });
  };
};
