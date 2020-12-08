import {HtttpPostDefult} from '../httpClient/httpClient'
import * as actionTypes from '../../constants/registrationTypes'
import { alertActions } from './AlertActions';
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const logOut = () => {
    return {
        type: actionTypes.LogOut
    }
}




export const checkAuth = () => {
    return {
        type: actionTypes.CHECK_AUTH
    }
}


export const authSuccess = (userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userData:userData
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (userdata) => {
    
    return (dispach) => {
        dispach(authStart())
        const authData = userdata
        
        HtttpPostDefult('registerData', authData)
        
            .then(response => {
                if(response.message.length >0) {
                    
                    dispach(authFail(response.message));
                    dispach(alertActions.error(response.message));
                }
                else { 
                    dispach(authSuccess(response.data))
                    
                }
              
            })
         
    }
}

