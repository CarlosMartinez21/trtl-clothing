import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { ShowCartContext } from "../../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  /* Using Contexts
  const { isCartOpen, setIsCartOpen, cartQuantity } =
    useContext(ShowCartContext);*/

  //using Redux
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartQuantity = useSelector(selectCartCount);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
