import Subject from "./Subject/Subject";
import classes from "../../Components/Meals/Summary.module.css";
import { Fragment } from "react";

function Subjects() {
  return (
    <Fragment>
      <Summary />
      <Subject />
    </Fragment>
  );
}

function Summary() {
  return (
    <section className={classes.summary}>
      <h2>Subject</h2>
      <p>Enter a valid Subject Code below</p>
    </section>
  );
}

export default Subjects;
