import Wordlist from "./Wordlist";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {statisticReducerActions, StatisticReducerActionsType, WordsArrayType} from "../../redux/wordlist-reducer";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {getWords} from "../Common/selectors";
import {Dispatch} from "redux";

const MapStateToProps = (state: AppStateType) => {
  return {
    isStatisticPageVisible: state.wordlist.isStatisticPageVisible,
    wordsArray: getWords(state),
    arrayOfThemes: state.navbar.arrayOfThemes
  }
}

const MapDispatchToProps = (dispatch: Dispatch<StatisticReducerActionsType>) => {
  return {
    setWords: (wordsArray: Array<WordsArrayType>) => dispatch(statisticReducerActions.setWords(wordsArray))
  }
}
//@ts-ignore
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(Wordlist);

export type MapStatePropsType = {
  isStatisticPageVisible: boolean,
  wordsArray: Array<WordsArrayType>;
  arrayOfThemes: Array<CardsBaseKeysType>
}

export type MapDispatchPropsType = {
  setWords: (wordsArray: Array<WordsArrayType>) => void
}
