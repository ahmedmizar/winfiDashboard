import { HtttpPostDefult } from "../httpClient/httpClient";
import * as actionTypes from "../../constants/registerPhoneTypes";
import { alertActions } from "./AlertActions";

export const registerPhoneStart = () => {
  return {
    type: actionTypes.RREGISTER_PHONE_START,
  };
};

export const registarPhoneSuccess = (payload) => {
  return {
    type: actionTypes.RREGISTER_PHONE_SUCCESS,
    payload: payload,
  };
};

export const registerPhoneFail = (error) => {
  return {
    type: actionTypes.RREGISTER_PHONE_FAIL,
    error: error,
  };
};

export const phoneRegistraion = (phone, isVerfied, phone_code_id) => {
  return (dispach) => {
    dispach(registerPhoneStart());
    const phoneData = {
        phone: phone,
        isVerfied: isVerfied,
        phone_code_id: phone_code_id
    };

    HtttpPostDefult("registerPhone", phoneData).then((response) => {
      if (response.status) {
        dispach(registarPhoneSuccess(response)); 
       
        dispach(alertActions.success(response.message));
      } else {
        dispach(registerPhoneFail(response.message));
        dispach(alertActions.error(response.message));
      }
    });
  };
};
