import {InferActionsTypes} from "./redux-store";

const initialState = {
  isNavbarShown: false
}

export const navbarReducerActions = {
  hideNavbar: () => ({type: "navbar/hideNavbar"}) as const,
  changeNavbarVisibility: (arg: boolean) => ({type: "navbar/changeNavbarVisibility", isNavbarShown: arg}) as const,
}

const navbarReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
  }
  return state
}

export default navbarReducer;

type ActionsType = InferActionsTypes<typeof navbarReducerActions>;
type InitialStateType = typeof initialState