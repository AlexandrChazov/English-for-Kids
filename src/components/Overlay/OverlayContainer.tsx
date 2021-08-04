import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Overlay from "./Overlay";
import {navbarReducerActions, NavbarReducerActionsType} from "../../redux/navbar-reducer";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isNavbarVisible: state.navbar.isNavbarVisible,
  }
}

const MapDispatchToProps = (dispatch: Dispatch<NavbarReducerActionsType>): MapDispatchPropsType => {
  return {
    setIsNavbarVisible: (arg: boolean) => dispatch(navbarReducerActions.setIsNavbarVisible(arg))
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(Overlay);

export type MapStatePropsType = {
  isNavbarVisible: boolean
}

export type MapDispatchPropsType = {
  setIsNavbarVisible: (arg: boolean) => void
}