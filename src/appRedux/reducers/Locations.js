import {
    FETCH_Locations_REQUEST,
    FETCH_Locations_SUCCESS,
    FETCH_Locations_FAILURE
  } from "../../constants/lockupTypes";
  const INIT_STATE = {
    loader:true,
    locations: [],
    error: ""

  }
  const fetchLocationsReducer = (state= INIT_STATE, action) => {
      switch (action.type) {
          case FETCH_Locations_REQUEST: {
              return {
                  ...state,
                  loader: true
              }

          }
          case FETCH_Locations_SUCCESS: {
            return {
                
                loader: false,
                locations: action.payload,
                error: ""
            }

        }
        case FETCH_Locations_FAILURE: {
            return {
                
                loader: false,
                Locations: [],
                error: action.payload
            }

        }
          default: return state
          
      }
  }
  export default fetchLocationsReducer;