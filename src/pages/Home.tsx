import React from "react";
import { ProductsList } from "../components/productsList/ProductsList";
import { ProductsProvider } from "../context/ProductsContext";

export const Home = () => {
  return (
    <ProductsProvider>
      <div className="container mx-auto px-4">
        <ProductsList />
      </div>
    </ProductsProvider>
  );
};
