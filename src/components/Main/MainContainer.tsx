import {MainReducerActionsType, CardInfoType, mainReducerActions} from "../../redux/main-reducer"
import {connect} from "react-redux";
import Main from "./Main";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {CardsBaseKeysType} from "../../redux/cardsBase";

const MapStateToProps = (state: AppStateType) => {
  return {
    cardsInfo: [
      state.mainPage.cardsInfo[0],
      state.mainPage.cardsInfo[1],
      state.mainPage.cardsInfo[2],
      state.mainPage.cardsInfo[3],
      state.mainPage.cardsInfo[4],
      state.mainPage.cardsInfo[5],
      state.mainPage.cardsInfo[6],
      state.mainPage.cardsInfo[7]
    ],
    arrayOfThemes: state.navbar.arrayOfThemes
  }
}

const MapDispatchToProps = (dispatch: Dispatch<MainReducerActionsType>) => {
  return {
    setThemes: (arr: Array<CardsBaseKeysType>) => {
      dispatch(mainReducerActions.setMainPageCards(arr))
    },
    insertTheme: (theme: CardsBaseKeysType) => {
      dispatch(mainReducerActions.insertTheme(theme))
    }
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(MapStateToProps, MapDispatchToProps)
)(Main)

export type MapStatePropsType = {
  cardsInfo: Array<CardInfoType>,
  arrayOfThemes: Array<CardsBaseKeysType>
}

export type MapDispatchPropsType = {
  setThemes: (arr: Array<CardsBaseKeysType>) => void,
  insertTheme: (theme: CardsBaseKeysType) => void
}

type OwnPropsType = {}