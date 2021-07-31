import {InferActionsTypes} from "./redux-store";
import cardsBase, {CardsBaseKeysType} from "./cardsBase";
import {Dispatch} from "redux";

const initialState = {
  isNavbarVisible: false,
  arrayOfThemes: [] as Array<CardsBaseKeysType>,
  arrayOfNavbarIconsUrl: [] as Array<string>,
  activeLink: "Main Page" as NavbarLinksType
}

export const navbarReducerActions = {
  makeNavbarVisible: (makeNavbarVisible: boolean) => ({type: "navbar/makeNavbarVisibil", makeNavbarVisible}) as const,
  setArrayOfThemes: (arr: Array<CardsBaseKeysType>) => ({type: "navbar/setArrayOfThemes", arr}) as const,
  setArrayOfNavbarIconsUrl: (arr: Array<string>) => ({type: "navbar/setArrayOfNavbarIconsUrl", arr}) as const,
  setActiveLink: (link: NavbarLinksType) => ({type: "navbar/setActiveLink", link}) as const,
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
    case "navbar/makeNavbarVisibil": {
      return {
        ...state,
        isNavbarVisible: action.makeNavbarVisible
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
    case "navbar/setActiveLink": {
      return {
        ...state,
        activeLink: action.link
      }
    }
  }
  return state
}

export default navbarReducer;

export type NavbarReducerActionsType = InferActionsTypes<typeof navbarReducerActions>;
type InitialStateType = typeof initialState;
export type NavbarLinksType = CardsBaseKeysType | "Statistic" | "Main Page"