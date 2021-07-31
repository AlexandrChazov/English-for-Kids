import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import navbarReducer from "./navbar-reducer";
import headerReducer from "./header-reducer";

const reducers = combineReducers({
  header: headerReducer,
  mainPage: mainReducer,
  navbar: navbarReducer,
})

const store = createStore(reducers);

type reducersType = typeof reducers; //  вернёт что-то вроде функции (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<reducersType>  // определить тип возвращаемого значения
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

export default store;