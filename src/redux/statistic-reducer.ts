import {InferActionsTypes} from "./redux-store";
import {CardsBaseKeysType} from "./cardsBase";

const initialState = {
  isStatisticPageVisible: false,
  wordsArray: [] as Array<Array<WordsArrayType>>
}

export const statisticReducerActions = {
  setIsStatisticPageVisible: (isVisible: boolean) => ({
    type: "statistic/setIsStatisticPageVisible",
    isVisible
  }) as const,
  setWords: (wordsArray: Array<Array<WordsArrayType>>) => ({type: "statistic/setWords", wordsArray}) as const,
}

const statisticReducer = (state = initialState, action: StatisticReducerActionsType) => {
  switch (action.type) {
    case "statistic/setIsStatisticPageVisible": {
      return {
        ...state,
        isStatisticPageVisible: action.isVisible
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

export default statisticReducer;

export type StatisticReducerActionsType = InferActionsTypes<typeof statisticReducerActions>

export type WordsArrayType = {
  theme: CardsBaseKeysType
  eng: string
  rus: string
}