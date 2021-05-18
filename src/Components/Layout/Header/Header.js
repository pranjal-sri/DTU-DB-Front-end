import { Fragment } from "react";
import studyImg from "../../../assets/studies.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>
          DTU Results <i className="fab fa-buffer"></i>
        </h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>

      <div className={styles["main-image"]}>
        <img src={studyImg} alt="meal-img" />
      </div>
    </Fragment>
  );
}

export default Header;
