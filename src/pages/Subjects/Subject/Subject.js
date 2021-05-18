import { useState } from "react";
import axios from "axios";
import InputElem from "./InputElem/InputElem";
import SubjectDetails from "./SubjectDetails/SubjectDetails";
import Spinner from "../../../Components/UI/Spinner/Spinner";

function Subject() {
  const [subject, setSubject] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleSearch = (sub) => {
    setLoading(true);

    axios
      .get("https://dtu-db-api.vercel.app/subject/" + sub)
      .then((response) => {
        setSubject(response.data);
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputElem search={handleSearch} />
      {!isLoading && Object.keys(subject).length > 0 && (
        <SubjectDetails subject={subject} />
      )}
      {isLoading && <Spinner />}
    </div>
  );
}

export default Subject;
