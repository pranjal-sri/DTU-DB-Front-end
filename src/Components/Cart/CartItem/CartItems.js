import Modal from "../../UI/Modal/Modal";
import styles from "./CartItems.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function CartItems(props) {
  return (
    <Modal onHide={props.onHideCart}>
      <ul className={styles["cart-items"]}>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>

      <div className={styles.total}>
        <span>TOTAL PRICE: </span>
        <span>35.86</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default CartItems;
