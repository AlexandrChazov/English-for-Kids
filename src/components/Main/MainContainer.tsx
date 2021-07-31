import {MainReducerActionsType, CardInfoType, mainReducerActions} from "../../redux/main-reducer";
import {HeaderReducerActionsType} from "../../redux/header-reducer";
import {connect} from "react-redux";
import Main from "./Main";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {headerReducerActions} from "../../redux/header-reducer";
import {NavbarLinksType, navbarReducerActions, NavbarReducerActionsType} from "../../redux/navbar-reducer";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
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
    arrayOfThemes: state.navbar.arrayOfThemes,
    isPlayModeOn: state.header.isPlayModeOn,
    activeLink: state.navbar.activeLink
  }
}

const MapDispatchToProps = (dispatch: Dispatch<MainReducerActionsType | HeaderReducerActionsType | NavbarReducerActionsType>) => {
  return {
    setMainPageCards: (arr: Array<CardsBaseKeysType>) => {
      dispatch(mainReducerActions.setMainPageCards(arr))
    },
    insertTheme: (theme: CardsBaseKeysType) => {
      dispatch(mainReducerActions.insertTheme(theme))
    },
    setCanISeeRunGameButton: (canISee: boolean) => {
      dispatch(headerReducerActions.setCanISeeRunGameButton(canISee))
    },
    setActiveLink: (link: NavbarLinksType) => dispatch(navbarReducerActions.setActiveLink(link))
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(MapStateToProps, MapDispatchToProps)
)(Main)

export type MapStatePropsType = {
  cardsInfo: Array<CardInfoType>
  arrayOfThemes: Array<CardsBaseKeysType>
  isPlayModeOn: boolean;
  activeLink: NavbarLinksType
}

export type MapDispatchPropsType = {
  setMainPageCards: (arr: Array<CardsBaseKeysType>) => void,
  insertTheme: (theme: CardsBaseKeysType) => void,
  setCanISeeRunGameButton: (canISee: boolean) => void,
  setActiveLink: (link: NavbarLinksType) => void
}


type OwnPropsType = {}