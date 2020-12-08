import * as actionTypes from "../../constants/verifyPhoneTypes";

const initialState = {
  data: {},
  verified: false,
  loading: true,
  error: "",
};
export const verifyPhoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VERIFY_PHONE_START:
      return {
        ...state,
        loading: true,
      
      };
    case actionTypes.VERIFY_PHONE_SUCCESS:
      return {
        loading: false,
        verified: true,
        data: action.payload,
        error: "",
      };
    case actionTypes.VERIFY_PHONE_FAIL:
      return {
        loading: true,
        verified:false,
        data: {},
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
