import {
    FETCH_AGZAACOUNT_REQUEST,
    FETCH_AGZAACOUNT_SUCCESS,
    FETCH_AGZAACOUNT_FAILURE
  } from "../../constants/lockupTypes";
  const INIT_STATE = {
    loader:true,
    agzaaCount: [], 
    error: ""

  }
  const fetchAgzaaCountReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_AGZAACOUNT_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_AGZAACOUNT_SUCCESS: {
            return {
                
                loader: false,
                agzaaCount: action.payload,
                error: ""
            }

        }
        case FETCH_AGZAACOUNT_FAILURE: {
            return {
                
                loader: false,
                agzaaCount: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchAgzaaCountReducer;