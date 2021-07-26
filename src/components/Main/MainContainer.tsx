import {CardInfoType, actions} from "../../redux/main-reducer"
import {connect} from "react-redux";
import Main from "./Main";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import cardsBase, {CardsBaseKeysType} from "../../redux/cardsBase";
import shuffle from "../Common/shuffle";

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
    ]
  }
}

const MapDispatchToProps = (dispatch:any) => {
  return {
    setThemes: () => {
      dispatch(actions.setMainPageCards(shuffle(Object.keys(cardsBase))))
    },
    insertTheme: (theme: CardsBaseKeysType) => {
      dispatch(actions.insertTheme(theme))
    }
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(MapStateToProps, MapDispatchToProps)
)(Main)

export type MapStatePropsType = {
  cardsInfo: Array<CardInfoType>
}

export type MapDispatchPropsType = {
  setThemes: () => void,
  insertTheme: (theme: CardsBaseKeysType) => void
}

type OwnPropsType = {}