import { types } from "./type";

export const allocationStatusChange = (allocation_status) => {
    console.log("allocationStatusChange -----------", allocation_status);
    return {
        type: types.SEND_ALLOCATION_STATUS,
        payload: allocation_status,
    };
    }
    export const allocationStatusSuccess = (allocation_status) => {
        console.log("allocationStatusSuccess -----------", allocation_status);
        return {
            type: types.SEND_ALLOCATION_STATUS_SUCCESS,
            payload: allocation_status,
        };
    }
    export const allocationStatusFailure = (error) => {
        return {
            type: types.SEND_ALLOCATION_STATUS_FAILURE,
            payload: {},
            error: error,
        };
    }

