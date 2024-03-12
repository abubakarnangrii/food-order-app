import CartIcon from "../Cart/CartIcon";
import CSS from './HeaderCartButton.module.css';
import CartContext from "../CartShowContext";
import { useContext } from "react";

const HeaderCartButton = () => {
  const cartShow = useContext(CartContext);

  const handleCartClick = () => {
    cartShow.toggleCart(true);
  };

  return (
    <button className={CSS.button} onClick={handleCartClick}>
        <span className={CSS.icon}><CartIcon/></span>
        <span>My Cart</span>
        <span className={CSS.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
