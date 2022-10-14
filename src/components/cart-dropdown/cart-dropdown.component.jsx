import Button from "../button/button.component";
import { CartDropDownContainer, CartItems } from "./cart-dropdown.styles.jsx";
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
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={routeChange}>CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
