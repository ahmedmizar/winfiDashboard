import {
    FETCH_GOALS_REQUEST,
    FETCH_GOALS_SUCCESS,
    FETCH_GOALS_FAILURE
  } from "../../constants/lockupTypes"; 
  const INIT_STATE = {
    loader:true,
    goals: [], 
    error: ""

  }
  const fetchgoalsReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_GOALS_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_GOALS_SUCCESS: {
            return {
                
                loader: false,
                goals: action.payload,
                error: ""
            }

        }
        case FETCH_GOALS_FAILURE: {
            return {
                
                loader: false,
                goals: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchgoalsReducer;