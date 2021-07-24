import React from "react"
import {CardInfoType, actions} from "../../redux/main-reducer"
import {connect} from "react-redux";
import Main from "./Main";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import cardsBase from "../../redux/cardsBase";

function shuffle(arr: Array<string>): any {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

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
  setThemes: () => void
}

type OwnPropsType = {}