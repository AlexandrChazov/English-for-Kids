import React, {useRef} from "react";
import style from "./Card.module.css";
import {CardsBaseKeysType} from "../../redux/cardsBase";

const Card: React.FC<CardType> = (props) => {

  const cardRef = useRef(document.createElement("div"))

  return (
    <div onMouseLeave={() => cardRef.current.style.transform = ""}>
      <div className={style.flipEffect}
           ref={cardRef}>
        <div className={style.frontCard}>
          <h3 className={style.frontCardTheme}>{props.gameTheme}</h3>
          <img className={style.frontCardImage}
               src={process.env.PUBLIC_URL + props.imageUrl}
               alt={props.wordInEnglish || props.gameTheme}/>
          <h5 className={`${style.wordInEnglish} ${props.isPlayModeOn && style.hide}`}>{props.wordInEnglish}</h5>
          <div className={style.readAWordButton + (props.gameTheme || props.isPlayModeOn ? style.hide : '')}
               onClick={() => {
                 props.audio.src = process.env.PUBLIC_URL + props.audioSrc;
                 props.audio.play()
               }}>
            <i className={"fas fa-volume-up" + (props.gameTheme || props.isPlayModeOn ? style.hide : '')}></i>
          </div>
          <div className={style.reverseCardButton + (props.gameTheme || props.isPlayModeOn ? style.hide : '')}
            // @ts-ignore todo
               onClick={() => cardRef.current.style.transform = "rotateY(180deg)"}>
            <i className={"fas fa-reply" + (props.gameTheme || props.isPlayModeOn ? style.hide : '')}></i>
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

type CardType = {
  wordInEnglish: string,
  wordInRussian: string,
  imageUrl: string,
  audioSrc: string,
  gameTheme?: CardsBaseKeysType,
  isPlayModeOn: boolean
  audio: HTMLAudioElement
};