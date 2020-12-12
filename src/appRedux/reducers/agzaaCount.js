import {
    FETCH_AGZAACOUNT_REQUEST,
    FETCH_AGZAACOUNT_SUCCESS,
    FETCH_AGZAACOUNT_FAILURE
} from "../../constants/lockupTypes";
const INIT_STATE = {
    loading: true,
    brandData: {
        "displayColor": "#ee2023",
        "displayDesc": "Hi it is Google",
        "displayName": "Google"
    },
    error: ""

}
const fetchBrandDataReducer = (state = INIT_STATE, action) => {
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
                brandData: action.payload,
                error: ""
            }

        }
        case FETCH_AGZAACOUNT_FAILURE: {
            return {

                loader: false,
                brandData: {},
                error: action.payload
            }

        }
        default: return state

    }
}
export default fetchBrandDataReducer;