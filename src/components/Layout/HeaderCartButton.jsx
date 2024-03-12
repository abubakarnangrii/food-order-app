import CartIcon from "../Cart/CartIcon"
import CSS from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <button className={CSS.button}>
        <span className={CSS.icon}><CartIcon/></span>
        <span>My Cart</span>
        <span className={CSS.badge}>3</span>
    </button>
  )
}


export default HeaderCartButton;
