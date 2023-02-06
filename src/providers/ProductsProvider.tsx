import React, { createContext, ReactNode, useContext, useMemo } from "react";
import products from "../data/data.json";

type ProductType = (typeof products)[number];

type ProductsProviderValue = {
  products: ProductType[];
};

const ProductsContext = createContext<ProductsProviderValue | null>(null);

export const ProductsProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const value = useMemo(
    () => ({
      products,
    }),
    [],
  );
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const ctx = useContext(ProductsContext);

  if (!ctx) {
    throw new Error("useContext must be use inside Provider!");
  }

  return ctx;
};
