import "./total-price.styles.scss";
import { useContext } from "react";
import { ShowCartContext } from "../../contexts/cart.context";

const TotalPrice = () => {
  const { totalPrice } = useContext(ShowCartContext);
  return <span className="total">Total:{totalPrice}</span>;
};

export default TotalPrice;
