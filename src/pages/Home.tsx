import React from "react";
import { Layout } from "../components/layout/Layout";
import { ProductsList } from "../components/productsList/ProductsList";
import { ProductsProvider } from "../context/ProductsContext";

export const Home = () => {
  return (
    <ProductsProvider>
      <Layout>
        <ProductsList />
      </Layout>
    </ProductsProvider>
  );
};
