import { CART_ACTION_TYPES } from "./cart.types";
import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
): CartState => {
  const { payload } = action;
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: payload,
    };
  }
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: payload,
    };
  }
  return state;
};
