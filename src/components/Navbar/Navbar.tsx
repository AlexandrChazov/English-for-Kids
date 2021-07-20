import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.navList}>
              <li className={s.navItem}>Main page</li>
              <li className={s.navItem}>Actions</li>
              <li className={s.navItem}>Animals</li>
              <li className={s.navItem}>Food</li>
              <li className={s.navItem}>Months</li>
              <li className={s.navItem}>Professions</li>
              <li className={s.navItem}>Sea animals</li>
              <li className={s.navItem}>Transport</li>
              <li className={s.navItem}>Other</li>
              <li className={s.navItem}>Statistic</li>
            </ul>
        </div>
    )
}

export default Navbar;