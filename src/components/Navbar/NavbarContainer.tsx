import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {navbarReducerActions} from "../../redux/navbar-reducer";
import cardsBase, {CardsBaseKeysType} from "../../redux/cardsBase";
import {mainReducerActions} from "../../redux/main-reducer";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isNavbarShown: state.navbar.isNavbarShown,
    arrayOfThemes: state.mainPage.arrayOfThemes
  }
}

const MapDispatchToProps = (dispatch:any) => {    //todo
  return {
    hideNavbar: () => dispatch(navbarReducerActions.hideNavbar()),
    changeNavbarVisibility: (arg: boolean) => dispatch(navbarReducerActions.changeNavbarVisibility(arg)),
    insertTheme: (theme: CardsBaseKeysType) => dispatch(mainReducerActions.insertTheme(theme)),
    //@ts-ignore todo
    setMainPageCards: () => dispatch(mainReducerActions.setMainPageCards(Object.keys(cardsBase)))
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(Navbar);

export type MapStatePropsType = {
  isNavbarShown: boolean,
  arrayOfThemes: Array<CardsBaseKeysType>
}

export type MapDispatchPropsType = {
  hideNavbar: () => void,
  changeNavbarVisibility: (arg: boolean) => void,
  insertTheme: (theme: CardsBaseKeysType) => void,
  setMainPageCards: () => void
}