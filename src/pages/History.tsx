import React from "react";
import { Layout } from "../components/templates/layout/Layout";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const History = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <p>historia zakupów</p>
      </Layout>
    </ShoppingCartProvider>
  );
};
