import React, {useRef} from "react";
import {CardInfoType} from "../../redux/main-reducer";
import style from "./Card.module.css";

const Card: React.FC<CardInfoType> = (props) => {

  const cardRef = useRef(document.createElement("div"))
  const audio = new Audio();
  audio.src = process.env.PUBLIC_URL + props.audioSrc;

  return (
    <div onMouseLeave={() => cardRef.current.style.transform = ""}>
      <div className={style.flipEffect}
           ref={cardRef}>
        <div className={style.frontCard}>
          <h3 className={style.frontCardTheme}>{props.gameTheme}</h3>
          <img className={style.frontCardImage}
               src={process.env.PUBLIC_URL + props.imageUrl}
               alt={props.wordInEnglish || props.gameTheme}/>
          <h5 className={style.wordInEnglish}>{props.wordInEnglish}</h5>
          <div className={style.readAWordButton + (props.gameTheme ? style.hide : '')}
               onClick={() => audio.play()}>
            <i className={"fas fa-volume-up" + (props.gameTheme ? style.hide : '')}></i>
          </div>
          <div className={style.reverseCardButton + (props.gameTheme ? style.hide : '')}
            // @ts-ignore todo
               onClick={() => cardRef.current.style.transform = "rotateY(180deg)"}>
            <i className={"fas fa-reply" + (props.gameTheme ? style.hide : '')}></i>
          </div>
        </div>
        <div className={style.backCard}>
          <img className={style.backCardImage}
               src={process.env.PUBLIC_URL + props.imageUrl}
               alt={props.wordInEnglish}/>
          <h5 className={style.wordInRussian}>{props.wordInRussian}</h5>
        </div>
        <div className={style.cardOverlay + style.hide}></div>
      </div>
    </div>

  )
}

export default Card;