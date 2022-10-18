import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ShowCartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { imageUrl, price, name } = product;
  // Using Contexts
  // const { addItemToCart } = useContext(ShowCartContext);

  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
