import {
    FETCH_Gender_REQUEST,
    FETCH_Gender_SUCCESS,
    FETCH_Gender_FAILURE
  } from "../../constants/lockupTypes";
  const INIT_STATE = {
    loader:true,
    gender: [],
    error: ""

  }
  const fetchGenderReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_Gender_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_Gender_SUCCESS: {
            return {
                
                loader: false,
                gender: action.payload,
                error: ""
            }

        }
        case FETCH_Gender_FAILURE: {
            return {
                
                loader: false,
                gender: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchGenderReducer;