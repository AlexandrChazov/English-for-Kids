import {MainReducerActionsType, CardInfoType, mainReducerActions} from "../../redux/main-reducer";
import {HeaderReducerActionsType} from "../../redux/header-reducer";
import {connect} from "react-redux";
import Main from "./Main";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {headerReducerActions} from "../../redux/header-reducer";
import {NavbarLinksType, navbarReducerActions, NavbarReducerActionsType} from "../../redux/navbar-reducer";
import {quizReducerActions, QuizReducerActionsType} from "../../redux/quiz-reducer";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    cardsInfo: [
      state.main.cardsInfo[0],
      state.main.cardsInfo[1],
      state.main.cardsInfo[2],
      state.main.cardsInfo[3],
      state.main.cardsInfo[4],
      state.main.cardsInfo[5],
      state.main.cardsInfo[6],
      state.main.cardsInfo[7]
    ],
    arrayOfThemes: state.navbar.arrayOfThemes,
    isPlayModeOn: state.header.isPlayModeOn,
    isQuizRunning: state.header.isQuizRunning,
    activeLink: state.navbar.activeLink,
    audioQuestionSrc: state.quiz.audioQuestionSrc,
    questionsListSrc: state.quiz.questionsListSrc,
    isMainPageVisible: state.main.isMainPageVisible,
    answersList: state.quiz.answersList
  }
}

const MapDispatchToProps = (dispatch: Dispatch<MainReducerActionsType | HeaderReducerActionsType | NavbarReducerActionsType | QuizReducerActionsType>) => {
  return {
    setMainPageCards: (arr: Array<CardsBaseKeysType>) => {
      dispatch(mainReducerActions.setMainPageCards(arr))
    },
    insertTheme: (theme: CardsBaseKeysType) => {
      dispatch(mainReducerActions.insertTheme(theme))
    },
    setCanISeeRunGameButton: (canISee: boolean) => {
      dispatch(headerReducerActions.setCanISeeRunGameButton(canISee))
    },
    setActiveLink: (link: NavbarLinksType) => dispatch(navbarReducerActions.setActiveLink(link)),
    addUserAnswer: (isAnswerCorrect: boolean) => dispatch(quizReducerActions.addUserAnswer(isAnswerCorrect)),
    setQuestionsListSrc: (questionsListSrc: Array<string>) => dispatch(quizReducerActions.setQuestionsListSrc(questionsListSrc)),
    setAudioQuestionSrc: (audioSrc:string) => dispatch(quizReducerActions.setAudioQuestionSrc(audioSrc))
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(MapStateToProps, MapDispatchToProps)
)(Main)

export type MapStatePropsType = {
  cardsInfo: Array<CardInfoType>
  arrayOfThemes: Array<CardsBaseKeysType>
  isPlayModeOn: boolean
  activeLink: NavbarLinksType
  audioQuestionSrc: string
  isQuizRunning: boolean
  questionsListSrc: Array<string>
  isMainPageVisible: boolean
  answersList: Array<boolean>
}

export type MapDispatchPropsType = {
  setMainPageCards: (arr: Array<CardsBaseKeysType>) => void
  insertTheme: (theme: CardsBaseKeysType) => void
  setCanISeeRunGameButton: (canISee: boolean) => void
  setActiveLink: (link: NavbarLinksType) => void
  addUserAnswer: (isAnswerCorrect: boolean) => void
  setQuestionsListSrc: (questionsListSrc: Array<string>) => void
  setAudioQuestionSrc: (audioSrc:string) => void
}


type OwnPropsType = {}