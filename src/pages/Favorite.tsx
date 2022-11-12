import React from "react";
import { FavouriteProductsList } from "../components/templates/favouriteProductsList/FavouriteProductsList";
import { Layout } from "../components/templates/layout/Layout";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const Favorite = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <FavouriteProductsList />
      </Layout>
    </ShoppingCartProvider>
  );
};
