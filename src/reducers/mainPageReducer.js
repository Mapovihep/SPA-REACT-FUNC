import { ADD_POST, DEL_POST } from "../actions/MainPageActions";
const LOG_OUT = 'LOG_OUT'

const initialState = {
    
};
export const mainPageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOG_OUT:
            localStorage.clear()
            return state
        default:
            return state;
    }
}