import styles from "./Wordlist.module.css"
import {MapDispatchPropsType, MapStatePropsType} from "./WordlistContainer";
import {WordsArrayType} from "../../redux/wordlist-reducer";
import {useEffect} from "react";

const Wordlist: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  useEffect(() => {
    props.setWords(props.wordsArray)
  }, [props.wordsArray])

  return (
    <table className={`${styles.table} ${props.isStatisticPageVisible || styles.hide}`}>
      <thead className="thead">
      <tr className="thead">
        <th className={styles.colName}>Theme</th>
        <th className={styles.colName}>Word</th>
        <th className={styles.colName}>Translation</th>
      </tr>
      </thead>
      <tbody className="tbody">
      {props.wordsArray.map((el:WordsArrayType, index: number) => {
          return (
            <tr className="thead" key={index}>
              <th className={styles.colName}>{el.theme}</th>
              <th className={styles.colName}>{el.eng}</th>
              <th className={styles.colName}>{el.rus}</th>
            </tr>
          )
      })}
      </tbody>
    </table>
  )
}

export default Wordlist;