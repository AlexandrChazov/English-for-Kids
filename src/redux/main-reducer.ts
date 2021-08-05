import cardsBase, {CardsBaseKeysType} from "./cardsBase"
import {InferActionsTypes} from "./redux-store";
import shuffle from "../components/Common/shuffle";

const cardInfo: CardInfoType = {
  wordInEnglish: '',
  wordInRussian: '',
  imageUrl: '',
  audioSrc: '',
}

export const mainReducerActions = {
  setMainPageCards: (arr: Array<CardsBaseKeysType>) => ({type: "main/setMainPageCards", arrayOfThemes: arr}) as const,
  insertTheme: (theme: CardsBaseKeysType) => ({type: "main/insertTheme", cardsInfo: cardsBase[theme].cards}) as const,
  setIsMainPageVisible: (isVisible: boolean) => ({type: "main/setIsMainPageVisible", isVisible}) as const,
}

const initialState = {
  cardsInfo: [cardInfo],
  arrayOfAudioQuestionsSrc: [] as Array<string>,
  isMainPageVisible: true,
}

const mainReducer = (state:InitialStateType = initialState, action: MainReducerActionsType): InitialStateType => {
  switch (action.type) {
    case "main/setMainPageCards": {
      return {
        ...state,
        cardsInfo: shuffle(action.arrayOfThemes).map((themeName) => {
          return {
            wordInEnglish: '',
            wordInRussian: '',
            imageUrl: cardsBase[themeName].mainImage,
            audioSrc: '',
            gameTheme: themeName,
          }
        }),
      }
    }
    case "main/insertTheme": {
      return {
        ...state,
        cardsInfo: shuffle(action.cardsInfo),
        arrayOfAudioQuestionsSrc: shuffle(action.cardsInfo.map((el)=>el.audioSrc))
      }
    }
    case "main/setIsMainPageVisible": {
      return {
        ...state,
        isMainPageVisible: action.isVisible
      }
    }
  }
  return state
}

export default mainReducer;

export type CardInfoType = {
  wordInEnglish: string,
  wordInRussian: string,
  imageUrl: string,
  audioSrc: string,
  gameTheme?: CardsBaseKeysType,
};

type InitialStateType = typeof initialState;
export type MainReducerActionsType = InferActionsTypes<typeof mainReducerActions>;