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

  const audio = new Audio();

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
                     props.setCanISeeRunGameButton(true)
                   }}>
                <Card
                  gameTheme={el.gameTheme}
                  wordInEnglish={el.wordInEnglish}
                  wordInRussian={el.wordInRussian}
                  imageUrl={el.imageUrl}
                  audioSrc={el.audioSrc}
                  audio={audio}
                  isPlayModeOn={props.isPlayModeOn}/>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Main;
