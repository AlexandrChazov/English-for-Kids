import {InferActionsTypes} from "./redux-store";

export const headerReducerActions = {
  setPlayModeOn: () => ({type: "header/setPlayModeOn"}) as const,
  setPlayModeOff: () => ({type: "header/setPlayModeOff"}) as const,
  // confirmThemeSelection: () => ({type: "header/confirmThemeSelection"}) as const,
  // undoThemeSelection: () => ({type: "header/undoThemeSelection"}) as const,
  startQuiz: () => ({type: "header/startQuiz"}) as const,
}

const initialState = {
  isPlayModeOn: false,
  isThemeSelected: false,
  isQuizRunning: false
}

const headerReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "header/setPlayModeOn": {
      return {
        ...state,
        isPlayModeOn: true
      }
    }
    case "header/setPlayModeOff": {
      return {
        ...state,
        isPlayModeOn: false,
        isQuizRunning: false
      }
    }
    // case "header/confirmThemeSelection": {
    //   return {
    //     ...state,
    //     isThemeSelected: true
    //   }
    // }
    // case "header/undoThemeSelection": {
    //   return {
    //     ...state,
    //     isThemeSelected: false
    //   }
    // }
    case "header/startQuiz": {
      return {
        ...state,
        isQuizRunning: true
      }
    }
  }
  return state
}

export default headerReducer;

type ActionsType = InferActionsTypes<typeof headerReducerActions>;
export type InitialStateType = typeof initialState