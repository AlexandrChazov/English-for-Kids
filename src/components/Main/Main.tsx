import React, {useEffect, useRef, useState} from "react";
import styles from "./Main.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MainContainer";
import Card from "./Card";

const Main: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  const victoryImage = useRef(document.createElement("img"));
  const losingImage = useRef(document.createElement("img"));
  const cardsGrid = useRef(document.createElement("div"));
  const mistakesWrapper = useRef(document.createElement("div"));

  const [mistakesQuantity, setMistakesQuantity] = useState(0)

  useEffect(() => {
    const overlays = document.querySelectorAll(`.${styles.cardOverlay}`);
    overlays.forEach((el) => {
      el.className = `${styles.hide}`
    })
  }, [props.isQuizRunning])

  useEffect(() => {
    props.setMainPageCards(props.arrayOfThemes);
    if (props.activeLink !== "Wordlist" && props.activeLink !== "Main Page") {
      props.insertTheme(props.activeLink)
    }
    props.setCanISeeRunGameButton(false);
  }, [props.arrayOfThemes])

  const audioQuestion = new Audio();
  const audioEffect = new Audio();

  return (
    <div className={`${styles.main} ${props.isMainPageVisible || styles.hide}`}>
      <div className={styles.cardsWrapper}>
        <div className={styles.cardsGrid}
             ref={cardsGrid}>
          {props.cardsInfo.map((el, index) => {
            return el &&
              <div key={index}
                   className={styles.cardContainer}
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
                         props.questionsListSrc.forEach((el) => {
                           newArr.push(el)
                         });
                         props.setQuestionsListSrc(newArr);
                         const question = newArr.pop();
                         if (question) {
                           props.setAudioQuestionSrc(question);
                           setTimeout(() => {
                             audioQuestion.src = process.env.PUBLIC_URL + question;
                             audioQuestion.play()
                           }, 1000);
                         } else {
                           setTimeout(() => {
                             if (props.answersList.includes(false)) {
                               audioEffect.src = process.env.PUBLIC_URL + `/audio/losing.mp3`;
                               cardsGrid.current.classList.add(styles.hide);
                               losingImage.current.classList.remove(styles.hide);
                               mistakesWrapper.current.classList.remove(styles.hide);
                               setTimeout(() => {
                                 window.location.reload();
                               }, 4000);
                             } else {
                               audioEffect.src = process.env.PUBLIC_URL + `/audio/victory.mp3`;
                               cardsGrid.current.classList.add(styles.hide);
                               victoryImage.current.classList.remove(styles.hide);
                               setTimeout(() => {
                                 window.location.reload();
                               }, 4000);
                             }
                             audioEffect.play()
                           }, 1000);
                         }
                       } else {
                         setMistakesQuantity(mistakesQuantity + 1)
                         audioEffect.src = process.env.PUBLIC_URL + '/audio/inCorrectAnswer.mp3';
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
        <img className={styles.endGameImage + " " + styles.hide}
             src={process.env.PUBLIC_URL + `/images/winning.png`}
             alt="snowman"
             ref={victoryImage}></img>
        <img className={styles.endGameImage + " " + styles.hide}
             src={process.env.PUBLIC_URL + `/images/losing2.png`}
             alt="funnyMan"
             ref={losingImage}></img>
        <div className={styles.mistakesWrapper + " " + styles.hide}
             ref={mistakesWrapper}>
          {mistakesQuantity === 1
            ? `Oh my dear friend, you made ${mistakesQuantity} mistake`
            : `Oh my dear friend, you made ${mistakesQuantity} mistakes`}
        </div>
      </div>
    </div>
  )
}

export default Main;
