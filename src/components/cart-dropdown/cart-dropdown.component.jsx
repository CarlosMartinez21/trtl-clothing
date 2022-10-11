import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { ShowCartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(ShowCartContext);
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "checkout";
    navigate(path);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={routeChange}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
