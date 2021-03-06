import {InferActionsTypes} from "./redux-store";
import {CardsBaseKeysType} from "./cardsBase";

const initialState = {
  isWordlistVisible: false,
  wordsArray: [] as Array<WordsArrayType>
}

export const statisticReducerActions = {
  setIsWordlistVisible: (isVisible: boolean) => ({
    type: "statistic/setIsWordlistVisible",
    isVisible
  }) as const,
  setWords: (wordsArray: Array<WordsArrayType>) => ({type: "statistic/setWords", wordsArray}) as const,
}

const wordlistReducer = (state = initialState, action: StatisticReducerActionsType) => {
  switch (action.type) {
    case "statistic/setIsWordlistVisible": {
      return {
        ...state,
        isWordlistVisible: action.isVisible
      }
    }
    case "statistic/setWords": {
      return {
        ...state,
        wordsArray: action.wordsArray
      }
    }
  }
  return state
}

export default wordlistReducer;

export type StatisticReducerActionsType = InferActionsTypes<typeof statisticReducerActions>

export type WordsArrayType = {
  theme: CardsBaseKeysType
  eng: string
  rus: string
}