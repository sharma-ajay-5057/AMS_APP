import {types} from '../actions/type'

export const requestEmpReg = (emp_data) =>{
    return{
        type:types.SEND_REQUEST_EMP_REG_DATA,
        payload:emp_data
    }
}

export const requestEmpRegSuccess =(emp_data) =>{
    return{
        type:types.SEND_REQUEST_EMP_REG_DATA_SUCCESS,
        payload:emp_data
    }
}

export const requestEmpRegFailure = (error)=>{
        return{
            type:types.SEND_REQUEST_EMP_REG_DATA_FAILURE,
            payload:{},
            error:error
        }
}