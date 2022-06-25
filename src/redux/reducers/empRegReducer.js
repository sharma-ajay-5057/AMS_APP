import {types} from '../actions/type'

const initialState ={
    emp_data:[],
    error:{}
}

const empRegReducer = (state=initialState, {type, payload} ) =>{
    switch(type){
        case types.SEND_REQUEST_EMP_REG_DATA:
            return{
                ...state
            }
        case types.SEND_REQUEST_EMP_REG_DATA_SUCCESS:
            return{
                ...state,
                emp_data:payload
            }
        case types.SEND_REQUEST_ADD_CATEGORY_FAILURE:
            return{
                ...state,
                emp_data:{},
                error:payload
            }
        default :{
            return state;
        }
     }
}

export default empRegReducer;