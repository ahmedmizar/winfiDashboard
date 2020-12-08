
import {HtttpGetDefult} from '../httpClient/httpClient'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from "../../constants/ActionTypes";
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
export const  fetchUsers =   () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest)
        await HtttpGetDefult("users").then(response => {
                const users = response
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchUsersFailure(errorMessage))
            })
    }
}