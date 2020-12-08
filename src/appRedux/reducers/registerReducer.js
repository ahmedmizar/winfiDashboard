import * as actionTypes from '../../constants/registrationTypes'

const initialState = {
    isLogin: false,
    token: null,
    studentData: {},
    error: ''
  };
  export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.AUTH_SUCCESS:
        localStorage.setItem("token", action.userData.token);
        return {
          ...state,
          isLogin: true,
          token: action.userData.token,
          studentData: action.userData, 
          error: ''
        };
      case actionTypes.AUTH_FAIL:
        return {
          ...state,
          isLogin: false,
          studentData: {},
          token: null,
          error: action.error
        }
  
      case actionTypes.LogOut:
        localStorage.clear();
        window.location.reload();
        return {
          ...state,
          isLogin: false,
          token: null
        }
      default:
        return state;
    }
  };
  export const checkAuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.CHECK_AUTH: {
        var token = localStorage.getItem("token");
        if (token) {
          return {
            ...state,
            isLogin: true,
            token: token
          };
        }
      }
      default:
        return state;
    }
  };
  