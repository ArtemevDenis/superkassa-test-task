import {combineReducers} from "redux";
import buttonReducer from "./button/buttonReducer";


export const rootReducer = combineReducers({
    activeButton: buttonReducer
})