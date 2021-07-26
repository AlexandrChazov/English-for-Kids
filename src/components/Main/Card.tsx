import React from "react";
import {CardInfoType} from "../../redux/main-reducer";
import style from "./Card.module.css";

const Card: React.FC<CardInfoType> = (props) => {
  return (
    <div className={style.flipEffect}>
      <div className={style.frontCard}>
        <h3 className={style.frontCardTheme}>{props.gameTheme}</h3>
        <img className={style.frontCardImage} src={process.env.PUBLIC_URL + props.imageUrl} alt="logo"/>
        <h5 className={style.wordInEnglish}>{props.wordInEnglish}</h5>
        <div className={style.readAWordButton + (props.gameTheme ? style.hide : '')}>
          <i className={"fas fa-volume-up" + (props.gameTheme ? style.hide : '')}></i>
        </div>
        <div className={style.reverseCardButton + (props.gameTheme ? style.hide : '')}>
          <i className={"fas fa-reply" + (props.gameTheme ? style.hide : '')}></i>
        </div>
      </div>
      <div className={style.backCard}>
        <img className={style.backCardImage} src={process.env.PUBLIC_URL + props.imageUrl} alt="logo"/>
        <h5 className={style.wordInRussian}>{props.wordInRussian}</h5>
      </div>
      <div className={style.cardOverlay + style.hide}></div>
    </div>
  )
}

export default Card;