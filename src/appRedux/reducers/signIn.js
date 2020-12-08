import * as actionTypes from '../../constants/signInTypes'

const initialState = {
    isLogin: false,
    token: null,
    signInError: ''
  };
  export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SIGNIN_SUCCESS:
        localStorage.setItem("token", action.token);
        return {
          ...state,
          isLogin: true,
          token: action.token, 
          signInError: ''
        };
      case actionTypes.SIGNIN_FAIL:
        return {
          ...state,
          isLogin: false,
          token: null,
          signInError: action.error
        }
  
      case actionTypes.LOGOUT:
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
  