import React from "react";
import { Layout } from "../components/templates/layout/Layout";
import { ProductsList } from "../components/organisms/productsList/ProductsList";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const Home = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <>
          <ProductsList />
        </>
      </Layout>
    </ShoppingCartProvider>
  );
};
