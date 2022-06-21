import { combineReducers } from "redux";
import count_reducer from "./count_reducer";

const reducers = combineReducers({
    allproducts: count_reducer
})

export default reducers;