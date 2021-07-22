import cardsBase, {CardsBaseKeysType, CardsBaseType} from "./cardsBase"
import {InferActionsTypes} from "./redux-store";

const cardInfo = {
  gameTheme: '',
  imageUrl: ''
}

const actions = {
  setMainPageCards: (themesArr: Array<CardsBaseKeysType>) => ({type: "main/setMainPageCards", themes: themesArr})
}

function shuffle(arr:Array<string>):any {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

// function getRandomKeys(obj:CardsBaseType):any {
//   const objKeys = Object.keys(obj);
//   shuffle(Object.keys(obj));
//   return objKeys;
// }

// getRandomKeys(cardsBase)

export const setThemes = () => {
  return (dispatch: any)=>{
    dispatch(actions.setMainPageCards(shuffle(Object.keys(cardsBase))))
  }
}

const initialState = {
  firstTheme: cardInfo,
  secondTheme: cardInfo,
  thirdTheme: cardInfo,
  fourthTheme: cardInfo,
  fifthTheme: cardInfo,
  sixthTheme: cardInfo,
  seventhTheme: cardInfo,
  eighthTheme: cardInfo
}

const mainReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "main/setMainPageCards": {
      return {
        ...state,
        firstTheme: {gameTheme: cardsBase[action.themes[0]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[0]].firstWord.imageUrl},
        secondTheme: {gameTheme: cardsBase[action.themes[1]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[1]].firstWord.imageUrl},
        thirdTheme: {gameTheme: cardsBase[action.themes[2]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[2]].firstWord.imageUrl},
        fourthTheme: {gameTheme: cardsBase[action.themes[3]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[3]].firstWord.imageUrl},
        fifthTheme: {gameTheme: cardsBase[action.themes[4]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[4]].firstWord.imageUrl},
        sixthTheme: {gameTheme: cardsBase[action.themes[5]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[5]].firstWord.imageUrl},
        seventhTheme: {gameTheme: cardsBase[action.themes[6]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[6]].firstWord.imageUrl},
        eighthTheme: {gameTheme: cardsBase[action.themes[7]].firstWord.wordInEnglish, imageUrl: cardsBase[action.themes[7]].firstWord.imageUrl},
      }
    }
  }
  return state
}

export default mainReducer;

export type CardInfoType = typeof cardInfo;
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;