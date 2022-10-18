import { useContext } from "react";
import { ShowCartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import TotalPrice from "../../components/total-price/total-price.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./checkout.styles.jsx";

import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const Checkout = () => {
  // using Context
  // const { cartItems } = useContext(ShowCartContext);
  const cartItems = useSelector(selectCartItems);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalPrice key="price" />
    </CheckoutContainer>
  );
};

export default Checkout;
