import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {headerReducerActions, HeaderReducerActionsType} from "../../redux/header-reducer";
import {Dispatch} from "redux";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isPlayModeOn: state.header.isPlayModeOn,
    isThemeSelected: state.header.isThemeSelected,
    isQuizRunning: state.header.isQuizRunning,
    canISeeRunGameButton: state.header.canISeeRunGameButton,
  }
}

const MapDispatchToProps = (dispatch: Dispatch<HeaderReducerActionsType>) => {
  return {
    setPlayModeOn: () => dispatch(headerReducerActions.setPlayModeOn()),
    setPlayModeOff: () => dispatch(headerReducerActions.setPlayModeOff()),
    setIsQuizRunning: (isQuizRunning: boolean) => dispatch(headerReducerActions.setIsQuizRunning(isQuizRunning))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header);

export type MapStatePropsType = {
  isPlayModeOn: boolean,
  isThemeSelected: boolean,
  isQuizRunning: boolean,
  canISeeRunGameButton: boolean
}

export type MapDispatchPropsType = {
  setPlayModeOn: () => void,
  setPlayModeOff: () => void,
  setIsQuizRunning: (isQuizRunning: boolean) => void,
}