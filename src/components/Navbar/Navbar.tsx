import React, {useEffect} from "react";
import s from "./Navbar.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./NavbarContainer";
import {NavbarLinksType} from "../../redux/navbar-reducer";

const Navbar: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  function changeParameters(canISeeRunGameButton: boolean,
                            activeLink: NavbarLinksType,
                            isMainPageVisible: boolean,
                            isStatisticPageVisible: boolean) {
    props.setIsQuizRunning(false);
    props.setIsNavbarVisible(false);

    props.setCanISeeRunGameButton(canISeeRunGameButton);
    props.setActiveLink(activeLink);
    props.setIsMainPageVisible(isMainPageVisible);
    props.setIsStatisticPageVisible(isStatisticPageVisible);
  }

  useEffect(() => {
    props.getArrayOfThemes();
    props.getArrayOfNavbarIconsUrl();
  }, [])

  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((el: HTMLButtonElement) => {
      el.classList.remove(s.active);
      if (el.innerText === props.activeLink) {
        el.classList.add(s.active)
      }
    });
  }, [props.activeLink])

  return (
    <div className={`${s.navbar} ${props.isNavbarVisible || s.navbarToLeft}`}>
      <div className={`${s.hamburgerMenu} ${props.isNavbarVisible && s.hamburgerMenuToRight}`}
           onClick={() => {
             props.setIsNavbarVisible(!props.isNavbarVisible);
           }}>
        <div className={`${s.line} ${props.isNavbarVisible && s.line1}`}></div>
        <div className={`${s.line} ${props.isNavbarVisible && s.line2}`}></div>
        <div className={`${s.line} ${props.isNavbarVisible && s.line3}`}></div>
      </div>

      <ul className={s.navList}>
        <li className={s.navItem} key={"navbar0"}>
          <button className={s.chooseThemeButton}
                  onClick={() => {
                    changeParameters(false, "Main Page", true, false);
                    props.setMainPageCards(props.arrayOfThemes);
                  }}>
            Main Page
          </button>
        </li>

        {props.arrayOfThemes.map((theme, index) => {
          return (
            <li className={s.navItem} key={index}>
              <img className={s.navIcon} src={process.env.PUBLIC_URL + props.arrayOfNavbarIconsUrl[index]} alt={theme}/>
              <button className={s.chooseThemeButton}
                      onClick={() => {
                        changeParameters(true, theme, true, false)
                        props.insertTheme(theme);
                      }}>
                {theme}
              </button>
            </li>
          )
        })}

        <li className={s.navItem}  key={"navbar1"}>
          <button className={s.chooseThemeButton}
                  onClick={() => {
                    changeParameters(false, "Wordlist", false, true)
                  }}>
            Wordlist
          </button>
        </li>

      </ul>
    </div>
  )
}

export default Navbar;