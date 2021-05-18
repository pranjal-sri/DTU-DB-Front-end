import Student from "./Student/Student";
import classes from "../../Components/Meals/Summary.module.css";
import { Fragment } from "react";

function Students() {
  return (
    <Fragment>
      <Summary />
      <Student />
    </Fragment>
  );
}

function Summary() {
  return (
    <section className={classes.summary}>
      <h2>Students</h2>
      <p>Enter a valid roll number below</p>
    </section>
  );
}

export default Students;
