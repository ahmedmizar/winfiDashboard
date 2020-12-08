import { HtttpPostDefult } from "../httpClient/httpClient";
import * as actionTypes from "../../constants/verifyPhoneTypes";
import { alertActions } from "./AlertActions";

export const verifyPhoneStart = () => {
  return {
    type: actionTypes.VERIFY_PHONE_START,
  };
};

export const verifyPhoneSuccess = (payload) => {
  return {
    type: actionTypes.VERIFY_PHONE_SUCCESS,
    payload: payload,
  };
};

export const verifyPhoneFail = (error) => {
  return {
    type: actionTypes.VERIFY_PHONE_FAIL,
    error: error,
  };
};

export const verifyPhone = (verify_phone_code, phone_code_id, phone) => {
  return (dispach) => {
    dispach(verifyPhoneStart());
    const verifyData = {
      verify_phone_code: verify_phone_code,
      phone_code_id: phone_code_id,
      phone: phone,
    };
   

   HtttpPostDefult("verifyPhone", verifyData).then((response) => {
      if (response.status) {
        dispach(verifyPhoneSuccess(response));
        dispach(alertActions.success(response.message));
      } else {
        dispach(verifyPhoneFail(response.message));
        dispach(alertActions.error(response.message));
      }
    });
  };
};
