import { HtttpGetDefult } from "../httpClient/httpClient";
import { alertActions } from "./AlertActions";
import {
  FETCH_Gender_REQUEST,
  FETCH_Gender_SUCCESS,
  FETCH_Gender_FAILURE,
} from "../../constants/lockupTypes";
export const fetchGenderRequest = () => {
  return {
    type: FETCH_Gender_REQUEST,
  };
};
export const fetchGenderSuccess = (gender) => {
  return {
    type: FETCH_Gender_SUCCESS,
    payload: gender,
  };
};
export const fetchGenderFailure = (error) => {
  return {
    type: FETCH_Gender_FAILURE,
    payload: error,
  };
};
export const fetchGender = () => {
  return async (dispatch) => {
    dispatch(fetchGenderRequest);
    await HtttpGetDefult("getLockup").then((response) => {
      if (response.message.length > 0) {
        dispatch(fetchGenderFailure(response.message));
        dispatch(alertActions.error(response.message));
      } else {
        dispatch(fetchGenderSuccess(response.data.gender));
        console.log(response);
      }
    });
  };
};
