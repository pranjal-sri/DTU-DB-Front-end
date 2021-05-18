import img from "../../../../assets/subject.svg";
import "./SubjectDetails.css";
import { useState } from "react";

function SubjectDetails(props) {
  const [showMarks, setshowMarks] = useState(false);

  const handleClick = () => {
    setshowMarks((prev) => !prev);
  };

  return (
    <div class="subject-card">
      <div class="subject-photo">
        <img src={img} alt="sub" />
        <div className="subject-credentials">
          <p className="subject-name">{props.subject.name}</p>
          <p>{props.subject.code}</p>
          <p>{props.subject.credits} Credits</p>
          <p>{props.subject.total} Students</p>
        </div>

        {showMarks && (
          <div className="subject-marks">
            <p>
              Avg CGPA: <b>{props.subject.average}</b>
            </p>
            <p>
              Median CGPA: <b>{props.subject.median}</b>
            </p>
          </div>
        )}

        <button class="subject-add" onClick={handleClick}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default SubjectDetails;
