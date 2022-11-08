import React from "react";
import { Layout } from "../components/layout/Layout";
import { ProductsList } from "../components/productsList/ProductsList";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const Home = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <ProductsList />
      </Layout>
    </ShoppingCartProvider>
  );
};
