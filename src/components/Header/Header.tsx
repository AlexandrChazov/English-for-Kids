import styles from "./Header.module.css";
import {MapDispatchType, MapStateType} from "./HeaderContainer";

const Header: React.FC<MapStateType & MapDispatchType> = (props) => {

  return (
    <div className={styles.header}>
      <h1>Happy English</h1>
      <div className={styles.gamModeWrapper}>
        <div className={styles.gameMode}
             onClick={() => {
               props.isPlayModeOn
                 ? props.setPlayModeOff()
                 : props.setPlayModeOn()
             }}>
          <div className={`${styles.gameModeTrigger} ${props.isPlayModeOn && styles.play}`}></div>
        </div>
        <div className={styles.gameModeTitle}>
          Train / Play
        </div>
      </div>
      <div className={styles.startGameButton}>
        <i
          className={`far fa-caret-square-right ${styles["fa-caret-square-right"]} ${props.isPlayModeOn || styles.hide} ${props.isQuizRunning && styles.hide}`}
          onClick={() => {
            props.startQuiz()
          }}>
        </i>
        <i className={`fas fa-sync-alt ${styles["fa-sync-alt"]} ${props.isQuizRunning || styles.hide}`}></i>
      </div>
      <div className={styles.emojiPanel}></div>
    </div>
  )
}

export default Header;