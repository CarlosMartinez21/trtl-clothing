import "./checkout-item.styles.scss";
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
    <div className="checkout-item-container" key={id}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <button onClick={addItem} value="<">
            &lt;
          </button>
          <span className="value">{quantity}</span>
          <button onClick={addItem} value=">">
            &gt;
          </button>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <span onClick={deleteItem}>&#10006;</span>
      </div>
    </div>
  );
};
export default CheckoutItem;
