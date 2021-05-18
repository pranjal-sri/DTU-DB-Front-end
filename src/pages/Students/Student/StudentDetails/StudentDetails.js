import img from "../../../../assets/User.svg";
import "./StudentDetails.css";
import { useState } from "react";

function StudentDetails(props) {
  const [showMarks, setshowMarks] = useState(false);

  const handleClick = () => {
    setshowMarks((prev) => !prev);
  };

  return (
    <div class="student-card">
      <div class="student-photo">
        <img src={img} alt="stud" />
        <div className="student-credentials">
          <p className="student-name">{props.student.name}</p>
          <p>{props.student.rollno}</p>
          <p>{props.student.degree.name}</p>
          <p>{props.student.dept.name}</p>

          <p>{"Semester " + props.student.currentsem}</p>
        </div>

        {showMarks && (
          <div className="student-marks">
            <p>
              CGPA: <b>{props.student.cgpa}</b>
            </p>
            <p>
              Department Rank: <b>{props.student.deptrank}</b>
            </p>
            <p>
              University Rank: <b>{props.student.unirank}</b>
            </p>
          </div>
        )}

        <button class="student-add" onClick={handleClick}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;
