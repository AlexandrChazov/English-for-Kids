import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import navbarReducer from "./navbar-reducer";

const reducers = combineReducers({
  mainPage: mainReducer,
  navbar: navbarReducer
})

const store = createStore(reducers, applyMiddleware());

type reducersType = typeof reducers; //  вернёт что-то вроде функции (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<reducersType>  // определить тип возвращаемого значения
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

export default store;