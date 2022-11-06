import React, { createContext, ReactNode, useContext } from "react";

type ShoppingCartContextType = {
  products: string[];
};

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

export const useShoppingCartContext = () => {
  const shoppintCartContext = useContext(ShoppingCartContext);

  if (!shoppintCartContext) throw Error("Missing data in ShoppingCartContext!");

  return shoppintCartContext;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{ products: [] }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
