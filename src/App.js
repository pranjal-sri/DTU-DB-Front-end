import "./App.css";
import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Categories from "./Components/Meals/Categories";
import CartItems from "./Components/Cart/CartItem/CartItems";
import { Route } from "react-router-dom";
import Students from "./pages/Students/Students";
import Departments from "./pages/Departments/Departments";
import Subjects from "./pages/Subjects/Subjects";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  function showCartHandler() {
    setIsCartVisible(true);
  }

  function hideCartHandler() {
    setIsCartVisible(false);
  }

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
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
      {isCartVisible && <CartItems onHideCart={hideCartHandler} />}
    </Fragment>
  );
}

export default App;
