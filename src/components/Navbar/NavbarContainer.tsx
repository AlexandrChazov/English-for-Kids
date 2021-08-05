import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {
  getArrayOfNavbarIconsUrl,
  getArrayOfThemes, NavbarLinksType,
  navbarReducerActions,
  NavbarReducerActionsType
} from "../../redux/navbar-reducer";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {MainReducerActionsType, mainReducerActions} from "../../redux/main-reducer";
import {Dispatch} from "redux";
import {headerReducerActions, HeaderReducerActionsType} from "../../redux/header-reducer";
import {statisticReducerActions, StatisticReducerActionsType} from "../../redux/wordlist-reducer";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isNavbarVisible: state.navbar.isNavbarVisible,
    arrayOfThemes: state.navbar.arrayOfThemes,
    arrayOfNavbarIconsUrl: state.navbar.arrayOfNavbarIconsUrl,
    activeLink: state.navbar.activeLink
  }
}

const MapDispatchToProps = (dispatch: Dispatch<MainReducerActionsType |
  NavbarReducerActionsType |
  StatisticReducerActionsType |
  HeaderReducerActionsType>): MapDispatchPropsType => {
  return {
    setIsNavbarVisible: (arg: boolean) => dispatch(navbarReducerActions.setIsNavbarVisible(arg)),
    insertTheme: (theme: CardsBaseKeysType) => dispatch(mainReducerActions.insertTheme(theme)),
    setMainPageCards: (arr: Array<CardsBaseKeysType>) => dispatch(mainReducerActions.setMainPageCards(arr)),
    getArrayOfThemes: () => getArrayOfThemes(dispatch),
    getArrayOfNavbarIconsUrl: () => getArrayOfNavbarIconsUrl(dispatch),
    setCanISeeRunGameButton: (canISee: boolean) => dispatch(headerReducerActions.setCanISeeRunGameButton(canISee)),
    setIsQuizRunning: (isQuizRunning: boolean) => dispatch(headerReducerActions.setIsQuizRunning(isQuizRunning)),
    setActiveLink: (link: NavbarLinksType) => dispatch(navbarReducerActions.setActiveLink(link)),
    setIsMainPageVisible: (isVisible: boolean) => dispatch(mainReducerActions.setIsMainPageVisible(isVisible)),
    setIsStatisticPageVisible: (isVisible: boolean) => dispatch(statisticReducerActions.setIsStatisticPageVisible(isVisible))
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(Navbar);

export type MapStatePropsType = {
  isNavbarVisible: boolean,
  arrayOfThemes: Array<CardsBaseKeysType>,
  arrayOfNavbarIconsUrl: Array<string>,
  activeLink: string
}

export type MapDispatchPropsType = {
  insertTheme: (theme: CardsBaseKeysType) => void
  setMainPageCards: (arr: Array<CardsBaseKeysType>) => void
  getArrayOfThemes: () => void
  getArrayOfNavbarIconsUrl: () => void
  setCanISeeRunGameButton: (canISee: boolean) => void
  setIsQuizRunning: (isQuizRunning: boolean) => void
  setActiveLink: (link: NavbarLinksType) => void
  setIsNavbarVisible: (arg: boolean) => void
  setIsMainPageVisible: (isVisible: boolean) => void
  setIsStatisticPageVisible: (isVisible: boolean) => void
}
