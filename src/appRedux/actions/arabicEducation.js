import { HtttpGetDefult } from "../httpClient/httpClient";
import { alertActions } from "./AlertActions";
import {
  FETCH_ArabicEducation_REQUEST,
  FETCH_ArabicEducation_SUCCESS,
  FETCH_ArabicEducation_FAILURE,
} from "../../constants/lockupTypes";
export const fetchArabicEducationRequest = () => {
  return {
    type: FETCH_ArabicEducation_REQUEST,
  };
};
export const fetchArabicEducationSuccess = (arabicEducation) => {
  return {
    type: FETCH_ArabicEducation_SUCCESS,
    payload: arabicEducation,
  };
};
export const fetchArabicEducationFailure = (error) => {
  return {
    type: FETCH_ArabicEducation_FAILURE,
    payload: error,
  };
};
export const fetchArabicEducation = () => {
  return async (dispatch) => {
    dispatch(fetchArabicEducationRequest);
    await HtttpGetDefult("getLockup").then((response) => {
      if (response.message.length > 0) {
        dispatch(fetchArabicEducationFailure(response.message));
        dispatch(alertActions.error(response.message));
      } else {
        dispatch(fetchArabicEducationSuccess(response.data.arabicEducation));
        console.log(response);
      }
    });
  };
};
