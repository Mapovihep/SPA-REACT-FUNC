import { combineReducers } from "redux";
import { sagaReducer } from "./sagaReducer";
import { historyReducer } from './historyReducer'

const rootReducer = combineReducers({
    saga: sagaReducer,
    history: historyReducer
  })

export default rootReducer;
