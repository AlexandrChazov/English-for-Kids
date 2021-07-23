import React, {useEffect} from "react";
import s from "./Main.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MainContainer";

const Main: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  useEffect(()=> {
    props.setThemes()
  },[])

  return (
    <div className={s.main}>
      <div className={s.cardsWrapper}>
        <div className={s.cardsGrid}>
            <div className={s.frontCard}>
              <h3 className={s.frondCardTheme}>{props.firstTheme.gameTheme}</h3>
              <img className={s.frontCardImage} src={process.env.PUBLIC_URL + props.firstTheme.imageUrl} alt="logo"/>
            </div>
        </div>
      </div>
      Main
    </div>
  )
}

export default Main;