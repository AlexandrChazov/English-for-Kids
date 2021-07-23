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

type OwnPropsType = {}