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
  insertTheme: (theme: CardsBaseKeysType) => ({type: "main/insertTheme", theme}) as const,
}

const initialState = {
  cardsInfo: [cardInfo],
  arrayOfThemes: [] as Array<CardsBaseKeysType>
}

const mainReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        arrayOfThemes: action.arrayOfThemes
      }
    }
    case "main/insertTheme": {
      return {
        ...state,
        cardsInfo: shuffle(cardsBase[action.theme].cards)
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
type ActionsType = InferActionsTypes<typeof mainReducerActions>;