import React from "react";
import { Layout } from "../components/templates/layout/Layout";
import { ProductsList } from "../components/organisms/productsList/ProductsList";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { SortProducts } from "../components/molecules/sortProducts/SortProducts";

export const Home = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <>
          <SortProducts />
          <ProductsList />
        </>
      </Layout>
    </ShoppingCartProvider>
  );
};
