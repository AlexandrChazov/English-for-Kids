import styles from "./Header.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./HeaderContainer";

const Header: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

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
      <div className={`${styles.startGameButton} ${props.canISeeRunGameButton || styles.hide}`}>
        <i
          className={`far fa-caret-square-right ${styles["fa-caret-square-right"]} ${props.isPlayModeOn || styles.hide} ${props.isQuizRunning && styles.hide}`}
          onClick={() => {
            props.setIsQuizRunning(true)
          }}>
        </i>
        <i className={`fas fa-sync-alt ${styles["fa-sync-alt"]} ${props.isQuizRunning || styles.hide}`}></i>
      </div>
      <div className={styles.emojiPanel}></div>
    </div>
  )
}

export default Header;