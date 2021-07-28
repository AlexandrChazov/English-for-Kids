import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {headerReducerActions} from "../../redux/header-reducer";

const MapStateToProps = (state: AppStateType): MapStateType => {
  return {
    isPlayModeOn: state.header.isPlayModeOn,
    isThemeSelected: state.header.isThemeSelected,
    isQuizRunning: state.header.isQuizRunning
  }
}

const MapDispatchToProps = (dispatch: any) => {
  return {
    setPlayModeOn: () => dispatch(headerReducerActions.setPlayModeOn()),
    setPlayModeOff: () => dispatch(headerReducerActions.setPlayModeOff()),
    startQuiz: () => dispatch(headerReducerActions.startQuiz())
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header);

export type MapStateType = {
  isPlayModeOn: boolean,
  isThemeSelected: boolean,
  isQuizRunning: boolean
}

export type MapDispatchType = {
  setPlayModeOn: () => void,
  setPlayModeOff: () => void,
  startQuiz: () => void,
}