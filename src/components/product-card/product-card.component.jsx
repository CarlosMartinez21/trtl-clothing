import "./product-card.styles.scss";
import Button from "../button/button.component";
import { ShowCartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;
  const { addItemToCart } = useContext(ShowCartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
