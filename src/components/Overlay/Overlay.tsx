import {MapDispatchPropsType, MapStatePropsType} from "./OverlayContainer";
import styles from "./Overlay.module.css";

export const Overlay: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  return <div className={`${styles.overlay} ${props.isNavbarVisible || styles.hide}`}
              onClick={() => {
                props.makeNavbarVisibile(false)
              }}></div>
}

export default Overlay;