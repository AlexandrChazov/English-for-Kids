import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {
  getArrayOfNavbarIconsUrl,
  getArrayOfThemes,
  navbarReducerActions,
  NavbarReducerActionsType
} from "../../redux/navbar-reducer";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {MainReducerActionsType, mainReducerActions} from "../../redux/main-reducer";
import {Dispatch} from "redux";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isNavbarShown: state.navbar.isNavbarShown,
    arrayOfThemes: state.navbar.arrayOfThemes,
    arrayOfNavbarIconsUrl: state.navbar.arrayOfNavbarIconsUrl
  }
}

const MapDispatchToProps = (dispatch: Dispatch<MainReducerActionsType | NavbarReducerActionsType>) => {
  return {
    hideNavbar: () => dispatch(navbarReducerActions.hideNavbar()),
    changeNavbarVisibility: (arg: boolean) => dispatch(navbarReducerActions.changeNavbarVisibility(arg)),
    insertTheme: (theme: CardsBaseKeysType) => dispatch(mainReducerActions.insertTheme(theme)),
    setMainPageCards: (arr: Array<CardsBaseKeysType>) => dispatch(mainReducerActions.setMainPageCards(arr)),
    getArrayOfThemes: () => getArrayOfThemes(dispatch),
    getArrayOfNavbarIconsUrl: () => getArrayOfNavbarIconsUrl(dispatch)
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(Navbar);

export type MapStatePropsType = {
  isNavbarShown: boolean,
  arrayOfThemes: Array<CardsBaseKeysType>,
  arrayOfNavbarIconsUrl: Array<string>
}

export type MapDispatchPropsType = {
  hideNavbar: () => void,
  changeNavbarVisibility: (arg: boolean) => void,
  insertTheme: (theme: CardsBaseKeysType) => void,
  setMainPageCards: (arr: Array<CardsBaseKeysType>) => void,
  getArrayOfThemes: () => void,
  getArrayOfNavbarIconsUrl: () => void
}