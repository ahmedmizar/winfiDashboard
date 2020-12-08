import {
    FETCH_ArabicEducation_REQUEST,
    FETCH_ArabicEducation_SUCCESS,
    FETCH_ArabicEducation_FAILURE
  } from "../../constants/lockupTypes";
  const INIT_STATE = {
    loader:true,
    arabicEducation: [],
    error: ""

  }
  const fetchArabicEducationReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_ArabicEducation_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_ArabicEducation_SUCCESS: {
            return {
                
                loader: false,
                arabicEducation: action.payload,
                error: ""
            }

        }
        case FETCH_ArabicEducation_FAILURE: {
            return {
                
                loader: false,
                arabicEducation: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchArabicEducationReducer;