import React from "react";
import { Layout } from "../components/templates/layout/Layout";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const Favorite = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <p>ulubione</p>
      </Layout>
    </ShoppingCartProvider>
  );
};
