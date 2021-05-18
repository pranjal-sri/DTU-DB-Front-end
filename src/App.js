import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import Categories from "./Components/Meals/Categories";
import { Route } from "react-router-dom";
import Students from "./pages/Students/Students";
import Departments from "./pages/Departments/Departments";
import Subjects from "./pages/Subjects/Subjects";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/departments">
          <Departments />
        </Route>
        <Route path="/subjects">
          <Subjects />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
