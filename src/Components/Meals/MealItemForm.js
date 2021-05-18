import Input from "../UI/Input/Input";
import styles from "./MealItemForm.module.css";

function MealItemForm() {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
