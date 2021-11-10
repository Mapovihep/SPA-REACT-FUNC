import { combineReducers } from "redux";
import { mainPageReducer } from "./mainPageReducer";
import { sagaReducer } from "./sagaReducer";

const rootReducer = combineReducers({
    page: mainPageReducer,
    saga: sagaReducer,
  })

export default rootReducer;
