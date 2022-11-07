import React from "react";
import { ProductsList } from "../components/organisms/productsList/ProductsList";
import { ProductsProvider } from "../context/ProductsContext";

export const Home = () => {
  return (
    <ProductsProvider>
      <>
        <ProductsList />
      </>
    </ProductsProvider>
  );
};
