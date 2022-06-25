import {types} from '../actions/type'

const initialState={
    d_list:[],
    error:{},
    loading:false
}

const deleteCategoryReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case types.SEND_REQUEST_DELETE_CATEGORY:
            return{
                ...state,
                loading:true
            }
        case types.SEND_REQUEST_DELETE_CATEGORY_SUCCESS:
            console.log("delete category", payload);
            return{
                ...state,
                d_list:payload,
                loading:false
            }
        case types.SEND_REQUEST_DELETE_CATEGORY_FAILURE:
            return{
                ...state,
                d_list:{},
                error:payload,
                loading:false
            }
        default:
            return state;
    }
}

export default deleteCategoryReducer