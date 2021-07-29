import React from "react";
import s from "./Navbar.module.css";
import {CardsBaseKeysType} from "../../redux/cardsBase";
import {Link} from "react-router-dom";

const ThemeLink: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  return (
    <li className={s.navItem}>
      <img className={s.navIcon} src={process.env.PUBLIC_URL + props.navbarImage} alt={props.theme}/>
      <Link to="/">
        <button className={s.chooseThemeButton}
                onClick={(event) => {
                  props.onButtonClick(event)
                  props.insertTheme(props.theme)
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
  onButtonClick: (event: React.MouseEvent) => void
}

export default ThemeLink;