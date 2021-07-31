import React, {useEffect} from "react";
import s from "./Navbar.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./NavbarContainer";
import ThemeLink from "./ThemeLink";
import {Link} from "react-router-dom";

const Navbar: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  useEffect(() => {
    props.makeNavbarVisible(false);
    props.getArrayOfThemes();
    props.getArrayOfNavbarIconsUrl();
  }, [])

  useEffect(() => {
    changeActiveLink();
  },[props.activeLink])

  function changeActiveLink() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((el: HTMLButtonElement) => {
      el.classList.remove(s.active);
      if (el.innerText === props.activeLink) {
        el.classList.add(s.active)
      }
    });
  }

  return (
    <div className={`${s.navbar} ${props.isNavbarVisible || s.navbarToLeft}`}>
      <div className={`${s.hamburgerMenu} ${props.isNavbarVisible && s.hamburgerMenuToRight}`}
           onClick={() => {
             props.makeNavbarVisible(!props.isNavbarVisible);
           }}>
        <div className={`${s.line} ${props.isNavbarVisible && s.line1}`}></div>
        <div className={`${s.line} ${props.isNavbarVisible && s.line2}`}></div>
        <div className={`${s.line} ${props.isNavbarVisible && s.line3}`}></div>
      </div>

      <ul className={s.navList}>
        <li className={s.navItem}>
          <Link to="/">
            <button className={s.chooseThemeButton}
                    onClick={(event) => {
                      props.setIsQuizRunning(false);
                      props.setMainPageCards(props.arrayOfThemes);
                      props.setCanISeeRunGameButton(false);
                      props.setActiveLink("Main Page");
                      props.makeNavbarVisible(false)
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
            setIsQuizRunning={props.setIsQuizRunning}
            setActiveLink={props.setActiveLink}
            makeNavbarVisible={props.makeNavbarVisible}
            setCanISeeRunGameButton={props.setCanISeeRunGameButton}/>
        })}

        <li className={s.navItem}>
          <Link to="/Statistic">
            <button className={s.chooseThemeButton}
                    onClick={(event) => {
                      props.setIsQuizRunning(false);
                      props.setCanISeeRunGameButton(false);
                      props.setActiveLink("Statistic");
                      props.makeNavbarVisible(false)
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