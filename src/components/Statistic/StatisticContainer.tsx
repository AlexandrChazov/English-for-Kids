import Statistic from "./Statistic";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {statisticReducerActions, StatisticReducerActionsType, WordsArrayType} from "../../redux/statistic-reducer";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {getWords} from "../Common/selectors";
import {Dispatch} from "redux";

const MapStateToProps = (state: AppStateType) => {
  return {
    isStatisticPageVisible: state.statistic.isStatisticPageVisible,
    wordsArray: getWords(state),
    arrayOfThemes: state.navbar.arrayOfThemes
  }
}

const MapDispatchToProps = (dispatch: Dispatch<StatisticReducerActionsType>) => {
  return {
    setWords: (wordsArray: Array<Array<WordsArrayType>>) => dispatch(statisticReducerActions.setWords(wordsArray))
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(Statistic);

export type MapStatePropsType = {
  isStatisticPageVisible: boolean,
  wordsArray: Array<Array<WordsArrayType>>;
  arrayOfThemes: Array<CardsBaseKeysType>
}

export type MapDispatchPropsType = {
  setWords: (wordsArray: Array<Array<WordsArrayType>>) => void
}
