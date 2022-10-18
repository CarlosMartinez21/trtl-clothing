import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { ShowCartContext } from "../../contexts/cart.context";
import {
  addItemToCart,
  deleteItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, imageUrl, name, quantity, price } = cartItem;
  /* Using Contexts
  const { addItemToCart, deleteItemFromCart, clearItemFromCart } =
    useContext(ShowCartContext);*/

  const cartItems = useSelector(selectCartItems);

  const deleteItem = () => {
    dispatch(deleteItemFromCart(cartItems, cartItem));
  };

  const addItem = (event) => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const clearItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer key={id}>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow>
          <button onClick={deleteItem} value="<">
            &lt;
          </button>
          <Value>{quantity}</Value>
          <button onClick={addItem} value=">">
            &gt;
          </button>
        </Arrow>
      </Quantity>
      <Name>{price}</Name>
      <RemoveButton>
        <span onClick={clearItem}>&#10006;</span>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
