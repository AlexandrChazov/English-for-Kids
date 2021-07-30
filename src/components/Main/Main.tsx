import React, {useEffect} from "react";
import s from "./Main.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MainContainer";
import Card from "./Card";

const Main: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  useEffect(() => {
    props.setThemes(props.arrayOfThemes)
  }, [props.arrayOfThemes])

  return (
    <div className={s.main}>
      <div className={s.cardsWrapper}>
        <div className={s.cardsGrid}>
          {props.cardsInfo.map((el, index) => {
            return el &&
              <div key={index}
                   onClick ={()=>{
                     el.gameTheme && props.insertTheme(el.gameTheme);
                     props.setCanISeeRunGameButton(true)
                   }}>
                <Card
                  gameTheme={el.gameTheme}
                  wordInEnglish={el.wordInEnglish}
                  wordInRussian={el.wordInRussian}
                  imageUrl={el.imageUrl}
                  audioSrc={el.audioSrc}
                  isPlayModeOn={props.isPlayModeOn}/>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Main;
