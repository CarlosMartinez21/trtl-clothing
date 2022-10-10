import { createContext, useState } from "react";

export const ShowCartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
});

export const ShowCartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const value = { isCartOpen, setisCartOpen };

  return (
    <ShowCartContext.Provider value={value}>
      {children}
    </ShowCartContext.Provider>
  );
};
