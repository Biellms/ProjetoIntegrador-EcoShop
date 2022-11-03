import React, { useState, createContext } from "react";

interface CartProviderProps{
  children: React.ReactNode
}

export const CartContext = createContext({loggedIn: false, setLoggedIn: (loggedIn: boolean) => {}});

export const CartProvider = ({ children }: CartProviderProps) => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <CartContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </CartContext.Provider>
  );
};