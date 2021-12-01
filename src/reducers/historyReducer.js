import { LOG_OUT } from "../actions/ReducerActions";

const initialState = {
    history: [localStorage.getItem('route')||''],
    currentLocation: localStorage.getItem('route')||''
}
export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_ROUTE":
            let history = state.history;
            history.push(action.payload); 
            return {...state, history: history, currentLocation: action.payload}
        case "CHANGE_ROUTE_TO_MAIN": 
        localStorage.setItem('route', '/')
            return {...state, history: ['/'], currentLocation: '/'}
        case LOG_OUT: 
            return {...state, history: [], currentLocation: ''}
        default:
            return state;
    }
}