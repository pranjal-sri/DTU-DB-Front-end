import CategoryTiles from "./CategoryTiles";
import Summary from "./Summary";
import { Fragment } from "react";

function Categories() {
  return (
    <Fragment>
      <Summary />
      <CategoryTiles />
    </Fragment>
  );
}

export default Categories;
