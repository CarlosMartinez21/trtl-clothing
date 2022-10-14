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

const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, deleteItemFromCart } = useContext(ShowCartContext);

  const deleteItem = () => {
    deleteItemFromCart(cartItem);
  };

  const addItem = (event) => {
    addItemToCart(cartItem, event);
  };

  return (
    <CheckoutItemContainer key={id}>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow>
          <button onClick={addItem} value="<">
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
        <span onClick={deleteItem}>&#10006;</span>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
