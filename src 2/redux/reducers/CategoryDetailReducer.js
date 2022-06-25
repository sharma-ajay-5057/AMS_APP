import {types} from '../actions/type'

const initialState={
    catlist:[],
    error:{},
    loading:false
}


const CategoryDetailReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case types.GET_REQUEST_CATEGORY:
            return{
                ...state,
                loading:true,
            } 
        case types.GET_REQUEST_CATEGORY_SUCCESS:
           // console.log('category =====>', payload);
            return{
                ...state,
                catlist:payload,
                loading:false
            }
        case types.GET_REQUEST_CATEGORY_FAILURE:
            return{
                ...state,
                catlist:{},
                error:payload,
                loading:false,
            }
        default:
                return state;
    }
}

export default CategoryDetailReducer;