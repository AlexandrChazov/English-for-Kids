import React from "react";
import s from "./Navbar.module.css";
import {CardsBaseKeysType} from "../../redux/cardsBase";

const ThemeLink: React.FC<NavItemMapProps & NavItemDispatchProps> = (props) => {
  return (
    <li className={s.navItem}>
      <img className={s.navIcon} src={process.env.PUBLIC_URL + props.navbarImage} alt={props.theme}/>
      <button className={s.chooseThemeButton}
              onClick={(event) => {
                props.onButtonClick(event)
                props.insertTheme(props.theme)
              }}>
        {props.theme}
      </button>
    </li>
  )
}

type NavItemMapProps = {
  theme: CardsBaseKeysType
  navbarImage: string
}

type NavItemDispatchProps = {
  insertTheme: (theme: CardsBaseKeysType) => void
  onButtonClick: (event: React.MouseEvent) => void
}

export default ThemeLink;