import {InferActionsTypes} from "./redux-store";
import cardsBase, {CardsBaseKeysType} from "./cardsBase";
import {Dispatch} from "redux";

const initialState = {
  isNavbarShown: false,
  arrayOfThemes: [] as Array<CardsBaseKeysType>,
  arrayOfNavbarIconsUrl: [] as Array<string>
}

export const navbarReducerActions = {
  hideNavbar: () => ({type: "navbar/hideNavbar"}) as const,
  changeNavbarVisibility: (arg: boolean) => ({type: "navbar/changeNavbarVisibility", isNavbarShown: arg}) as const,
  setArrayOfThemes: (arr: Array<CardsBaseKeysType>) => ({type: "navbar/setArrayOfThemes", arr}) as const,
  setArrayOfNavbarIconsUrl: (arr: Array<string>) => ({type: "navbar/setArrayOfNavbarIconsUrl", arr}) as const
}

export const getArrayOfThemes = (dispatch: Dispatch<NavbarReducerActionsType>) => {
    const arrayOfThemes = Object.keys(cardsBase) as Array<CardsBaseKeysType>;
    dispatch(navbarReducerActions.setArrayOfThemes(arrayOfThemes))
}

export const getArrayOfNavbarIconsUrl = (dispatch: Dispatch<NavbarReducerActionsType>) => {
  const arrayOfNavbarIconsUrl = [] as Array<string>;
  Object.values(cardsBase).forEach((el) => {
    arrayOfNavbarIconsUrl.push(el.navbarImage)
  })
  dispatch(navbarReducerActions.setArrayOfNavbarIconsUrl(arrayOfNavbarIconsUrl))
}

const navbarReducer = (state = initialState, action: NavbarReducerActionsType): InitialStateType => {
  switch (action.type) {
    case "navbar/hideNavbar": {
      return {
        ...state,
        isNavbarShown: false
      }
    }
    case "navbar/changeNavbarVisibility": {
      return {
        ...state,
        isNavbarShown: action.isNavbarShown
      }
    }
    case "navbar/setArrayOfThemes": {
      return {
        ...state,
        arrayOfThemes: action.arr
      }
    }
    case "navbar/setArrayOfNavbarIconsUrl": {
      return {
        ...state,
        arrayOfNavbarIconsUrl: action.arr
      }
    }
  }
  return state
}

export default navbarReducer;

export type NavbarReducerActionsType = InferActionsTypes<typeof navbarReducerActions>;
type InitialStateType = typeof initialState