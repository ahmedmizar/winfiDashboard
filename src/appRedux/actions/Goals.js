import { HtttpGetDefult } from "../httpClient/httpClient";
import { alertActions } from "./AlertActions";
import {
  FETCH_GOALS_REQUEST,
  FETCH_GOALS_SUCCESS,
  FETCH_GOALS_FAILURE
} from "../../constants/lockupTypes"; 
export const fetchGolasRequest = () => {
  return {
    type: FETCH_GOALS_REQUEST,
  };
};
export const fetchGolasSuccess = (goals) => {
  return {
    type: FETCH_GOALS_SUCCESS,
    payload: goals,
  };
};
export const fetchGolasFailure = (error) => {
  return {
    type: FETCH_GOALS_FAILURE,
    payload: error,
  };
};
export const fetchGolas = () => {
  return  (dispatch) => {
    dispatch(fetchGolasRequest());
     HtttpGetDefult("getLockup").then((response) => {
      if (response.message.length > 0) {
        dispatch(fetchGolasFailure(response.message));
        dispatch(alertActions.error(response.message));
        
      } else {
        dispatch(fetchGolasSuccess(response.data.goals));
        console.log(response);
 
      }
    });
  };
};
