import { useState } from "react";
import axios from "axios";
import InputElem from "./InputElem/InputElem";
import StudentDetails from "./StudentDetails/StudentDetails";
import Spinner from "../../../Components/UI/Spinner/Spinner";

function Student() {
  const [student, setStudent] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleSearch = (rollNO) => {
    setLoading(true);
    axios
      .get("https://dtu-db-api.vercel.app/student/" + rollNO)
      .then((response) => {
        setStudent(response.data);
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputElem search={handleSearch} />
      {Object.keys(student).length !== 0 && (
        <StudentDetails student={student} />
      )}
      {isLoading && <Spinner />}
    </div>
  );
}

export default Student;
