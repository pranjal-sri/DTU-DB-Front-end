import { useState } from "react";
import "./InputElem.css";

function InputElem(props) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("searchInput").focus();
    if (!content) return;
    props.search(content);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        id="searchInput"
        type="search"
        placeholder="Ex: 2K19/CO/283"
        onChange={handleChange}
        value={content}
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default InputElem;
