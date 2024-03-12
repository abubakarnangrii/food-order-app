import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../CartShowContext";
import { useContext } from "react";

const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "hgjh", amount: 2, price: 32.43 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const cartShow =useContext(CartContext);

  const handleCartClick = () => {
    cartShow.toggleCart(false);
  };

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={handleCartClick}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
