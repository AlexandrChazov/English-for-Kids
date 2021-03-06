import {InferActionsTypes} from "./redux-store";

const initialState = {
  audioQuestionSrc: "",
  questionsListSrc: [] as Array<string>,
  answersList: [] as Array<boolean>
}

export const quizReducerActions = {
  setAudioQuestionSrc: (audioSrc:string) => ({type: "quiz/setAudioQuestionSrc", audioSrc}) as const,
  setQuestionsListSrc: (questionsListSrc: Array<string>) => ({type: "quiz/setQuestionsList", questionsListSrc}) as const,
  addUserAnswer: (isAnswerCorrect: boolean) => ({type: "quiz/addUserAnswer", isAnswerCorrect}) as const,
  cleanAnswersList: () => ({type: "quiz/cleanAnswersList"}) as const,
}

const quizReducer = (state:InitialStateType = initialState, action: QuizReducerActionsType): InitialStateType => {
  switch (action.type) {
    case "quiz/setAudioQuestionSrc": {
      return {
        ...state,
        audioQuestionSrc: action.audioSrc
      }
    }
    case "quiz/setQuestionsList": {
      return {
        ...state,
        questionsListSrc: action.questionsListSrc
      }
    }
    case "quiz/addUserAnswer": {
      return {
        ...state,
        answersList: [...state.answersList, action.isAnswerCorrect]
      }
    }
    case "quiz/cleanAnswersList": {
      return {
        ...state,
        answersList: []
      }
    }
  }
  return state
}

export default quizReducer;

type InitialStateType = typeof initialState;
export type QuizReducerActionsType = InferActionsTypes<typeof quizReducerActions>