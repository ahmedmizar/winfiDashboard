import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from "../../constants/ActionTypes";
  const INIT_STATE = {
    loader:true,
    users: [],
    error: ""

  }
  const fetchUsersReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_USERS_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_USERS_SUCCESS: {
            return {
                
                loader: false,
                users: action.payload,
                error: ""
            }

        }
        case FETCH_USERS_FAILURE: {
            return {
                
                loader: false,
                users: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchUsersReducer;