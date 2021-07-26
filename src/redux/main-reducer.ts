import cardsBase, {CardsBaseKeysType} from "./cardsBase"
import {InferActionsTypes} from "./redux-store";
import shuffle from "../components/Common/shuffle";

const cardInfo = {
  wordInEnglish: '',
  wordInRussian: '',
  imageUrl: '',
  audioSrc: '',
}

export const actions = {
  setMainPageCards: (arr: Array<CardsBaseKeysType>) => ({type: "main/setMainPageCards", arrayOfThemes: arr}) as const,
  insertTheme: (theme: CardsBaseKeysType) => ({type: "main/insertTheme", theme}) as const
}

const initialState = {
  cardsInfo: [cardInfo]
}

const mainReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "main/setMainPageCards": {
      return {
        ...state,
        cardsInfo: action.arrayOfThemes.map((themeName) => {
          return {
            gameTheme: themeName,
            wordInEnglish: '',
            wordInRussian: '',
            imageUrl: cardsBase[themeName][0].imageUrl,
            audioSrc: '',
          }
        })
      }
    }
    case "main/insertTheme": {
      return {
        ...state,
        cardsInfo: shuffle(cardsBase[action.theme])
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

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;