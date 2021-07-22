import {setThemes, CardInfoType} from "../../redux/main-reducer"
import {connect} from "react-redux";
import Main from "./Main";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";

export type MapStatePropsType = {
  firstTheme: CardInfoType,
  secondTheme: CardInfoType,
  thirdTheme: CardInfoType,
  fourthTheme: CardInfoType,
  fifthTheme: CardInfoType,
  sixthTheme: CardInfoType,
  seventhTheme: CardInfoType,
  eighthTheme: CardInfoType
}

export type MapDispatchPropsType = {
  setThemes: () => void
}

type OwnPropsType = {

}

const MapStateToProps = (state: AppStateType) => {
  return {
    firstTheme: state.mainPage.firstTheme,
    secondTheme: state.mainPage.secondTheme,
    thirdTheme: state.mainPage.thirdTheme,
    fourthTheme: state.mainPage.fourthTheme,
    fifthTheme: state.mainPage.fifthTheme,
    sixthTheme: state.mainPage.sixthTheme,
    seventhTheme: state.mainPage.seventhTheme,
    eighthTheme: state.mainPage.eighthTheme
  }
}
export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(MapStateToProps, {
    setThemes
  })
)(Main)