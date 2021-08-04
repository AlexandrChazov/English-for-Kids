import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {headerReducerActions, HeaderReducerActionsType} from "../../redux/header-reducer";
import {Dispatch} from "redux";
import {quizReducerActions, QuizReducerActionsType} from "../../redux/quiz-reducer";

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isPlayModeOn: state.header.isPlayModeOn,
    isThemeSelected: state.header.isThemeSelected,
    isQuizRunning: state.header.isQuizRunning,
    canISeeRunGameButton: state.header.canISeeRunGameButton,
    audioQuestionSrc: state.quiz.audioQuestionSrc,
    answersList: state.quiz.answersList,
    arrayOfAudioQuestionsSrc: state.mainPage.arrayOfAudioQuestionsSrc
  }
}

const MapDispatchToProps = (dispatch: Dispatch<HeaderReducerActionsType | QuizReducerActionsType>) => {
  return {
    setPlayModeOn: () => dispatch(headerReducerActions.setPlayModeOn()),
    setPlayModeOff: () => dispatch(headerReducerActions.setPlayModeOff()),
    setIsQuizRunning: (isQuizRunning: boolean) => dispatch(headerReducerActions.setIsQuizRunning(isQuizRunning)),
    setQuestionsListSrc: (questionsListSrc: Array<string>) => dispatch(quizReducerActions.setQuestionsListSrc(questionsListSrc)),
    setAudioQuestionSrc: (audioSrc:string) => dispatch(quizReducerActions.setAudioQuestionSrc(audioSrc)),
    cleanAnswersList: () => dispatch(quizReducerActions.cleanAnswersList()),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header);

export type MapStatePropsType = {
  isPlayModeOn: boolean,
  isThemeSelected: boolean,
  isQuizRunning: boolean,
  canISeeRunGameButton: boolean,
  audioQuestionSrc: string,
  answersList: Array<boolean>,
  arrayOfAudioQuestionsSrc: Array<string>
}

export type MapDispatchPropsType = {
  setPlayModeOn: () => void
  setPlayModeOff: () => void
  setIsQuizRunning: (isQuizRunning: boolean) => void
  setQuestionsListSrc: (questionsListSrc: Array<string>) => void
  setAudioQuestionSrc: (audioSrc:string) => void
  cleanAnswersList: () => void
}