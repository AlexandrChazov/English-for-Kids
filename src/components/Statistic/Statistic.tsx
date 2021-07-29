import styles from "./Statistic.module.css"

const Statistic = () => {
  return (
    <table className={styles.table}>
      <thead className="thead">
      <tr className="thead__th">
        <th className={styles.colName}>Theme</th>
        <th className={styles.colName}>Word</th>
        <th className={styles.colName}>Translation</th>
      </tr>
      </thead>
      <tbody className="tbody">

      </tbody>
    </table>
  )
}

export default Statistic;