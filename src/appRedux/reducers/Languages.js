import {
    FETCH_LANGUAGES_REQUEST,
    FETCH_LANGUAGES_SUCCESS,
    FETCH_LANGUAGES_FAILURE
  } from "../../constants/lockupTypes"; 
  const INIT_STATE = {
    loader:true,
    languages: [], 
    error: ""

  }
  const fetchLanguagesReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_LANGUAGES_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_LANGUAGES_SUCCESS: {
            return {
                
                loader: false,
                languages: action.payload,
                error: ""
            }

        }
        case FETCH_LANGUAGES_FAILURE: {
            return {
                
                loader: false,
                languages: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchLanguagesReducer;