import cardsBase, {CardsBaseKeysType} from "./cardsBase"
import {InferActionsTypes} from "./redux-store";

const cardInfo = {
  gameTheme: '',
  imageUrl: ''
}

export const actions = {
  setMainPageCards: (arr: Array<CardsBaseKeysType>) => ({type: "main/setMainPageCards", arrayOfThemes: arr})
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
            imageUrl: cardsBase[themeName][0].imageUrl
          }
        })
      }
    }
  }
  return state
}

export default mainReducer;

export type CardInfoType = typeof cardInfo;
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;