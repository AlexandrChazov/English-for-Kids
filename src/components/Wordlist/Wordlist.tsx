import styles from "./Wordlist.module.css"
import {MapDispatchPropsType, MapStatePropsType} from "./WordlistContainer";
import {WordsArrayType} from "../../redux/wordlist-reducer";
import {useEffect, useRef} from "react";

const Wordlist: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  useEffect(() => {
    props.setWords(props.wordsArray)
  }, [props.wordsArray])

  const tableBody = useRef(document.createElement("div"))

  function searchWord(event: React.FormEvent<HTMLInputElement>) {
    const tableRows = tableBody.current.querySelectorAll(".tableRow");
    for (let i = 0; i < tableRows.length; i++) {
      if (tableRows[i].children[0].innerHTML.match(new RegExp(event.currentTarget.value, 'i'))
        || tableRows[i].children[1].innerHTML.match(new RegExp(event.currentTarget.value, 'i'))
        || tableRows[i].children[2].innerHTML.match(new RegExp(event.currentTarget.value, 'i')))
      {
        tableRows[i].classList.remove(styles.hide)
      } else {
        tableRows[i].classList.add(styles.hide)
      }
    }
  }

  return (
    <div className={`${props.isWordlistVisible ? "" : styles.hide}`}
         ref={tableBody}>
      <div className={styles.inputContainer}>
        <input type="input"
               className={styles.input}
               placeholder="Search word"
               onChange={searchWord}></input>
      </div>
      <table className={styles.table}>
        <thead>
        <tr>
          <th className={styles.colName}>Theme</th>
          <th className={styles.colName}>Word</th>
          <th className={styles.colName}>Translation</th>
        </tr>
        </thead>
        <tbody>
        {props.wordsArray.map((el: WordsArrayType, index: number) => {
          return (
            <tr className="tableRow" key={index}>
              <th className={styles.colName}>{el.theme}</th>
              <th className={styles.colName}>{el.eng}</th>
              <th className={styles.colName}>{el.rus}</th>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Wordlist;