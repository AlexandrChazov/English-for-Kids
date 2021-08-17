import {headerReducer, headerReducerActions, InitialStateType} from "./header-reducer";

const state: InitialStateType = {
  isPlayModeOn: false,
  isThemeSelected: false,
  isQuizRunning: false,
  canISeeRunGameButton: false
}

describe("headerReducer test",()=> {

  test("setPlayModeOn", () => {
    const newState = headerReducer(state, headerReducerActions.setPlayModeOn());
    expect(newState.isPlayModeOn).toBeTruthy();
  })

  test("setPlayModeOff", () => {
    const newState = headerReducer(state, headerReducerActions.setPlayModeOff());
    expect (newState.isPlayModeOn).toBeFalsy();
    expect (newState.isQuizRunning).toBeFalsy();
  })

  test("setIsQuizRunning", () => {
    let newState = headerReducer(state, headerReducerActions.setIsQuizRunning(true));
    expect (newState.isQuizRunning).toBeTruthy();
    newState = headerReducer(state, headerReducerActions.setIsQuizRunning(false));
    expect (newState.isQuizRunning).toBeFalsy();
  })

  test("setCanISeeRunGameButton", () => {
    let newState = headerReducer(state, headerReducerActions.setCanISeeRunGameButton(true));
    expect (newState.canISeeRunGameButton).toBeTruthy();
    newState = headerReducer(state, headerReducerActions.setCanISeeRunGameButton(false));
    expect (newState.canISeeRunGameButton).toBeFalsy();
  })
})