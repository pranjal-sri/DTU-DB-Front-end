import { useState } from "react";
import axios from "axios";
import InputElem from "./InputElem/InputElem";
import DepartmentDetails from "./DepartmentDetails/DepartmentDetail";
import Spinner from "../../../Components/UI/Spinner/Spinner";

function Department() {
  const [students, setStudent] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [dept, setdept] = useState("");

  const handleSearch = (newDept) => {
    setLoading(true);
    setdept(newDept);
    axios
      .post(
        "https://dtu-db-api.vercel.app/department/" + newDept + "/" + count,
        { sortBy: 1, order: 1 }
      )
      .then((response) => {
        setCount((prev) => prev + 1);
        // console.log(response);
        setStudent((prev) => {
          return [...prev, ...response.data];
        });
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputElem search={handleSearch} />
      {students.length !== 0 && (
        <DepartmentDetails
          students={students}
          handleAdd={() => {
            handleSearch(dept);
          }}
        />
      )}
      {isLoading && <Spinner />}
    </div>
  );
}

export default Department;
