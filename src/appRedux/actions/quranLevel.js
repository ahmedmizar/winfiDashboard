import { HtttpGetDefult } from "../httpClient/httpClient";
import { alertActions } from "./AlertActions";
import {
  FETCH_QURANLEVEL_REQUEST,
  FETCH_QURANLEVEL_SUCCESS,
  FETCH_QURANLEVEL_FAILURE
} from "../../constants/lockupTypes";;
export const fetchArabicEducationRequest = () => {
  return {
    type: FETCH_QURANLEVEL_REQUEST,
  };
};
export const fetchQuranLevelSuccess = (quranLevel) => {
  return {
    type: FETCH_QURANLEVEL_SUCCESS,
    payload: quranLevel,
  };
};
export const fetchQuranLevelFailure = (error) => {
  return {
    type: FETCH_QURANLEVEL_FAILURE,
    payload: error,
  };
};
export const fetchQuranLevel = () => {
  return async (dispatch) => {
    dispatch(fetchArabicEducationRequest());
    await HtttpGetDefult("getLockup").then((response) => {
      if (response.message.length > 0) {
        dispatch(fetchQuranLevelFailure(response.message));
        dispatch(alertActions.error(response.message));
      } else {
        dispatch(fetchQuranLevelSuccess(response.data.quranLevel));
        console.log(response);
      }
    });
  };
};
