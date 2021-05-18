import { NavLink } from "react-router-dom";
import styles from "./HeaderButton.module.css";

function HeaderButton(props) {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <button className={styles.button}>
        <span>
          <i className="fa fa-home" ariaHidden="true"></i>
        </span>

        <span> Home</span>
      </button>
    </NavLink>
  );
}

export default HeaderButton;
