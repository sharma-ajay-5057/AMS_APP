import { types } from "./type";

export const fetchLoginData =(user)=>{
    //console.log("req >>>>>>>>", user);
    return{
        type:types.SEND_REQUEST_LOGIN,
        payload:user,
    }
}

export const fetchLoginDataSuccess = (user)=>{
   // console.log('user payload', user);
    return{
        type:types.SEND_REQUEST_LOGIN_SUCCESS,
        payload:user,
    }
}

export const fetchLoginDataFailure = (error)=>{
    return{
        type:types.SEND_REQUEST_LOGIN_FAILURE,
        payload:{},
        error:error
    }
}

export const fetchLogoutData = (user) =>{
    return{
        type:types.SEND_REQUEST_LOGOUT,
        payload:user,
    }
}


export const fetchLogoutDataSuccess = (user)=>{
    //console.log('user payload', user);
    return{
        type:types.SEND_REQUEST_LOGOUT_SUCCESS,
        payload:user,
    }
}

export const fetchLogoutDataFailure = (error)=>{
    return{
        type:types.SEND_REQUEST_LOGOUT_FAILURE,
        payload:{},
        error:error
    }
}

export const resetLogin = ()=>{
    return{
        type:types.SEND_LOGIN_RESET,
    }
}


