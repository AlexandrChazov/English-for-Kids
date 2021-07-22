import React, {useEffect} from "react";
import s from "./Main.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MainContainer";

const Main: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  //@ts-ignore
  useEffect(()=> {
    props.setThemes()
  },[])
  debugger
  return (
    <div className={s.main}>
      <div className={s.cardsWrapper}>
        <div className={s.cardsGrid}>
          <div className={s.flipEffect}>
            <div className={s.frontCard}>
              <h3 className={s.frondCardTheme}>{props.firstTheme.gameTheme}</h3>
              <img className={s.frontCardImage} src={props.firstTheme.imageUrl} alt="logo"/>
            </div>
            <div className={s.backCard}>

            </div>
            <div className={s.cardOverlay}>

            </div>
          </div>
        </div>
      </div>
      Main
    </div>
  )
}

export default Main;