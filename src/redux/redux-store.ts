import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";

const reducers = combineReducers({
  mainPage: mainReducer
})

const store = createStore(reducers);

export default store;