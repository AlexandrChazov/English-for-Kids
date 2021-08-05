import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import navbarReducer from "./navbar-reducer";
import headerReducer from "./header-reducer";
import quizReducer from "./quiz-reducer";
import wordlistReducer from "./wordlist-reducer";

const reducers = combineReducers({
  header: headerReducer,
  main: mainReducer,
  navbar: navbarReducer,
  quiz: quizReducer,
  wordlist: wordlistReducer
})

const store = createStore(reducers);

type reducersType = typeof reducers; //  вернёт что-то вроде функции (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<reducersType>  // определить тип возвращаемого значения
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

export default store;