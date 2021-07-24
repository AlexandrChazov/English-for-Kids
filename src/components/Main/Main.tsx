import React, {useEffect} from "react";
import s from "./Main.module.css";
import style from "./Card.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MainContainer";

const Main: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  useEffect(() => {
    props.setThemes()
  }, [])

  return (
    <div className={s.main}>
      <div className={s.cardsWrapper}>
        <div className={s.cardsGrid}>
          {props.cardsInfo.map((el) => {
            return <Card gameTheme={el.gameTheme} imageUrl={el.imageUrl}/>
          })}
        </div>
      </div>
    </div>
  )
}

const Card: React.FC<CardMapStatePropsType> = (props) => {
  return (
    <div className={style.flipEffect}>
      <div className={style.frontCard}>
        <h3 className={style.frontCardTheme}>{props.gameTheme}</h3>
        <img className={style.frontCardImage} src={process.env.PUBLIC_URL + props.imageUrl} alt="logo"/>
      </div>
    </div>
  )
}

type CardMapStatePropsType = {
  gameTheme: string
  imageUrl: string
}

export default Main;
