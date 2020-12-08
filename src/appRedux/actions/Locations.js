import { HtttpGetDefult } from "../httpClient/httpClient";
import { alertActions } from "./AlertActions";
import {
  FETCH_Locations_REQUEST,
  FETCH_Locations_SUCCESS,
  FETCH_Locations_FAILURE,
} from "../../constants/lockupTypes";
export const fetchLocationsRequest = () => {
  return {
    type: FETCH_Locations_REQUEST,
  };
};
export const fetchLocationsSuccess = (locations) => {
  return {
    type: FETCH_Locations_SUCCESS,
    payload: locations,
  };
};
export const fetchLocationsFailure = (error) => {
  return {
    type: FETCH_Locations_FAILURE,
    payload: error,
  };
};
export const fetchLocations = () => {
  return async (dispatch) => {
    dispatch(fetchLocationsRequest);
    await HtttpGetDefult("getLockup").then((response) => {
      if (response.message.length > 0) {
        dispatch(fetchLocationsFailure(response.message));
        dispatch(alertActions.error(response.message));
      } else {
        dispatch(fetchLocationsSuccess(response.data.locations));
        console.log(response);
      }
    });
  };
};
