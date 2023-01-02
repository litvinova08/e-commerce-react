import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {

    const activeStyle = ({ isActive }) =>
    isActive ? `${styles.Nav_Link} ${styles.Link_Active}` : styles.Nav_Link;

  return (
    <nav>
      <NavLink className={activeStyle} to="/">Home</NavLink>
      <NavLink className={activeStyle} to="/products">Product List</NavLink>
      <NavLink className={activeStyle} to="/cart">Cart</NavLink>
      <NavLink to="/cart">
        <img className={styles.Cart} src="https://loremflickr.com/320/240"></img>
      </NavLink>
    </nav>
  )
}

export default Nav