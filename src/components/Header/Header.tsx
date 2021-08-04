import styles from "./Header.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./HeaderContainer";
import {useEffect} from "react";

const Header: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  useEffect(() => {
    props.cleanAnswersList()
  }, [props.isQuizRunning])

  const audio = new Audio();

  return (
    <div className={styles.header}>
      <h1>Happy English</h1>
      <div className={styles.gamModeWrapper}>
        <div className={styles.gameMode}
             onClick={() => {
               props.isPlayModeOn
                 ? props.setPlayModeOff()
                 : props.setPlayModeOn()
             }}>
          <div className={`${styles.gameModeTrigger} ${props.isPlayModeOn && styles.play}`}></div>
        </div>
        <div className={styles.gameModeTitle}>
          Train / Play
        </div>
      </div>
      <div className={`${styles.startGameButton} ${props.canISeeRunGameButton || styles.hide}`}>
        <i
          className={`far fa-caret-square-right ${styles["fa-caret-square-right"]} ${props.isPlayModeOn || styles.hide} ${props.isQuizRunning && styles.hide}`}
          onClick={() => {
            props.setIsQuizRunning(true);
            const newArr:Array<string> = [];
            props.arrayOfAudioQuestionsSrc.forEach((el)=> {
              newArr.push(el)
            })
            props.setQuestionsListSrc(newArr);
            const question = newArr.pop();
            props.setQuestionsListSrc(newArr);
            question && props.setAudioQuestionSrc(question)
            audio.src = process.env.PUBLIC_URL + question;
            setTimeout(()=>audio.play(),500);
          }}>
        </i>
        <div onClick={() => {
          audio.src = process.env.PUBLIC_URL + props.audioQuestionSrc;
          setTimeout(()=>audio.play(),500);
        }}>
          <i className={`fas fa-sync-alt ${styles["fa-sync-alt"]} ${props.isQuizRunning || styles.hide}`}></i>
        </div>
      </div>
      <div className={styles.emojiPanel}>
        {
          props.answersList.map((el:boolean, index:number) => {
            return el
              ? <i className="far fa-laugh-beam" key={index}></i>
              : <i className="fas fa-poo" key={index}></i>
          })
        }
      </div>
    </div>
  )
}

export default Header;