import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const increaseCartQuantity = (cartQuantity) => {
  return (cartQuantity = cartQuantity + 1);
};

export const ShowCartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
  setCartQuantity: () => {},
});

export const ShowCartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCartQuantity = (cartQuantity) => {
    setCartQuantity(increaseCartQuantity(cartQuantity));
  };

  const addItemToCart = (productToAdd, numItemsInCart) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
    addToCartQuantity,
  };

  return (
    <ShowCartContext.Provider value={value}>
      {children}
    </ShowCartContext.Provider>
  );
};
