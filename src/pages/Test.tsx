import React from "react";
import { Layout } from "../components/templates/layout/Layout";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const Test = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <p>hello</p>
      </Layout>
    </ShoppingCartProvider>
  );
};
