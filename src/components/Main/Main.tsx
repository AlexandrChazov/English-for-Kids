import React, {useEffect} from "react";
import styles from "./Main.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MainContainer";
import Card from "./Card";

const Main: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  useEffect(() => {
    const overlays = document.querySelectorAll(`.${styles.cardOverlay}`);
    overlays.forEach((el)=> {
      el.className = `${styles.hide}`
    })
  },[props.isQuizRunning])

  useEffect(() => {
    props.setMainPageCards(props.arrayOfThemes);
    if (props.activeLink !== "Statistic" && props.activeLink !== "Main Page") {
      props.insertTheme(props.activeLink)
    }
    props.setCanISeeRunGameButton(false);
  }, [props.arrayOfThemes])

  const audioQuestion = new Audio();
  const audioEffect = new Audio();

  return (
    <div className={styles.main}>
      <div className={styles.cardsWrapper}>
        <div className={styles.cardsGrid}>
          {props.cardsInfo.map((el, index) => {
            return el &&
              <div key={index}
                   className={styles.x}
                   onClick={(event) => {
                     if (el.gameTheme) {
                       props.insertTheme(el.gameTheme);
                       props.setActiveLink(el.gameTheme);
                     }
                     props.setCanISeeRunGameButton(true);
                     if (props.isQuizRunning) {
                       if (el.audioSrc === props.audioQuestionSrc) {
                         event.currentTarget.children[1].className = `${styles.cardOverlay}`;
                         audioEffect.src = process.env.PUBLIC_URL + '/audio/correctAnswer.mp3';
                         audioEffect.play();
                         props.addUserAnswer(true);
                         const newArr: Array<string> = [];
                         props.questionsListSrc.map((el) => {
                           newArr.push(el)
                         });
                         props.setQuestionsListSrc(newArr);
                         const question = newArr.pop();
                         question && props.setAudioQuestionSrc(question)
                         setTimeout(() => {
                           audioQuestion.src = process.env.PUBLIC_URL + question;
                           audioQuestion.play()
                         }, 1000);
                       } else {
                         audioEffect.src = process.env.PUBLIC_URL + '/audio/incorrectAnswer.mp3';
                         audioEffect.play();
                         props.addUserAnswer(false)
                       }
                     }
                   }}>
                <Card
                  gameTheme={el.gameTheme}
                  wordInEnglish={el.wordInEnglish}
                  wordInRussian={el.wordInRussian}
                  imageUrl={el.imageUrl}
                  audioSrc={el.audioSrc}
                  audioQuestion={audioQuestion}
                  isPlayModeOn={props.isPlayModeOn}/>
                <div className={styles.hide}></div>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Main;
