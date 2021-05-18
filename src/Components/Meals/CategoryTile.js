import "./CategoryTile.css";
import { NavLink } from "react-router-dom";

function CategoryTile(props) {
  return (
    <NavLink to={props.path} style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card__col">
          <img className="card__img" src={props.img} alt={props.name} />
        </div>
        <div className="card__content">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__text card__text--gray">{props.desc}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default CategoryTile;
