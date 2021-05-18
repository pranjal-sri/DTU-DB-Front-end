import { Fragment } from "react";
import img from "../../../../assets/User.svg";
import "./DepartmentDetails.css";

function DepartmentDetails(props) {
  return (
    <Fragment>
      <div className="dept-students">
        {props.students.map((student) => {
          return (
            <div class="dept-card">
              <div class="dept-photo">
                <img src={img} alt="dept" />
                <div className="dept-credentials">
                  <p className="dept-name">{student.name}</p>
                  <p>{student.rollno}</p>
                </div>
                <div className="dept-marks">
                  <p>
                    CGPA: <b>{student.cgpa}</b>
                  </p>
                  <p>
                    Department Rank: <b>{student.deptrank}</b>
                  </p>
                  <p>
                    University Rank: <b>{student.unirank}</b>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="dept-add" onClick={props.handleAdd}>
        <span>+</span>
      </button>
    </Fragment>
  );
}

export default DepartmentDetails;
