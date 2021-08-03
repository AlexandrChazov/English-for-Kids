import React, {useEffect} from "react";
import s from "./Main.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MainContainer";
import Card from "./Card";

const Main: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

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
    <div className={s.main}>
      <div className={s.cardsWrapper}>
        <div className={s.cardsGrid}>
          {props.cardsInfo.map((el, index) => {
            return el &&
              <div key={index}
                   onClick ={()=>{
                     if (el.gameTheme) {
                       props.insertTheme(el.gameTheme);
                       props.setActiveLink(el.gameTheme);
                     }
                     props.setCanISeeRunGameButton(true);
                     if (props.isQuizRunning) {
                        if (el.audioSrc === props.audioQuestionSrc) {
                          audioEffect.src = process.env.PUBLIC_URL + '/audio/correctAnswer.mp3';
                          audioEffect.play();
                          props.setAnswersList(true);
                          const newArr:Array<string> = [];
                          props.questionsListSrc.map((el)=> {
                            newArr.push(el)
                          });
                          props.setQuestionsListSrc(newArr);
                          const question = newArr.pop();
                          question && props.setAudioQuestionSrc(question)
                          setTimeout(()=> {
                            audioQuestion.src = process.env.PUBLIC_URL + question;
                            audioQuestion.play()
                          },1000);
                        } else {
                          audioEffect.src = process.env.PUBLIC_URL + '/audio/incorrectAnswer.mp3';
                          audioEffect.play();
                          props.setAnswersList(false)
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
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Main;
