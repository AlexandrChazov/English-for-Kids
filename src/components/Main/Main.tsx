import s from "./Main.module.css";
import logo from "../../assets/images/actions/actions.png"

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.cardsWrapper}>
        <div className={s.cardsGrid}>
          <div className={s.flipEffect}>
            <div className={s.frontCard}>
              <h3 className={s.frondCardTheme}>dfdfdf</h3>
              <img className={s.frontCardImage} src={logo}/>
            </div>
            <div className={s.backCard}>

            </div>
            <div className={s.cardOverlay}>

            </div>
          </div>
        </div>
      </div>
      Main
    </div>
  )
}

export default Main;