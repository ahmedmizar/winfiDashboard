import {
    FETCH_QURANLEVEL_REQUEST,
    FETCH_QURANLEVEL_SUCCESS,
    FETCH_QURANLEVEL_FAILURE
  } from "../../constants/lockupTypes";
  const INIT_STATE = {
    loader:true,
    quranLevel: [], 
    error: ""

  }
  const fetchquranLevelReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_QURANLEVEL_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_QURANLEVEL_SUCCESS: {
            return {
                
                loader: false,
                quranLevel: action.payload,
                error: ""
            }

        }
        case FETCH_QURANLEVEL_FAILURE: {
            return {
                
                loader: false,
                quranLevel: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchquranLevelReducer;