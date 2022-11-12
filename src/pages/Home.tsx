import React from "react";
import { Layout } from "../components/templates/layout/Layout";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { HomeProductsList } from "../components/templates/homeProductsList/HomeProductsList";

export const Home = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <HomeProductsList />
      </Layout>
    </ShoppingCartProvider>
  );
};
