import { HtttpGetDefult } from "../httpClient/httpClient";
import { alertActions } from "./AlertActions";
import {
  FETCH_AGZAACOUNT_REQUEST,
  FETCH_AGZAACOUNT_SUCCESS,
  FETCH_AGZAACOUNT_FAILURE
} from "../../constants/lockupTypes";
export const fetchBrandDataRequest = () => {
  return {
    type: FETCH_AGZAACOUNT_REQUEST,
  };
};
export const fetchAgzaaCountSuccess = (payload) => {
  return {
    type: FETCH_AGZAACOUNT_SUCCESS,
    payload: payload,
  };
};
export const fetchAgzaaCountFailure = (error) => {
  return {
    type: FETCH_AGZAACOUNT_FAILURE,
    payload: error,
  };
};
// export const fetchAgzaaCount = () => {
//   return async (dispatch) => {
//     dispatch(fetchAgzaaCountRequest());
//     await HtttpGetDefult("getLockup").then((response) => {
//       if (response.message.length > 0) {
//         dispatch(fetchAgzaaCountFailure(response.message));
//         dispatch(alertActions.error(response.message));
//       } else {
//         dispatch(fetchAgzaaCountSuccess(response.data.agzaaCount));
//         console.log(response);
//       }
//     });
//   };
// };
