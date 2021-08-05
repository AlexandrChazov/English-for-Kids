import {createSelector} from "reselect";
import cardsBase, {CardsBaseKeysType} from "../../redux/cardsBase";
import {AppStateType} from "../../redux/redux-store";

const getArrayOfThemes = (state: AppStateType) => {
  return state.navbar.arrayOfThemes
}

export const getWords = createSelector(getArrayOfThemes, (arrayOfThemes: Array<CardsBaseKeysType>) => arrayOfThemes.map(key => {
  return cardsBase[key].cards.map(card => {
    return {
      theme: key,
      eng: card.wordInEnglish,
      rus: card.wordInRussian
    }
  })})
)
