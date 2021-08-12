import {createSelector} from "reselect";
import cardsBase, {CardsBaseKeysType} from "../../redux/cardsBase";
import {AppStateType} from "../../redux/redux-store";
import {WordsArrayType} from "../../redux/wordlist-reducer";

const getArrayOfThemes = (state: AppStateType): Array<CardsBaseKeysType> => {
  return state.navbar.arrayOfThemes
}

export const getWords = createSelector(getArrayOfThemes, (arrayOfThemes: Array<CardsBaseKeysType>) => {
    let arr = [] as Array<WordsArrayType>;
    for (let i = 0; i < arrayOfThemes.length; i++) {
      cardsBase[arrayOfThemes[i]].cards.map(card => {
        arr.push(
          {
            theme: arrayOfThemes[i],
            eng: card.wordInEnglish,
            rus: card.wordInRussian
          }
        )
      })
    }
    return arr
  }
)
