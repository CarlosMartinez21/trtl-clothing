import "./total-price.styles.scss";
import { useContext } from "react";
import { ShowCartContext } from "../../contexts/cart.context";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  // Using Context
  // const { totalPrice } = useContext(ShowCartContext);

  const totalPrice = useSelector(selectCartTotal);
  return <span className="total">Total:{totalPrice}</span>;
};

export default TotalPrice;
