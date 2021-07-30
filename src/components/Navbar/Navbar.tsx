import React, {useEffect} from "react";
import s from "./Navbar.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./NavbarContainer";
import ThemeLink from "./ThemeLink";
import {Link} from "react-router-dom";

const Navbar: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  useEffect(() => {
    props.hideNavbar();
    props.getArrayOfThemes();
    props.getArrayOfNavbarIconsUrl();
  }, [])

  function setActiveLink(event: React.MouseEvent) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((el: HTMLButtonElement) => el.classList.remove(s.active));
    event && event.currentTarget.classList.add(s.active);
    props.setIsQuizRunning(false);
  }

  return (
    <div className={`${s.navbar} ${props.isNavbarShown || s.navbarToLeft}`}>
      <div className={`${s.hamburgerMenu} ${props.isNavbarShown && s.hamburgerMenuToRight}`}
           onClick={() => {
             props.changeNavbarVisibility(!props.isNavbarShown)
           }}>
        <div className={`${s.line} ${props.isNavbarShown && s.line1}`}></div>
        <div className={`${s.line} ${props.isNavbarShown && s.line2}`}></div>
        <div className={`${s.line} ${props.isNavbarShown && s.line3}`}></div>
      </div>

      <ul className={s.navList}>
        <li className={s.navItem}>
          <Link to="/">
            <button className={s.chooseThemeButton}
                    onClick={(event) => {
                      setActiveLink(event)
                      props.setMainPageCards(props.arrayOfThemes);
                      props.setCanISeeRunGameButton(false);
                    }}>
              Main Page
            </button>
          </Link>

        </li>

        {props.arrayOfThemes.map((theme, index) => {
          return <ThemeLink
            key={index}
            theme={theme}
            navbarImage={props.arrayOfNavbarIconsUrl[index]}
            insertTheme={props.insertTheme}
            setActiveLink={setActiveLink}
            setCanISeeRunGameButton={props.setCanISeeRunGameButton}/>
        })}

        <li className={s.navItem}>
          <Link to="/Statistic">
            <button className={s.chooseThemeButton}
                    onClick={(event) => {
                      setActiveLink(event);
                      props.setCanISeeRunGameButton(false)
                    }}>
              Statistic
            </button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;