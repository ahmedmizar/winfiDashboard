import { HtttpGetDefult } from "../httpClient/httpClient";
import { alertActions } from "./AlertActions";
import {
  FETCH_LANGUAGES_REQUEST,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAILURE
} from "../../constants/lockupTypes"; 
export const fetchLanguagesRequest = () => {
  return {
    type: FETCH_LANGUAGES_REQUEST,
  };
};
export const fetchLanguagesSuccess = (languages) => {
  return {
    type: FETCH_LANGUAGES_SUCCESS,
    payload: languages,
  };
};
export const fetchLanguagesFailure = (error) => {
  return {
    type: FETCH_LANGUAGES_FAILURE,
    payload: error,
  };
};
export const fetchLanguages = () => {
  return async (dispatch) => {
    dispatch(fetchLanguagesRequest());
    await HtttpGetDefult("getLockup").then((response) => {
      if (response.message.length > 0) {
        dispatch(fetchLanguagesFailure(response.message));
        dispatch(alertActions.error(response.message));
      } else {
        dispatch(fetchLanguagesSuccess(response.data.languages));
        console.log(response);
      }
    });
  };
};
