import {InferActionsTypes} from "./redux-store";

export const headerReducerActions = {
  setPlayModeOn: () => ({type: "header/setPlayModeOn"}) as const,
  setPlayModeOff: () => ({type: "header/setPlayModeOff"}) as const,
  setIsQuizRunning: (isQuizRunning: boolean) => ({type: "header/startQuiz", isQuizRunning}) as const,
  setCanISeeRunGameButton: (canISee: boolean) => ({type: "header/setCanISeeRunGameButton", canISee}) as const,
}

// const AskAQuestion = () => {
//   const audioQuestion = new Audio()
// }

const initialState = {
  isPlayModeOn: false,
  isThemeSelected: false,
  isQuizRunning: false,
  canISeeRunGameButton: false
}

const headerReducer = (state = initialState, action: HeaderReducerActionsType): InitialStateType => {
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
    case "header/startQuiz": {
      return {
        ...state,
        isQuizRunning: action.isQuizRunning
      }
    }
    case "header/setCanISeeRunGameButton": {
      return {
        ...state,
        canISeeRunGameButton: action.canISee
      }
    }
  }
  return state
}

export default headerReducer;

export type HeaderReducerActionsType = InferActionsTypes<typeof headerReducerActions>;
export type InitialStateType = typeof initialState