import React, { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import data from "../data/data.json";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  type: string;
  image: {
    url: string;
    height: number;
    width: number;
    alt: string;
  };
  availableAmount: number;
};

type ProductsContextType = {
  products: ProductType[];
  setProducts: (data: ProductType[]) => void;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

export const useProducts = () => {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) throw Error("Missing data in ProductsContext!");

  return productsContext;
};

type ProductsProviderProps = {
  children: ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useLocalStorage<ProductType[]>(
    "app:products",
    data,
  );

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
