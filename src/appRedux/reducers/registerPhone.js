import * as actionTypes from "../../constants/registerPhoneTypes";

const initialState = {
  verifyPhonedata: false,
  userData: {},
  error: "",
};
export const registerPhoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RREGISTER_PHONE_SUCCESS:
      return {
        userdata: action.payload,
        verifyPhonedata: true,
        error: "",
      };
    case actionTypes.RREGISTER_PHONE_FAIL:
      return {
        userData: {},
        verifyPhonedata: false,
        error: action.error,
      };
    default:
      return state;
  }
};
// export const checkAuthReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.CHECK_AUTH: {
//       var token = localStorage.getItem("token");
//       if (token) {
//         return {
//           ...state,
//           isLogin: true,
//           token: token
//         };
//       }
//     }
//     default:
//       return state;
//   }
// };
