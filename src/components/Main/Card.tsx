import React, {useRef} from "react";
import styles from "./Card.module.css";
import {CardsBaseKeysType} from "../../redux/cardsBase";

const Card: React.FC<CardType> = (props) => {

  const cardRef = useRef(document.createElement("div"))

  return (
    <div onMouseLeave={() => cardRef.current.style.transform = ""}>
      <div className={styles.flipEffect}
           ref={cardRef}>
        <div className={styles.frontCard}>
          <h3 className={styles.frontCardTheme}>{props.gameTheme}</h3>
          <img className={styles.frontCardImage}
               src={process.env.PUBLIC_URL + props.imageUrl}
               alt={props.wordInEnglish || props.gameTheme}/>
          <h5 className={`${styles.wordInEnglish} ${props.isPlayModeOn && styles.hide}`}>{props.wordInEnglish}</h5>
          <div className={`${styles.readAWordButton} ${props.gameTheme || props.isPlayModeOn ? styles.hide : ''}`}
               onClick={() => {
                 props.audioQuestion.src = process.env.PUBLIC_URL + props.audioSrc;
                 props.audioQuestion.play()
               }}>
            <i className="fas fa-volume-up"></i>
          </div>
          <div className={`${styles.reverseCardButton} ${props.gameTheme || props.isPlayModeOn ? styles.hide : ''}`}
               onClick={() => cardRef.current.style.transform = "rotateY(180deg)"}>
            <i className="fas fa-reply"></i>
          </div>
        </div>
        <div className={styles.backCard}>
          <img className={styles.backCardImage}
               src={process.env.PUBLIC_URL + props.imageUrl}
               alt={props.wordInEnglish}/>
          <h5 className={styles.wordInRussian}>{props.wordInRussian}</h5>
        </div>
        <div className={`${styles.cardOverlay} + ${styles.hide}`}></div>
      </div>
    </div>
  )
}

export default Card;

type CardType = {
  wordInEnglish: string
  wordInRussian: string
  imageUrl: string
  audioSrc: string
  gameTheme?: CardsBaseKeysType
  isPlayModeOn: boolean
  audioQuestion: HTMLAudioElement
};