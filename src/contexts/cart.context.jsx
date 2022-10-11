import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd, event = undefined) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem?.quantity === 1 && event?.target.value === "<") {
    const remainingItems = deleteCartItem(cartItems, existingCartItem);
    return remainingItems;
  }

  if (
    existingCartItem &&
    existingCartItem?.quantity > 0 &&
    event?.target.value === "<"
  ) {
    return cartItems?.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  if (existingCartItem && event?.target.value !== "<") {
    return cartItems?.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  if (event?.target.value !== "<")
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, cartItemToDelete) => {
  const items = [...cartItems];
  const productToDelete = items.find(
    (cartItem) => cartItem.id === cartItemToDelete.id
  );
  items.splice(productToDelete, 1);
  return items;
};

export const ShowCartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
  setCartQuantity: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const ShowCartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let quantity = 0;
    let total = 0;
    if (cartItems.length === 0) {
      setCartQuantity(0);
    }
    cartItems.forEach((cartItem) => {
      quantity += cartItem.quantity;
      setCartQuantity(quantity);
    });
    if (cartItems.length === 0) {
      setTotalPrice(0);
    }
    cartItems.forEach((cartItem) => {
      total += cartItem.price * cartItem.quantity;
      setTotalPrice(total);
    });
  }, [cartItems]);

  const addItemToCart = (productToAdd, event) => {
    setCartItems(addCartItem(cartItems, productToAdd, event));
  };

  const deleteItemFromCart = (cartItem) => {
    setCartItems(deleteCartItem(cartItems, cartItem));
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
    deleteItemFromCart,
    totalPrice,
  };

  return (
    <ShowCartContext.Provider value={value}>
      {children}
    </ShowCartContext.Provider>
  );
};
