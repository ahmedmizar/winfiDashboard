import * as actionTypes from "../../constants/personalDataTypes";

const initialState = {
  isLogin: false,
  userData: {},
  error: "",
};
export const personalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSONALDATA_SUCCESS:
      return {
        ...state,
        isLogin: true,
        userData: action.userData,
        error: "",
      };
    case actionTypes.PERSONALDATA_START:
      return {
        ...state,
        isLogin: false,
        userData: {},
        error: action.error,
      };

    default:
      return state;
  }
};
