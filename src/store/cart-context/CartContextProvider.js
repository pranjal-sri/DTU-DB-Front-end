import CartContext from "./Cart-context.js";

function CartContextProvider(props) {
  function addItemHandler(item) {}

  function deleteItemHandler(id) {}

  const contextValue = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: deleteItemHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
