import React from "react";
import s from "./Navbar.module.css";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {Link} from "react-router-dom";
import {NavbarLinksType} from "../../redux/navbar-reducer";

const ThemeLink: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  return (
    <li className={s.navItem}>
      <img className={s.navIcon} src={process.env.PUBLIC_URL + props.navbarImage} alt={props.theme}/>
      <Link to="/">
        <button className={s.chooseThemeButton}
                onClick={() => {
                  props.setIsQuizRunning(false);
                  props.insertTheme(props.theme);
                  props.setActiveLink(props.theme);
                  props.setCanISeeRunGameButton(true);
                  props.setIsNavbarVisible(false)
                }}>
          {props.theme}
        </button>
      </Link>
    </li>
  )
}

type MapStatePropsType = {
  theme: CardsBaseKeysType
  navbarImage: string
}

type MapDispatchPropsType = {
  insertTheme: (theme: CardsBaseKeysType) => void
  setActiveLink: (link: NavbarLinksType) => void
  setCanISeeRunGameButton: (canISee: boolean) => void
  setIsQuizRunning: (isQuizRunning: boolean) => void
  setIsNavbarVisible: (arg: boolean) => void
}

export default ThemeLink;