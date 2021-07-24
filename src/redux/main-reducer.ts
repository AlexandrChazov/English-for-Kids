import cardsBase, {CardsBaseKeysType, CardsBaseType} from "./cardsBase"
import {InferActionsTypes} from "./redux-store";

const cardInfo = {
  gameTheme: '',
  imageUrl: ''
}

export const actions = {
  setMainPageCards: (themesArr: Array<CardsBaseKeysType>) => ({type: "main/setMainPageCards", themes: themesArr})
}


// function getRandomKeys(obj:CardsBaseType):any {
//   const objKeys = Object.keys(obj);
//   shuffle(Object.keys(obj));
//   return objKeys;
// }

// getRandomKeys(cardsBase)


const initialState = {
  cardsInfo: [
    cardInfo,
    cardInfo,
    cardInfo,
    cardInfo,
    cardInfo,
    cardInfo,
    cardInfo,
    cardInfo
  ]
}

const mainReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "main/setMainPageCards": {
      return {
        ...state,
        cardsInfo: [
          {

              gameTheme: action.themes[0],
              imageUrl: cardsBase[action.themes[0]].firstWord.imageUrl
          },
          {
              gameTheme: action.themes[1],
              imageUrl: cardsBase[action.themes[1]].firstWord.imageUrl
          },
          {
              gameTheme: action.themes[2],
              imageUrl: cardsBase[action.themes[2]].firstWord.imageUrl
          },
          {
              gameTheme: action.themes[3],
              imageUrl: cardsBase[action.themes[3]].firstWord.imageUrl
          },
          {
              gameTheme: action.themes[4],
              imageUrl: cardsBase[action.themes[4]].firstWord.imageUrl
          },
          {
              gameTheme: action.themes[5],
              imageUrl: cardsBase[action.themes[5]].firstWord.imageUrl
          },
          {
              gameTheme: action.themes[6],
              imageUrl: cardsBase[action.themes[6]].firstWord.imageUrl
          },
          {
              gameTheme: action.themes[7],
              imageUrl: cardsBase[action.themes[7]].firstWord.imageUrl
          },
        ]
      }
    }
  }
  return state
}

export default mainReducer;

export type CardInfoType = typeof cardInfo;
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;