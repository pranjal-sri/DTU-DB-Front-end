import Department from "./Department/Department";
import classes from "../../Components/Meals/Summary.module.css";
import { Fragment } from "react";

function Departments() {
  return (
    <Fragment>
      <Summary />
      <Department />
    </Fragment>
  );
}

function Summary() {
  return (
    <section className={classes.summary}>
      <h2>Departments</h2>
      <p>Enter a valid Department Code below</p>
    </section>
  );
}
export default Departments;
