import Button from "../button/button.component";
import { CartDropDownContainer, CartItems } from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { ShowCartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  /* Using Context
  const { cartItems } = useContext(ShowCartContext); */

  // Using Redux
  const cartItems = useSelector(selectCartItems);

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
